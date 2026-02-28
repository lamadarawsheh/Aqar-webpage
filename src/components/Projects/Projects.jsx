import React from 'react';

const Projects = () => {
    return (
        <section className="py-[20px] bg-transparent" id="projects">
            <div className="custom-container">
                <h2 className="section-title">مشاريعنا</h2>
                <div className="flex justify-start items-center py-[20px]">
                    <div>
                        <img src="/rct-logo.jpg" alt="RCT - Real estate and construction technology" className="max-w-[320px] h-auto mr-[15%] transition-transform duration-300 ease-in-out hover:scale-[1.02]" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
