import React from 'react'
import { Button } from '@heroui/react'

const Hero = () => {
    return (
        <div className="@container">
            <div className="@[480px]:p-4">
                <div
                    className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-lg items-start justify-end px-4 pb-10 @[480px]:px-10"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCGTDwjTNWrR7lTjqsuzN6DDoW4Wd2paKsJsqC6VeBat-A5cIJGObz1B2-pVPK_DQ__nKyQQeyBOdr705buTIwrS8jz9OXa7IM9KjNA59sp_KxxShGZONlvc28qbg-4pa-LbOoXPh9AbA59PjSSzLcK8SUZZ2hLlBVOnow1olOTEISjJ-G2vv9A-RJRudHd01V4CtC3NEHz8J7Na4FENrkk66ad7E9uSMGE07KXWH9jG34bOoON1NJL3pVGg4He6mJBkb10riiaCBI")`
                    }}

                >
                    <div className="flex flex-col gap-2 text-left">
                        <h1
                            className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
                        >
                            Crafting Digital Experiences That Drive Success
                        </h1>
                        <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                            We&apos;re a leading web and mobile application agency specializing in ReactJS, NextJS, NodeJS, Flutter, and Dart. Our team of experts delivers innovative
                            solutions tailored to your business needs.
                        </h2>
                    </div>
                    <Button color='primary' radius='sm' >Request a Quote</Button>
                </div>
            </div>
        </div>
    )
}

export default Hero