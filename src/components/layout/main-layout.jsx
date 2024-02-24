
import React from 'react'
import Header from '../header/header';
import LoadingScreenProvider from '../../context/loadingProvider';
import i18next from '../../assets/languages/i18n'

export default function MainLayout({ children }) {

    const changeLanguage = () => {

        const language = localStorage.getItem('lng');

        if (language === "en") {
            i18next.changeLanguage("es");
            localStorage.setItem('lng', 'es');
        }
        else {
            i18next.changeLanguage("en");
            localStorage.setItem('lng', 'en');
        }
    }

    return (
        <>
            <Header></Header>
            <LoadingScreenProvider>
                <div className="container">
                    <div className="wrapper" id="wrapperContent">
                        {children}
                    </div>

                    <footer className="footer">
                        <div className="footer-inner">
                            <div className="socials">
                                <a target="_blank" rel="noreferrer" href="https://github.com/LeonardoFaggiani">
                                    <i className="fa-brands fa-github"></i>
                                </a>

                                <a target="_blank" rel="noreferrer"  href="https://www.linkedin.com/in/leonardo-faggiani-2ba30859/">
                                    <i className="fa-brands fa-linkedin"></i>
                                </a>

                                <a onClick={() => changeLanguage()} rel="noreferrer" className='pointerCursor'>
                                    <i className="fa-solid fa-language"></i>
                                </a>
                            </div>
                        </div>
                    </footer>
                </div>
            </LoadingScreenProvider>
        </>
    );
};