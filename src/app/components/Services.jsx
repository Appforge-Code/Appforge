import React from 'react'
import { Card, CardHeader, Image } from "@heroui/react"

const Services = () => {
    return (
        <div>''
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
                <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-0">
                    <Card className="flex flex-1 col-span-12 sm:col-span-4 h-[300px]">
                        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                            <p className="text-large text-white uppercase font-bold">Web Development</p>
                            <h4 className="text-white/60 font-medium text-tiny"> Building responsive and scalable web applications</h4>
                        </CardHeader>
                        <Image
                            removeWrapper
                            isZoomed
                            alt="Card background"
                            className="z-0 w-full h-full object-cover"
                            src="https://cdn.prod.website-files.com/6256688a7a5e476c6dbfec98/667bcecccd3c0c8e049661bc_uiux-design.webp"
                        />
                    </Card>
                    <Card className="col-span-12 sm:col-span-4 h-[300px]">
                        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                            <p className="text-large text-white uppercase font-bold">Mobile Development</p>
                            <h4 className="text-white/60 font-medium text-tiny">Creating native and cross-platform mobile applications </h4>
                        </CardHeader>
                        <Image
                            removeWrapper
                            isZoomed
                            alt="Card background"
                            className="z-0 w-full h-full object-cover"
                            src="https://amazing7.com/images/dark-mode-mean.jpg"
                        />
                    </Card>
                    <Card className="col-span-12 sm:col-span-4 h-[300px]">
                        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                            <p className="text-large text-white uppercase font-bold">Custom Solutions</p>
                            <h4 className="text-white/60 font-medium text-tiny">Developing bespoke software solutions tailored to your unique business requirements and workflows.</h4>
                        </CardHeader>
                        <Image
                            removeWrapper
                            isZoomed
                            alt="Card background"
                            className="z-0 w-full h-full object-cover"
                            src="https://miro.medium.com/v2/resize:fit:1000/1*djOWBfUNhFUPeDHchV9cEQ.jpeg"
                        />
                    </Card>
                </div>
            </div></div>
    )
}

export default Services