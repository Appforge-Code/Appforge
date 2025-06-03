'use client'
import React from 'react'
import { Input,Button } from "@heroui/react";

const page = () => {
    return (
        <div className="px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                <div className="flex flex-wrap justify-between gap-3 p-4">
                    <div className="flex min-w-72 flex-col gap-3">
                        <p className="text-[#121417] tracking-light text-[32px] font-bold leading-tight">Get in Touch</p>
                        <p className="text-[#687482] text-sm font-normal leading-normal">
                            We're excited to hear from you. Fill out the form below or reach out via the contact details provided.
                        </p>
                    </div>
                </div>
                <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                    <label className="flex flex-col min-w-40 flex-1">
                        <p className="text-base font-medium leading-normal pb-2">Name</p>
                        <Input placeholder="Enter your name" type="text" radius='sm' />
                    </label>
                </div>
                <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                    <label className="flex flex-col min-w-40 flex-1">
                        <p className="text-base font-medium leading-normal pb-2">Email</p>
                        <Input placeholder="Enter your email" type="email" />
                    </label>
                </div>
                <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                    <label className="flex flex-col min-w-40 flex-1">
                        <p className="text-base font-medium leading-normal pb-2">Phone Number (Optional)</p>
                        <Input placeholder="Enter your phone" type="text" />
                    </label>
                </div>
                <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                    <label className="flex flex-col min-w-40 flex-1">
                        <p className="text-[#121417] text-base font-medium leading-normal pb-2">Message</p>
                        <textarea
                            placeholder="Your Message"
                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#121417] focus:outline-0 focus:ring-0 border-none bg-[#f1f2f4] focus:border-none min-h-36 placeholder:text-[#687482] p-4 text-base font-normal leading-normal"
                        ></textarea>
                    </label>
                </div>
                <div className="flex px-4 py-3 justify-start">
                    <Button color='primary' radius='sm' >Send Message</Button>
                </div>

            </div>
        </div>
    )
}

export default page