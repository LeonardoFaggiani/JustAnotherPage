import React from 'react'
import parse from 'html-react-parser';
import './section.css'

export default function Section({scrollTop, config}) {

    return (
        <>
            <section ref={config.innerRef} className="elementor-section elementor-element" id={config.id}>
                <div className="elementor-container elementor-column-gap-no">
                    <div className="elementor-column elementor-col-100 elementor-element">
                        <div className="elementor-widget-wrap">
                            <div className="elementor-element elementor-widget">
                                <div className="elementor-widget-container">
                                    { parse(config.content) }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );

}