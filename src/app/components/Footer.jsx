'use client'
import React from 'react'
import { Button, Link } from "@heroui/react";
import Image from 'next/image';
import Xicon from "../../../public/Icons/Xicon.svg"
import LinkedinIcon from "../../../public/Icons/Linkedin.svg"
import WhatsappIcon from "../../../public/Icons/Whatsapp.svg"

const Footer = () => {
  return (
    <footer className="flex justify-center">
      <div className="flex max-w-[960px] flex-1 flex-col">
        <footer className="flex flex-col gap-6 px-5 py-10 text-center @container">

          <div className="flex justify-center mb-4">

            <Button isIconOnly as={Link} href="https://x.com/nullonestudio" target="_blank" className="bg-transparent text-white">
              <Image src={Xicon} alt='X' width={25} height={25} />
            </Button>
            <Button isIconOnly as={Link} href="https://www.linkedin.com/in/appforge-%25E2%2580%258E-057981368" target="_blank" className="bg-transparent text-white">
              <Image src={LinkedinIcon} alt='Linkedin' width={25} height={25} />
            </Button>
            <Button isIconOnly as={Link} href="https://x.com/nullonestudio" target="_blank" className="bg-transparent text-white">
              <Image src={WhatsappIcon} alt='Whatsapp' width={25} height={25} />
            </Button>

          </div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <a className="text-[#456da1] text-base font-normal leading-normal min-w-40" href="#">Privacy Policy</a>
            <a className="text-[#456da1] text-base font-normal leading-normal min-w-40" href="#">Terms of Service</a>
          </div>
          <p className="text-[#456da1] text-base font-normal leading-normal">© 2025 Appforge. All rights reserved.</p>
        </footer>
      </div>
    </footer>
  )
}

export default Footer