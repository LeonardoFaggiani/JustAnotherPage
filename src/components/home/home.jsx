import React, { useEffect, useContext } from 'react'
import './home.css'
import { LoadingScreenContext } from '../../context/loadingProvider'
import { delayInMs } from '../shared/utils/utils';
import SectionContact from '../section/section-contact'
import SectionAbout from '../section/section-about';
import SectionStart from '../section/section-start';


export default function Home() {

    const useLoadingScreen = useContext(LoadingScreenContext);

    function showLoading() {

        delayInMs(1500).then(() => {
            useLoadingScreen.setLoading(false);
        });
    }

    showLoading();

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
                <SectionStart></SectionStart>
                <SectionAbout></SectionAbout>
                <SectionContact></SectionContact>
            </div>
        </>
    )
}