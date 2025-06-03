import React from 'react'
import { Card, CardHeader, Image } from "@heroui/react"


// Suggested code may be subject to a license. Learn more: ~LicenseLog:2418775954.  
const Cards = ({Title, Description, CoverImage}) => {
    return (
        <Card className="flex flex-1 col-span-12 sm:col-span-4 h-[300px]" radius='sm'>
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                <p className="text-large text-white uppercase font-bold">{Title}</p>
                <h4 className="text-white/60 font-medium text-tiny">{Description}</h4>
            </CardHeader>
            <Image
                removeWrapper
                isZoomed
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src={CoverImage}
                radius='sm'
            />
        </Card>
    )
}

export default Cards