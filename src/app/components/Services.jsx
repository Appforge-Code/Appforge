import React from 'react'
import { Card, CardHeader, Image } from "@heroui/react"
import Cards from './UI/Card'

const Services = () => {
    return (
        <div>
            <h2 className="text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-5">Our Services</h2>
            <div className="flex flex-col gap-10 px-4 py-2 @container">
                <div className="flex flex-col gap-4">
                    <h1
                        className="tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]"
                    >
                        Comprehensive Solutions for Your Digital Needs
                    </h1>
                    <p className="text-[#0c131d] text-base font-normal leading-normal max-w-[720px]">
                        From concept to deployment, we&apos;re offer a full suite of services to bring your vision to life.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <Cards Title={"Web Development"} Description={"Building responsive and scalable web applications"} CoverImage={"https://cdn.prod.website-files.com/6256688a7a5e476c6dbfec98/667bcecccd3c0c8e049661bc_uiux-design.webp"} />
                    <Cards Title={"Mobile Development"} Description={"Creating native and cross-platform mobile applications"} CoverImage={"https://amazing7.com/images/dark-mode-mean.jpg"} />
                    <Cards Title={"Custom Solutions"} Description={"Developing bespoke software solutions tailored to your unique business requirements and workflows"} CoverImage={"https://miro.medium.com/v2/resize:fit:1000/1*djOWBfUNhFUPeDHchV9cEQ.jpeg"} />
                </div>
            </div></div>
    )
}

export default Services