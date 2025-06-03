'use client'
import React from 'react'
import { Button } from "@heroui/react";
import Image from 'next/image';
import Link from 'next/link';
import Xicon from "../../../public/Icons/Xicon.svg"
import LinkedinIcon from "../../../public/Icons/Linkedin.svg"
import WhatsappIcon from "../../../public/Icons/Whatsapp.svg"

const Footer = () => {
  return (
    <footer className="flex justify-center">
      <div className="flex max-w-[960px] flex-1 flex-col">
        <footer className="flex flex-col gap-6 px-5 py-10 text-center @container">

          <div className="flex justify-center mb-4">

            <Button isIconOnly as={Link} href="https://www.linkedin.com/company/107474907/admin/dashboard/" target="_blank" className="bg-transparent text-white">
              <Image src={Xicon} alt='X' width={25} height={25} />
            </Button>
            <Button isIconOnly as={Link} href="https://www.linkedin.com/company/107474907/admin/dashboard/" target="_blank" className="bg-transparent text-white">
              <Image src={LinkedinIcon} alt='Linkedin' width={25} height={25} />
            </Button>
            <Button isIconOnly as={Link} href="https://wa.me/7827917162" target="_blank" className="bg-transparent text-white">
              <Image src={WhatsappIcon} alt='Whatsapp' width={25} height={25} />
            </Button>

          </div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <Link href="/privacy" className="text-base font-normal leading-normal min-w-40">Privacy Policy</Link>
            <Link href="/terms" className="text-base font-normal leading-normal min-w-40">Terms of Service</Link>
          </div>
          <p className="ext-base font-normal leading-normal">© 2025 AppForge. All rights reserved.</p>
        </footer>
      </div>
    </footer>
  )
}

export default Footer