import React, { useEffect, useContext } from 'react'
import './blog.css'
import { useTranslation } from 'react-i18next';
import { LoadingScreenContext } from '../../context/loadingProvider'
import { convertToEm, scrollTo } from '../shared/utils/utils'

export default function Blog() {

    const useLoadingScreen = useContext(LoadingScreenContext);
    const [t] = useTranslation();

    useEffect(() => {

        const setStyle = () => {
            const wrapper = document.getElementById('wrapperContent');
            wrapper.classList.add("marginLeft-12");

            scrollTo(0, "instant");
        };

        setStyle();

    }, []);

    useLoadingScreen.setLoading(false);

    return (
        <>
            <div className="background-bg background-bg-inner">
                <div className="background-filter">
                    <div className="background-img"></div>
                </div>
            </div>

            <div className="section-title center">
                <div className="full-width top">
                    <div>
                        <div className="started-content">
                            <h1 className="h-title"> {t("blogTitle")}</h1>
                            <div className="h-subtitles">
                                <div className="h-subtitle blogSubtitle"> {t("blogSubtitle")}</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="section blog with-sidebar">
                <div className="content centerContent">
                    <div className="blog-items cols">
                        <div className="blog-col">
                            <div className="blog-item content-box">
                                <div id="post-73" className="post type-post status-publish format-standard has-post-thumbnail hentry category-design category-music category-uncategorized category-wordpress tag-design tag-html">
                                    <div className="image">
                                        <a className="post-thumbnail" target='blank' href="https://github.com/LeonardoFaggiani/UE5Samples" aria-hidden="true" tabIndex="-1">
                                            <img width="1280"
                                                height="720" src="https://leofstorage.blob.core.windows.net/my-personal-storage/UnrealGameLobby.JPG"
                                                decoding="async"
                                                srcSet="https://leofstorage.blob.core.windows.net/my-personal-storage/UnrealGameLobby.JPG 1280w,
                                                 https://leofstorage.blob.core.windows.net/my-personal-storage/UnrealGameLobby.JPG 300w,
                                                 https://leofstorage.blob.core.windows.net/my-personal-storage/UnrealGameLobby.JPG 1024w,
                                                 https://leofstorage.blob.core.windows.net/my-personal-storage/UnrealGameLobby.JPG 768w,
                                                 https://leofstorage.blob.core.windows.net/my-personal-storage/UnrealGameLobby.JPG 512w,
                                                 https://leofstorage.blob.core.windows.net/my-personal-storage/UnrealGameLobby.JPG 900w,
                                                 https://leofstorage.blob.core.windows.net/my-personal-storage/UnrealGameLobby.JPG 1170w"
                                                 alt='UnrealGameLobby'
                                                sizes="(max-width: 1280px) 100vw, 1280px" />
                                        </a>
                                    </div>
                                    <div className="desc">
                                        <a href="https://github.com/LeonardoFaggiani/UE5Samples" className="name">{t("blog.unreal.title")}</a>
                                        <div className="single-post-text">
                                            <p>{t("blog.unreal.description")}</p>
                                            <div>
                                                <a href="https://github.com/LeonardoFaggiani/UE5Samples" className="btn">
                                                    <span className="animated-button">
                                                        <span>{convertToEm(t("buttonReadMore"))}</span></span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="blog-col">
                            <div className="blog-item content-box">
                                <div id="post-71" className="post type-post status-publish format-standard has-post-thumbnail hentry category-design category-music category-uncategorized category-wordpress tag-design tag-html">
                                    <div className="image">
                                        <a className="post-thumbnail" href="https://github.com/LeonardoFaggiani/justanotherpage" aria-hidden="true" tabIndex="-1">
                                            <img width="1280" height="719" src="https://leofstorage.blob.core.windows.net/my-personal-storage/MyWeb.JPG"
                                                alt="Modern street art as a source of inspiration"
                                                decoding="async"
                                                srcSet="https://leofstorage.blob.core.windows.net/my-personal-storage/MyWeb.JPG 1280w,
                                                 https://leofstorage.blob.core.windows.net/my-personal-storage/MyWeb.JPG 300w,
                                                 https://leofstorage.blob.core.windows.net/my-personal-storage/MyWeb.JPG 1024w,
                                                 https://leofstorage.blob.core.windows.net/my-personal-storage/MyWeb.JPG 768w,
                                                 https://leofstorage.blob.core.windows.net/my-personal-storage/MyWeb.JPG 512w,
                                                 https://leofstorage.blob.core.windows.net/my-personal-storage/MyWeb.JPG 900w,
                                                 https://leofstorage.blob.core.windows.net/my-personal-storage/MyWeb.JPG 1170w"
                                                sizes="(max-width: 1280px) 100vw, 1280px" />
                                        </a>
                                    </div>
                                    <div className="desc">
                                        <a href="https://github.com/LeonardoFaggiani/justanotherpage" className="name">{t("blog.myweb.title")}</a>
                                        <div className="single-post-text">
                                            <p>{t("blog.myweb.description")}</p>
                                            <div>
                                                <a href="https://github.com/LeonardoFaggiani/justanotherpage" className="btn">
                                                    <span className="animated-button"><span>{convertToEm(t("buttonReadMore"))}</span></span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}