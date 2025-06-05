import React from "react";
import { Button } from "@heroui/react";
import Link from "next/link";
import Image from "next/image";
import heroGirl from "../../../public/heroGirl.png";

const Hero = () => {
  return (
    <div className="@container pb-32 max-md:pb-4">
      <div className="flex flex-col gap-6 px-4  @[480px]:gap-8 @[864px]:flex-row">
        <div className="flex flex-col gap-6 @[480px]:min-w-[400px] @[480px]:gap-8 @[864px]:justify-center">
          <div className="flex flex-col gap-2 text-left">
            <h1 className="text-5xl font-extrabold leading-tight tracking-[-0.033em] max-md:text-4xl">
              Crafting Digital Experiences That Drive Success
            </h1>
            <h2 className="text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
              We&apos;re a leading web and mobile application agency
              specializing in ReactJS, NextJS, NodeJS, Flutter, and Dart. Our
              team of experts delivers innovative solutions tailored to your
              business needs.
            </h2>
          </div>
          <div className="flex-wrap gap-3 flex">
            <Button
              as={Link}
              href="#contact-us"
              color="primary"
              radius="sm"
              className="bg-[#4B2B9E]"
            >
              Request a Quote
            </Button>
          </div>
        </div>
        <Image src={heroGirl} alt="gg" />
      </div>
    </div>
  );
};

export default Hero;
