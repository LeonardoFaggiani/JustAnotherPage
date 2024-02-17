import React, { createContext, useState, useContext } from "react";
import Loader from "../components/loader/loader";

export const LoadingScreenContext = createContext({
    loading: true,
    setLoading: null
  });
  
export const useLoadingScreen = () => useContext(LoadingScreenContext);

const LoadingScreenProvider = ({ children }) => {

    const [loading, setLoading] = useState(true, null)

    const value = { loading, setLoading };

    return (
        <>
            <Loader isLoading={loading} />
            <LoadingScreenContext.Provider value={value}>
                {children}
            </LoadingScreenContext.Provider>
        </>
    )
}

export default LoadingScreenProvider;