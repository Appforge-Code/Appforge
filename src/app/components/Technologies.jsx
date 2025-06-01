'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import node from "../../../public/Icons/Node.png"
import next from "../../../public/Icons/Next.png"
import flutter from "../../../public/Icons/Flutter.png"
import react from "../../../public/Icons/React.png"
import dart from "../../../public/Icons/Dart.png"


const imageUrls = [
    node, next, flutter, react, dart
]

const Technologies = () => {
    const scrollingImages = [...imageUrls, ...imageUrls]

    return (
        <div className="overflow-hidden py-8">
            <h2 className="text-[#0c131d] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-5">
                Technologies We Use
            </h2>

            <motion.div
                className="flex gap-16"
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
