
import React, { useEffect, useState } from 'react'
import './loader.css'

export default function Loader({isLoading}) {

    const initialLinesAnimation = {
        opacity: '1',
        transform: 'translateY(0)',
        transition: 'opacity 0.4s, transform 0.4s'
    };

    const initialFirstBackgroundAnimation = {
        transform: 'translateY(0)',
        transition: 'transform 1s cubic-bezier(0.7, 0, 0.3, 1)'
    };
    
    const initialSecondBackgroundAnimation = {
        transform: 'translateY(0)',
        transition: 'transform 0.4s cubic-bezier(0.7, 0, 0.3, 1)'
    };

    const [linesAnimation, setLinesAnimation] = useState(initialLinesAnimation);

    const [firstBackgroundAnimation, setFirstBackgroundAnimation] = useState(initialFirstBackgroundAnimation);

    const [secondBackgroundAnimation, setSecondBackgroundAnimation] = useState(initialSecondBackgroundAnimation);


    useEffect(() => {

        if (isLoading) {
            setLinesAnimation(initialLinesAnimation);
            setFirstBackgroundAnimation(initialFirstBackgroundAnimation);
            setSecondBackgroundAnimation(initialSecondBackgroundAnimation);
        }
        else {
            hideLoader();
        }

    }, [isLoading]);

    function hideLoader() {

        setLinesAnimation({
            opacity: '0',
            transform: 'translateY(-40px)',
            transition: 'opacity 0.4s, transform 0.4s'
        });

        setFirstBackgroundAnimation({
            transform: 'translateY(-100%)',
            transition: 'transform 1s cubic-bezier(0.7, 0, 0.3, 1)'
        });

        setSecondBackgroundAnimation({
            transform: 'translateY(-100%)',
            transition: 'transform 0.4s cubic-bezier(0.7, 0, 0.3, 1)'
        });
    }

    // useEffect(() => {

    //     const handleLoad = () => {

    //         const timeoutId = setTimeout(() => {

    //             setLinesAnimation({
    //                 opacity: '0',
    //                 transform: 'translateY(-40px)',
    //                 transition: 'opacity 0.4s, transform 0.4s'
    //             });

    //             setFirstBackgroundAnimation({
    //                 transform: 'translateY(-100%)',
    //                 transition: 'transform 1s cubic-bezier(0.7, 0, 0.3, 1)'
    //             });

    //             setSecondBackgroundAnimation({
    //                 transform: 'translateY(-100%)',
    //                 transition: 'transform 0.4s cubic-bezier(0.7, 0, 0.3, 1)'
    //             });
    //         }, 2000);

    //         return () => clearTimeout(timeoutId);
    //     };

    //     window.addEventListener("load", handleLoad);

    //     return () => {
    //         window.removeEventListener("load", handleLoad);
    //     };

    // }, []);


    return (
        <>
            <div className="preloader">
                <div className="box-1" style={firstBackgroundAnimation}> </div>

                <div className="box-2" style={secondBackgroundAnimation}>
                    <div className="centrize full-width">
                        <div className="vertical-center">
                            <div className="spinner" style={linesAnimation}>
                                <div className="lines"> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}    