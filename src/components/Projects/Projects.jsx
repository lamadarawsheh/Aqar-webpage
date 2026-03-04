import React from 'react';
import useFadeIn from '../../hooks/useFadeIn';

const Projects = () => {
    const { ref: titleRef, isVisible: titleVisible } = useFadeIn();
    const { ref: imgRef, isVisible: imgVisible } = useFadeIn();

    return (
        <section className="py-[20px] bg-transparent" id="projects">
            <div className="custom-container">
                <h2
                    ref={titleRef}
                    className={`section-title fade-hidden fade-right ${titleVisible ? 'fade-visible' : ''}`}
                >
                    مشاريعنا
                </h2>
                <div className="flex justify-start items-center py-[20px]">
                    <div
                        ref={imgRef}
                        className={`fade-hidden fade-up fade-scale fade-delay-2 ${imgVisible ? 'fade-visible' : ''}`}
                    >
                        <img src="/rct-logo.jpg" alt="RCT - Real estate and construction technology" className="max-w-[320px] h-auto mr-[15%] transition-transform duration-300 ease-in-out hover:scale-[1.02]" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
