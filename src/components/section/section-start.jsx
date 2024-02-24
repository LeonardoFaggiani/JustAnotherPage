import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { convertToEm, scrollTo } from '../shared/utils/utils'
import './section.css'

export default function SectionStart() {

    const [t] = useTranslation();
    const [scrollTop, setScrollTop] = useState(0);
    const aboutButton = useRef(null);
    const contactButton = useRef(null);

    useEffect(() => {

        const handleScroll = event => {
            setScrollTop(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);


    function setOnClickEvent() {

        if (contactButton.current && aboutButton.current) {
            contactButton.current.onclick = () => goToSection("section-contacts");
            aboutButton.current.onclick = () => goToSection("section-about");
        }
    }

    function goToSection(sectionName) {

        const section = document.getElementById(sectionName);

        if (section)
            scrollTo(section.offsetTop, "smooth");
    }

    setOnClickEvent();

    return (
        <>
            <div className="section started" id='section-started'>
                <div className="centrize full-width">
                    <div className="vertical-center">
                        <h1 className="h-title"> <span> Leonardo <br />Faggiani </span></h1>
                        <div className="started-content">
                            <div className="h-subtitles">
                                <div className="h-subtitle">
                                    <p> <span> {t("section.started.subtitle")} </span></p>
                                </div>
                            </div>
                            <div className="h-text">
                                <div>
                                    <p>{t("section.started.description")}</p>
                                </div>
                            </div>
                            <button id="goToContactButton" ref={contactButton} className="btn">
                                <span className="animated-button">
                                    <span>{convertToEm(t("section.started.buttonLabel"), true)}</span>
                                </span>
                                <i className="icon fas fa-chevron-right"></i>
                            </button>
                            <button id="goToAboutButton" ref={aboutButton} className={(scrollTop >= 5 ? 'btn mouse-btn fadeOut' : 'btn mouse-btn fadeIn')}>
                                <i className="icon fas fa-chevron-down"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}