import React from 'react'
import { Button, Input } from '@heroui/react'
import Image from 'next/image'
import SendMainIcon from "../../../public/Icons/SendMail.png"


const Contact = () => {
    return (
        <div className="@container">
            <div className="flex flex-col justify-end gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20">
                <div className="flex flex-col justify-center items-center gap-2 text-center">
                    <h1
                        className="tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]"
                    >
                        Ready to Start Your Project?
                    </h1>
                    <p className="text-base font-normal leading-normal max-w-[720px">
                        Contact us today for a free consultation and let's discuss how we can help you achieve your business goals.
                    </p>
                </div>
                <div className="flex flex-1 justify-center">
                    <div className="flex w-full max-w-[480px] min-w-40 overflow-hidden rounded-medium border border-default-200">
                        <Input
                            placeholder="Your Email"
                            type="text"
                            radius="none"
                            className="flex-1 rounded-l-medium rounded-r-none border-none focus:ring-0"
                        />
                        <Button
                            color="primary"
                            radius="none"
                            className="rounded-l-none rounded-r-medium max-md:w-2"
                        >
                            <Image src={SendMainIcon} alt="Send" width={25} height={25} className="hidden max-md:block text-xs text-white" />
                            <p className="max-md:hidden">Request a Quote</p>
                        </Button>


                    </div>
                </div>



            </div>
        </div>
    )
}

export default Contact