import { useTranslation } from 'react-i18next';
import './section.css'

export default function SectionAbout() {

    const [t] = useTranslation();

    return (
        <>
            <div className="section about" id='section-about'>
                <div className="content">
                    <div className="titles"><h2 className="title"> <span> {t("section.aboutMe.title")} </span></h2>
                        <div className="subtitle"> <span> {t("section.aboutMe.subtitle")} </span> </div>
                    </div>
                    <div className="single-post-text">
                        <div>
                            <p>{t("section.aboutMe.firstParagraph")}</p>
                            <p>{t("section.aboutMe.secondParagraph")}</p>
                        </div>
                    </div>
                    <div className="info-list">
                        <ul>
                            <li> <strong> <span> {t("age")}: </span> </strong> <span> 35 </span></li>
                            <li> <strong> <span> {t("address")}: </span> </strong> <span> Rosario </span></li>
                            <li> <strong> <span> {t("phone")}: </span> </strong> <span> +54 9 341 5147457 </span></li>
                            <li> <strong> <span> {t("email")}: </span> </strong> <span> leonardofaggiani@hotmail.com </span></li>
                        </ul>
                    </div>
                    <div className="clear">
                    </div>
                </div>
            </div>
        </>
    );
}