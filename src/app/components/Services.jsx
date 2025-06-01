import React from 'react'

const Services = () => {
    return (
        <div>
            <h2 className="text-[#004AAD] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-5">Our Services</h2>
            <div className="flex flex-col gap-10 px-4 py-2 @container">
                <div className="flex flex-col gap-4">
                    <h1
                        className="text-[#004AAD] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]"
                    >
                        Comprehensive Solutions for Your Digital Needs
                    </h1>
                    <p className="text-[#0c131d] text-base font-normal leading-normal max-w-[720px]">
                        From concept to deployment, we offer a full suite of services to bring your vision to life.
                    </p>
                </div>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-0">
                    <div className="flex flex-1 gap-3 rounded-lg border border-[#cdd9ea] bg-slate-50 p-4 flex-col">
                        <div className="text-[#0c131d]" data-icon="GlobeHemisphereWest" data-size="24px" data-weight="regular">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                                <path
                                    d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm88,104a87.62,87.62,0,0,1-6.4,32.94l-44.7-27.49a15.92,15.92,0,0,0-6.24-2.23l-22.82-3.08a16.11,16.11,0,0,0-16,7.86h-8.72l-3.8-7.86a15.91,15.91,0,0,0-11-8.67l-8-1.73L96.14,104h16.71a16.06,16.06,0,0,0,7.73-2l12.25-6.76a16.62,16.62,0,0,0,3-2.14l26.91-24.34A15.93,15.93,0,0,0,166,49.1l-.36-.65A88.11,88.11,0,0,1,216,128ZM143.31,41.34,152,56.9,125.09,81.24,112.85,88H96.14a16,16,0,0,0-13.88,8l-8.73,15.23L63.38,84.19,74.32,58.32a87.87,87.87,0,0,1,69-17ZM40,128a87.53,87.53,0,0,1,8.54-37.8l11.34,30.27a16,16,0,0,0,11.62,10l21.43,4.61L96.74,143a16.09,16.09,0,0,0,14.4,9h1.48l-7.23,16.23a16,16,0,0,0,2.86,17.37l.14.14L128,205.94l-1.94,10A88.11,88.11,0,0,1,40,128Zm102.58,86.78,1.13-5.81a16.09,16.09,0,0,0-4-13.9,1.85,1.85,0,0,1-.14-.14L120,174.74,133.7,144l22.82,3.08,45.72,28.12A88.18,88.18,0,0,1,142.58,214.78Z"
                                ></path>
                            </svg>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h2 className="text-[#0c131d] text-base font-bold leading-tight">Web Development</h2>
                            <p className="text-[#456da1] text-sm font-normal leading-normal">
                                Building responsive and scalable web applications using cutting-edge technologies like ReactJS, NextJS, and NodeJS.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-1 gap-3 rounded-lg border border-[#cdd9ea] bg-slate-50 p-4 flex-col">
                        <div className="text-[#0c131d]" data-icon="DeviceMobile" data-size="24px" data-weight="regular">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                                <path
                                    d="M176,16H80A24,24,0,0,0,56,40V216a24,24,0,0,0,24,24h96a24,24,0,0,0,24-24V40A24,24,0,0,0,176,16ZM72,64H184V192H72Zm8-32h96a8,8,0,0,1,8,8v8H72V40A8,8,0,0,1,80,32Zm96,192H80a8,8,0,0,1-8-8v-8H184v8A8,8,0,0,1,176,224Z"
                                ></path>
                            </svg>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h2 className="text-[#0c131d] text-base font-bold leading-tight">Mobile Development</h2>
                            <p className="text-[#456da1] text-sm font-normal leading-normal">
                                Creating native and cross-platform mobile applications with Flutter and Dart for iOS and Android.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-1 gap-3 rounded-lg border border-[#cdd9ea] bg-slate-50 p-4 flex-col">
                        <div className="text-[#0c131d]" data-icon="Code" data-size="24px" data-weight="regular">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                                <path
                                    d="M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z"
                                ></path>
                            </svg>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h2 className="text-[#0c131d] text-base font-bold leading-tight">Custom Solutions</h2>
                            <p className="text-[#456da1] text-sm font-normal leading-normal">
                                Developing bespoke software solutions tailored to your unique business requirements and workflows.
                            </p>
                        </div>
                    </div>
                </div>
            </div></div>
    )
}

export default Services