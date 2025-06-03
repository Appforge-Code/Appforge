'use client'
import React, { useState } from 'react'
import { Input, Button, addToast, Image } from "@heroui/react";
import emailjs from '@emailjs/browser';

const page = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [isLoading, setIsLoading] = useState(false);
    const isFormIncomplete =
        !formData.name.trim() ||
        !formData.email.trim() ||
        !formData.message.trim();


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        emailjs.send(
            'service_srnr7ry',
            'template_afvmpjo',
            formData,
            '2B0fCuFFkxbdJDiup'
        ).then((result) => {
            addToast({
                title: "Message Sent",
                description: "Thanks for reaching out! We'll get back to you shortly.",
                color: "success",
            })
            setFormData({ name: '', email: '', phone: '', message: '' });
            setIsLoading(false);
        }, (error) => {
            addToast({
                title: "Failed to Send",
                description: "Oops! Something went wrong. Please try again later.",
                color: "danger",
            })
            setIsLoading(false);
            console.error(error);
        });
    };

    return (
        <div className="px-40 flex flex-wrap justify-center gap-1 py-5">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                <div className="flex flex-wrap justify-between gap-3 p-4">
                    <div className="flex min-w-72 flex-col gap-3">
                        <p className="tracking-light text-[32px] font-bold leading-tight">Get in Touch</p>
                        <p className="text-[#687482] text-sm font-normal leading-normal">
                            We&apos;re excited to hear from you. Fill out the form below or reach out via the contact details provided.
                        </p>
                    </div>
                </div>
                <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                    <label className="flex flex-col min-w-40 flex-1">
                        <p className="text-base font-medium leading-normal pb-2">Name</p>
                        <Input
                            name="name"
                            placeholder="Enter your name"
                            type="text"
                            radius='sm'
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                    <label className="flex flex-col min-w-40 flex-1">
                        <p className="text-base font-medium leading-normal pb-2">Email</p>
                        <Input
                            name="email"
                            placeholder="Enter your email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                    <label className="flex flex-col min-w-40 flex-1">
                        <p className="text-base font-medium leading-normal pb-2">Phone Number (Optional)</p>
                        <Input
                            name="phone"
                            placeholder="Enter your phone"
                            type="text"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                    <label className="flex flex-col min-w-40 flex-1">
                        <p className="text-base font-medium leading-normal pb-2">Message</p>
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl focus:outline-0 focus:ring-0 border-none bg-[#f1f2f4] focus:border-none min-h-36 placeholder:text-[#687482] p-4 text-base font-normal leading-normal"
                        ></textarea>
                    </label>
                </div>

                <div className="flex px-4 py-3 justify-start">
                    <Button color='primary' isLoading={isLoading} isDisabled={isLoading || isFormIncomplete} radius='sm' onClick={handleSubmit}>Send Message</Button>
                </div>

            </div>
            <div className="flex justify-center items-center flex-1 min-w-[300px]">
                <Image
                    isZoomed
                    alt="Contact Section Image"
                    src="https://heroui.com/images/fruit-1.jpeg"
                    width={450}
                /></div>
        </div>
    )
}

export default page