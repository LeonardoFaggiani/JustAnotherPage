import React, { useRef, useEffect, useState, useContext } from 'react'
import './home.css'
import Section from '../section/section';
import { LoadingScreenContext } from '../../context/loadingProvider'
import { useTranslation } from 'react-i18next';
import { ConvertToEm } from '../shared/utils/utils'


export default function Home() {

    const home = useRef(null);
    const about = useRef(null);
    const contact = useRef(null);
    const [scrollTop, setScrollTop] = useState(0);
    const [t, i18n] = useTranslation();
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
                                            <span>${ConvertToEm(t("section.started.buttonLabel"), false)}</span>
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

    const sectionContactConfig = {
        id: "section-contacts",
        innerRef: contact,
        content: `<div className="section contacts">
                    <div className="content">
                        <div className="titles">
                            <h2 className="title"> <span> ${t("section.contact.title")} </span></h2>
                            <div className="subtitle"> <span> ${t("section.contact.subtitle")} </span></div>
                        </div>
                        <div className="contact-form">
                            <div lang="en-US" dir="ltr">
                                <div>
                                    <p role="status" aria-live="polite" aria-atomic="true"></p>
                                    <ul></ul>
                                </div>
                                <form action="/#wpcf7-f57-p97-o1" method="post" aria-label="Contact form" noValidate="noValidate" data-status="init">

                                    <div className="group-val">
                                        <div className="label">
                                            <p>${t("fullName")} <strong>*</strong></p>
                                        </div>
                                        <p>
                                            <span data-name="your-name">
                                                <input size="40" aria-required="true" aria-invalid="false" placeholder="ej.: Leonel Messi" type="text" name="your-name" />
                                            </span>
                                        </p>
                                    </div>

                                    <div className="group-val">
                                        <div className="label">
                                            <p>${t("email")} <strong>*</strong></p>
                                        </div>
                                        <p>
                                            <span data-name="your-email">
                                                <input size="40" aria-required="true" aria-invalid="false" placeholder="example@domain.com" type="email" name="your-email" />
                                            </span>
                                        </p>
                                    </div>

                                    <div className="group-val">
                                        <div className="label">
                                            <p>${t("message")}<strong>*</strong></p>
                                        </div>
                                        <p>
                                            <span data-name="your-message">
                                                <textarea cols="40" rows="10" aria-required="true" aria-invalid="false" name="your-message"></textarea>
                                            </span>
                                        </p>
                                    </div>

                                    <div className="group-bts">
                                        <p>
                                            <button type="submit" className="btn">
                                                <span className="animated-button">
                                                    <span>${ConvertToEm(t("sendMessage"), false)}</span>
                                                </span>
                                                <i className="icon fas fa-chevron-right"></i>
                                            </button>
                                        </p>
                                    </div>

                                    <div className="wpcf7-response-output" aria-hidden="true"></div>
                                </form>
                            </div>
                        </div>

                        <div className="contact-info">
                            <div className="name">Leonardo Faggiani</div>
                            <div className="subname">Programmer &amp; Mentor</div>
                            <div className="info-list">
                                <ul>
                                    <li> <strong> <span> ${t("age")}: </span> </strong> <span> 35 </span></li>                                    
                                    <li> <strong> <span> ${t("address")}: </span> </strong> <span> Rosario </span></li>
                                    <li> <strong> <span> ${t("phone")}: </span> </strong> <span> +54 9 341 5147457 </span></li>
                                    <li> <strong> <span> ${t("email")}: </span> </strong> <span> leonardofaggiani@hotmail.com </span></li>
                                </ul>
                            </div>

                            <div className="author">Leonardo Faggiani</div>
                        </div>

                        <div className="clear"></div>
                    </div>
                </div>`
    };

    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
    );

    function goToSection(sectionName) {
        const section = document.getElementById(sectionName);

        window.scrollTo({
            top: section.offsetTop,
            behavior: "smooth"
        });
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
                <Section scrollTop={scrollTop} config={sectionContactConfig}></Section>

            </div>
        </>
    )
}