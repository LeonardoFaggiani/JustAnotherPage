import React, { useRef, useEffect, useState, useContext } from 'react'
import './home.css'
import Section from '../section/section';
import { LoadingScreenContext } from '../../context/loadingProvider'
import { useTranslation } from 'react-i18next';
import { convertToEm, scrollTo } from '../shared/utils/utils'
import SectionContact from '../section/section-contact'


export default function Home() {

    const home = useRef(null);
    const about = useRef(null);
    const [scrollTop, setScrollTop] = useState(0);
    const [t] = useTranslation();
    const useLoadingScreen = useContext(LoadingScreenContext);
    
    const sectionStartedConfig = {
        id: "section-started",
        innerRef: home,
        content: `<div className="section started">
                    <div className="centrize full-width">
                        <div className="vertical-center">
                            <h1 className="h-title"> <span> Leonardo <br />Faggiani </span></h1>
                                <div className="started-content">
                                    <div className="h-subtitles">
                                        <div className="h-subtitle">
                                            <p> <span> ${t("section.started.subtitle")} </span></p>
                                        </div>
                                    </div>
                                    <div className="h-text">
                                        <div>
                                            <p>${t("section.started.description")}</p>
                                        </div>
                                    </div>
                                    <a id="goToContactButton" className="btn">
                                        <span className="animated-button">
                                            <span>${convertToEm(t("section.started.buttonLabel"), false)}</span>
                                        </span>
                                        <i className="icon fas fa-chevron-right"></i>
                                    </a>
                                    <a id="goToAboutButton" className="${scrollTop >= 5 ? 'btn mouse-btn fadeOut' : 'btn mouse-btn fadeIn'}">
                                        <i className="icon fas fa-chevron-down"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>`
    };

    const sectionAboutConfig = {
        id: "section-about",
        innerRef: about,
        content: `<div className="section about">
                        <div className="content">
                            <div className="titles"><h2 className="title"> <span> ${t("section.aboutMe.title")} </span></h2>
                                <div className="subtitle"> <span> ${t("section.aboutMe.subtitle")} </span> </div>
                            </div>
                            <div className="single-post-text">
                                <div>
                                    <p>${t("section.aboutMe.firstParagraph")}</p>
                                    <p>${t("section.aboutMe.secondParagraph")}</p>
                                </div>
                            </div>
                            <div className="info-list">
                                <ul>
                                    <li> <strong> <span> ${t("age")}: </span> </strong> <span> 35 </span></li>                                    
                                    <li> <strong> <span> ${t("address")}: </span> </strong> <span> Rosario </span></li>
                                    <li> <strong> <span> ${t("phone")}: </span> </strong> <span> +54 9 341 5147457 </span></li>
                                    <li> <strong> <span> ${t("email")}: </span> </strong> <span> leonardofaggiani@hotmail.com </span></li>
                                </ul>
                            </div>
                            <div className="clear">
                            </div>
                        </div>
                    </div>`
    };

    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
    );

    function goToSection(sectionName) {

        const section = document.getElementById(sectionName);
        scrollTo(section.offsetTop, "smooth");
    }

    function setOnClickEvent() {
        const contactButton = document.getElementById('goToContactButton');
        const aboutButton = document.getElementById('goToAboutButton');

        if(contactButton && aboutButton) {
            contactButton.onclick = () => goToSection("section-contacts");
            aboutButton.onclick = () => goToSection("section-about");
        }        
    }

    function showLoading() {

        delay(1500).then(() => {

            useLoadingScreen.setLoading(false);

            setOnClickEvent();

        });
    }

    showLoading();

    useEffect(() => {

        const handleScroll = event => {
            setScrollTop(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);

    useEffect(() => {

        const setStyle = () => {
            const wrapper = document.getElementById('wrapperContent');
            wrapper.classList.remove("marginLeft-12");
        };

        setStyle();

    }, []);

    return (
        <>
            <div className="background-bg">
                <div className="background-filter">
                    <div className="background-img profileImage">
                    </div>
                </div>
            </div>

            <div className="elementor">

                <Section scrollTop={scrollTop} config={sectionStartedConfig}></Section>
                <Section scrollTop={scrollTop} config={sectionAboutConfig}></Section>
                <SectionContact></SectionContact>

            </div>
        </>
    )
}