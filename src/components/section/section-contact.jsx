import React, { useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { convertToEm, delayInMs } from '../shared/utils/utils'
import { useForm } from 'react-hook-form';
import './section.css'

export default function SectionContact() {

    const [t] = useTranslation();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const responseOutput = useRef(null);
    
    useEffect(() => {
        cleanValidation();
    }, []);

    const sendEmail = (data) => {

        cleanValidation();
        
        const requestBody = {
            email: data.email,
            fullName: data.name,
            message: data.comment
        }

        const requestOptions = {
            method: 'POST',
            body: JSON.stringify(requestBody)
        };

        fetch('https://send-notification.azurewebsites.net/api/SaveEmailMessageInQueue', requestOptions)
            .then((result) => {
                    responseOutput.current.classList.add("response-success-output");
                    responseOutput.current.textContent = t("responseSuccessOutput");
            })
            .catch((error) => {                
                    responseOutput.current.classList.add("response-failure-output");
                    responseOutput.current.textContent = t("responseFailureOutput")
            }).finally(() => {

                delayInMs(3000).then(() => {
                    cleanValidation();
                });
            })
    }

    function cleanValidation() {

        if (responseOutput) {
            responseOutput.current.classList.remove("response-success-output");
            responseOutput.current.classList.remove("response-failure-output");
            responseOutput.current.textContent = "";
        }
    }
    
    return (
        <>        
            <section className="elementor-section elementor-element" id="section-contacts">
                <div className="elementor-container elementor-column-gap-no">
                    <div className="elementor-column elementor-col-100 elementor-element">
                        <div className="elementor-widget-wrap">
                            <div className="elementor-element elementor-widget">
                                <div className="elementor-widget-container">
                                    <div className="section contacts">
                                        <div className="content">
                                            <div className="titles">
                                                <h2 className="title"> <span> {t("section.contact.title")} </span></h2>
                                                <div className="subtitle"> <span> {t("section.contact.subtitle")} </span></div>
                                            </div>
                                            <div className="contact-form">
                                                <div lang="en-US" dir="ltr">
                                                    <div>
                                                        <p role="status" aria-live="polite" aria-atomic="true"></p>
                                                        <ul></ul>
                                                    </div>
                                                    <form onSubmit={handleSubmit(sendEmail)} aria-label="Contact form" noValidate="noValidate" data-status="init">

                                                        <div className="group-val">
                                                            <div className="label">
                                                                <p>{t("fullName")} <strong>*</strong></p>
                                                            </div>
                                                            <div>
                                                                <span data-name="your-name">
                                                                    <input size="40" className={(errors.name ? 'wpcf7-not-valid' : '')}  {...register("name", { required: true })} placeholder="ej.: Leonel Messi" type="text" name="name" />
                                                                    {errors.name && <span className="input-not-valid" aria-hidden="true">{t("fieldRequired")}</span> }
                                                                </span>
                                                            </div>
                                                        </div>

                                                        <div className="group-val">
                                                            <div className="label">
                                                                <p>{t("email")} <strong>*</strong></p>
                                                            </div>
                                                            <div>
                                                                <span data-name="your-email">
                                                                    <input size="100" className={(errors.email ? 'wpcf7-not-valid' : '')} {...register("email", { required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ })} placeholder="example@domain.com" type="email" name="email" />
                                                                    {errors.email && errors.email.type === 'required' && <span className="input-not-valid" aria-hidden="true">{t("fieldRequired")}</span> }
                                                                    {errors.email && errors.email.type === 'pattern' && <span className="input-not-valid" aria-hidden="true">{t("formatIncorrect")}</span> }
                                                                </span>
                                                            </div>
                                                        </div>

                                                        <div className="group-val">
                                                            <div className="label">
                                                                <p>{t("message")}<strong>*</strong></p>
                                                            </div>
                                                            <div>
                                                                <span data-name="your-message">
                                                                    <textarea cols="40" className={(errors.comment ? 'wpcf7-not-valid' : '')}  {...register("comment", { required: true })} rows="10" aria-required="true" aria-invalid="false" name="comment"></textarea>
                                                                    {  errors.comment && <span className="input-not-valid" aria-hidden="true">{t("fieldRequired")}</span> }
                                                                </span>
                                                            </div>
                                                        </div>

                                                        <div className="group-bts">
                                                            <p>
                                                                <button type="submit" className="btn">
                                                                    <span className="animated-button">
                                                                        <span>{convertToEm(t("sendMessage"), true)}</span>
                                                                    </span>
                                                                    <i className="icon fas fa-chevron-right"></i>
                                                                </button>
                                                            </p>
                                                        </div>

                                                        <div ref={responseOutput}>

                                                        </div>

                                                    </form>
                                                </div>
                                            </div>

                                            <div className="contact-info">
                                                <div className="name">Leonardo Faggiani</div>
                                                <div className="subname">Programmer &amp; Mentor</div>
                                                <div className="info-list">
                                                    <ul>
                                                        <li> <strong> <span> {t("age")}: </span> </strong> <span> 35 </span></li>
                                                        <li> <strong> <span> {t("address")}: </span> </strong> <span> Rosario </span></li>
                                                        <li> <strong> <span> {t("phone")}: </span> </strong> <span> +54 9 341 5147457 </span></li>
                                                        <li> <strong> <span> {t("email")}: </span> </strong> <span> leonardofaggiani@hotmail.com </span></li>
                                                    </ul>
                                                </div>

                                                <div className="author">Leonardo Faggiani</div>
                                            </div>

                                            <div className="clear"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}