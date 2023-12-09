'use client'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactMe = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(process.env.NEXT_PUBLIC_EMAIL_SERVICE, process.env.NEXT_PUBLIC_EMAIL_TEMPLATE, form.current, process.env.NEXT_PUBLIC_EMAIL_API)
            .then((result) => {
                alert('Message sent successfully!');
                console.log(result.text);
            }, (error) => {
                alert('Failed to send the message, please try again.');
                console.log(error.text);
            });
    };

    return (
        <div className="w-[50%] max-sm:w-[100%]">

            <form ref={form} onSubmit={sendEmail} className="w-full">
                <div className="form-group">
                    <label htmlFor="from_name" className="text-sm font-medium">Name</label>
                    <input type="text" name="from_name" required className="w-full p-2 border rounded" />
                </div>
                <div className="form-group">
                    <label htmlFor="from_email" className="text-sm font-medium">Email</label>
                    <input type="email" name="from_email" required className="w-full p-2 border rounded" />
                </div>
                <div className="form-group">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <textarea name="message" required className="w-full p-2 border rounded"></textarea>
                </div>
                <div className="form-group">
                    <input type="submit" value="Send Message" className="w-full bg-blue-500 text-white p-2 rounded cursor-pointer hover:bg-blue-600" />
                </div>
            </form>
        </div>
    );
};
