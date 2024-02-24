import React, { useLayoutEffect, createContext, useState, useContext } from "react";
import Loader from "../components/loader/loader";
import { useLocation } from "react-router-dom";

export const LoadingScreenContext = createContext({
    loading: false,
    setLoading: null
});

export const useLoadingScreen = () => useContext(LoadingScreenContext);

const LoadingScreenProvider = ({ children }) => {

    const [loading, setLoading] = useState(false, null)
    const { pathname } = useLocation();
    const value = { loading, setLoading };

    useLayoutEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, [pathname]);

    return (
        <>
            {
                loading
                    ? <Loader isLoading={loading} />
                    : <LoadingScreenContext.Provider value={value}> {children} </LoadingScreenContext.Provider>
            }
        </>
    )
}

export default LoadingScreenProvider;