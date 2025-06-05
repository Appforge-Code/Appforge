"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import AppforgeIcon from "../../../public/Appforge.png";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Button,
} from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navibar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuItems = [
    "Service",
    "About",
    "Contact",
    "Career",
    "Request a Quote",
  ];

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <Navbar
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarBrand className="gap-1">
          <Image
            src={AppforgeIcon}
            alt="Appforge Icon"
            width={40}
            height={40}
          />
          <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] uppercase">
            <Link href={"/"} className="text-sm font-medium leading-normal">
              Appforge
            </Link>
          </h2>
          <NavbarContent className="sm:hidden" justify="end">
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            />
          </NavbarContent>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="end">
          <NavbarItem>
            <Link
              href={"/service"}
              className="text-sm font-medium leading-normal"
            >
              Services
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              href={"/about"}
              className="text-sm font-medium leading-normal"
            >
              About
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              href={"/contact"}
              className="text-sm font-medium leading-normal"
            >
              Contact
            </Link>
          </NavbarItem>
          <NavbarItem>
            <a className="text-sm font-medium leading-normal" href="#">
              Career
            </a>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} href="#contact-us" color="primary" radius="sm">
              Request a Quote
            </Button>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full"
                color={
                  index === 2
                    ? "warning"
                    : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                href={`/${item.toLowerCase()}`}
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </>
  );
};

export default Navibar;
