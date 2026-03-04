import React from 'react';
import useFadeIn from '../../hooks/useFadeIn';

const About = () => {
    const { ref: titleRef, isVisible: titleVisible } = useFadeIn();
    const { ref: contentRef, isVisible: contentVisible } = useFadeIn();

    return (
        <section className="pt-[40px] pb-[20px] bg-transparent" id="about">
            <div className="custom-container">
                <h2
                    ref={titleRef}
                    className={`section-title fade-hidden fade-right ${titleVisible ? 'fade-visible' : ''}`}
                >
                    عن تقنية تطبيقات المستقبل
                </h2>
                <div
                    ref={contentRef}
                    className="[text-align:justify] text-[#4a4a4a] text-[1.1rem] max-w-[900px] mr-0 leading-[1.8]"
                    style={{ textJustify: 'inter-word' }}
                >
                    <p className={`mb-[15px] font-medium fade-hidden fade-up fade-delay-1 ${contentVisible ? 'fade-visible' : ''}`}>
                        شركة تقنية تطبيقات المستقبل متخصصة في ابتكار وتطوير تطبيقات ومنتجات رقمية. نعمل على تحويل الأفكار إلى حلول تقنية ذكية تخدم المستخدم وتواكب متطلبات السوق الحديث. نؤمن بأن النجاح يبدأ من امتلاك الفكرة وتطويرها بالكامل، لذلك نركز على بناء تطبيقاتنا من الصفر، بدءا من التخطيط والتصميم، مرورا بالتطوير التقني، وانتهاء بالتشغيل والتحسين المستمر.
                    </p>
                    <p className={`mb-[15px] font-medium fade-hidden fade-up fade-delay-3 ${contentVisible ? 'fade-visible' : ''}`}>
                        نعتمد على أحدث التقنيات وأفضل الممارسات في عالم البرمجة وتجربة المستخدم، ونحرص على تقديم منتجات موثوقة، سهلة الاستخدام، وقابلة للتطور والنمو.
                    </p>
                    <p className={`mb-[15px] font-medium fade-hidden fade-up fade-delay-5 ${contentVisible ? 'fade-visible' : ''}`}>
                        هدفنا هو بناء منظومة تطبيقات رقمية مبتكرة تضيف قيمة حقيقية وتواكب المستقبل.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
