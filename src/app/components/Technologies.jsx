'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import node from "../../../public/Icons/NodeJS.svg"
import next from "../../../public/Icons/NextJS.svg"
import flutter from "../../../public/Icons/Flutter.svg"
import react from "../../../public/Icons/ReactJS.svg"
import dart from "../../../public/Icons/Dart.svg"


const imageUrls = [
    node, next, flutter, react, dart
]

const Technologies = () => {
    const scrollingImages = [...imageUrls, ...imageUrls]

    return (
        <div className="overflow-hidden py-12 text-center">
            <h2 className="font-bold leading-tight text-[32px] tracking-[-0.015em] py-16">
                Technologies We Use
            </h2>

            <motion.div
                className="flex gap-12"
                animate={{ x: ['0%', '-50%'] }}
                transition={{
                    repeat: Infinity,
                    duration: 20,
                    ease: 'linear',
                }}
            >
                {scrollingImages.map((url, idx) => (
                    <Image
                        key={idx}
                        src={url}
                        alt={`Technology ${idx}`}
                        width={100}
                        height={100}
                        className="object-cover"
                    />
                ))}
            </motion.div>
        </div>
    )
}

export default Technologies
