'use client'
import React from 'react'
import Image from 'next/image'
import AppforgeIcon from "../../../public/Appforge.png"
import { Button } from '@heroui/react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e6ecf4] px-10 py-3">
            <div className="flex items-center gap-1 text-[#1A191E]">
                <div className="size-10">
                    <Image src={AppforgeIcon} alt="Appforge Icon" width={100} height={100} />
                </div>
                <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] uppercase"><Link href={"/"} className="text-sm font-medium leading-normal" >Appforge</Link></h2>
            </div>
            <div className="flex flex-1 justify-end gap-8 max-md:hidden">
                <div className="flex items-center gap-9">
                    <a className="text-sm font-medium leading-normal" href="#">Services</a>
                    <Link href={"/about"} className="text-sm font-medium leading-normal" >About</Link>
                    <Link href={"/contact"} className="text-sm font-medium leading-normal" >Contact</Link>
                    <a className="text-sm font-medium leading-normal" href="#">Career</a>
                </div>

                <Button color='primary' radius='sm' >Request a Quote</Button>

            </div>
        </header>
    )
}

export default Navbar