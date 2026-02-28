import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const schema = z.object({
    user_name: z.string().min(2, { message: 'الاسم يجب أن يكون حرفين على الأقل' }),
    user_email: z
        .string()
        .email({ message: 'يرجى إدخال بريد إلكتروني صحيح' })
        .refine((val) => !val.includes(' '), { message: 'البريد الإلكتروني لا يجب أن يحتوي على مسافات' }),
    message: z.string().min(10, { message: 'الرسالة يجب أن تكون 10 أحرف على الأقل' }),
});

const Contact = () => {
    const [status, setStatus] = useState('');

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data) => {
        setStatus('sending');

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        const templateParams = {
            user_name: data.user_name,
            user_email: data.user_email,
            message: data.message,
        };

        emailjs
            .send(serviceId, templateId, templateParams, publicKey)
            .then(
                () => {
                    setStatus('success');
                    reset();
                    setTimeout(() => setStatus(''), 5000);
                },
                (error) => {
                    console.error('Email sending failed:', error);
                    setStatus('error');
                    setTimeout(() => setStatus(''), 8000);
                }
            );
    };

    return (
        <section className="py-[20px] pb-[60px] bg-white" id="contact">
            <div className="custom-container">
                <h2 className="section-title">تواصل معنا</h2>

                <div className="max-w-[900px] mr-0">
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-[30px] mt-[20px]">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                            <div>
                                <fieldset className={`border ${errors.user_name ? 'border-[#c62828]' : 'border-[#b5b5b5]'} rounded-[4px] px-[15px] m-0 flex items-center transition-colors duration-300 focus-within:border-primary focus-within:border-[1.5px]`}>
                                    <legend className={`px-[10px] text-[0.95rem] font-bold mr-[15px] ${errors.user_name ? 'text-[#c62828]' : 'text-primary'}`}>الاسم</legend>
                                    <input
                                        type="text"
                                        disabled={isSubmitting || status === 'sending'}
                                        {...register('user_name')}
                                        className="w-full border-none outline-none bg-transparent font-[inherit] text-[1rem] text-darkText h-[45px]"
                                    />
                                </fieldset>
                                {errors.user_name && <span className="text-[#c62828] text-[0.85rem] mt-[5px] block font-semibold">{errors.user_name.message}</span>}
                            </div>

                            <div>
                                <fieldset className={`border ${errors.user_email ? 'border-[#c62828]' : 'border-[#b5b5b5]'} rounded-[4px] px-[15px] m-0 flex items-center transition-colors duration-300 focus-within:border-primary focus-within:border-[1.5px]`}>
                                    <legend className={`px-[10px] text-[0.95rem] font-bold mr-[15px] ${errors.user_email ? 'text-[#c62828]' : 'text-primary'}`}>البريد الإلكتروني</legend>
                                    <input
                                        type="email"
                                        disabled={isSubmitting || status === 'sending'}
                                        {...register('user_email')}
                                        className="w-full border-none outline-none bg-transparent font-[inherit] text-[1rem] text-darkText h-[45px]"
                                    />
                                </fieldset>
                                {errors.user_email && <span className="text-[#c62828] text-[0.85rem] mt-[5px] block font-semibold">{errors.user_email.message}</span>}
                            </div>
                        </div>

                        <div>
                            <fieldset className={`border ${errors.message ? 'border-[#c62828]' : 'border-[#b5b5b5]'} rounded-[4px] px-[15px] m-0 flex items-start transition-colors duration-300 focus-within:border-primary focus-within:border-[1.5px]`}>
                                <legend className={`px-[10px] text-[0.95rem] font-bold mr-[15px] ${errors.message ? 'text-[#c62828]' : 'text-primary'}`}>الرسالة</legend>
                                <textarea
                                    rows="6"
                                    disabled={isSubmitting || status === 'sending'}
                                    {...register('message')}
                                    className="w-full border-none outline-none bg-transparent font-[inherit] text-[1rem] text-darkText py-[10px] resize-y"
                                ></textarea>
                            </fieldset>
                            {errors.message && <span className="text-[#c62828] text-[0.85rem] mt-[5px] block font-semibold">{errors.message.message}</span>}
                        </div>

                        <div className="flex justify-center mt-[15px]">
                            <button
                                type="submit"
                                disabled={isSubmitting || status === 'sending'}
                                className="bg-primary text-white border-none py-[10px] px-[60px] text-[1.1rem] font-bold rounded-[4px] cursor-pointer font-[inherit] transition-colors duration-300 hover:bg-[#20625f] disabled:bg-[#8db5b5] disabled:cursor-not-allowed"
                            >
                                {(isSubmitting || status === 'sending') ? 'جاري الإرسال...' : 'إرسال'}
                            </button>
                        </div>

                        {status === 'success' && (
                            <p className="text-[#2e7d32] text-center font-semibold mt-[15px]">تم إرسال رسالتك بنجاح. سنتواصل معك قريباً.</p>
                        )}
                        {status === 'error' && (
                            <div className="text-[#c62828] text-center font-semibold mt-[15px] bg-[#ffebee] p-[15px] rounded-[4px] border border-[#ffcdd2]">
                                <p>عذراً، حدث خطأ أثناء الإرسال. تأكد من إعداد EmailJS.</p>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
