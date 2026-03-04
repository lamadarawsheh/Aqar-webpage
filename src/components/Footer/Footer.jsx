import React from 'react';
import useFadeIn from '../../hooks/useFadeIn';

const Footer = () => {
    const { ref: footerRef, isVisible: footerVisible } = useFadeIn({ threshold: 0.2 });

    return (
        <footer
            ref={footerRef}
            className={`bg-primary py-[30px] text-white text-center fade-hidden fade-up ${footerVisible ? 'fade-visible' : ''}`}
        >
            <div className="custom-container">
                <p dir="ltr" className="text-[0.95rem] font-[inherit] font-medium tracking-[0.5px] inline-block">© Copyright Future App Technology All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
