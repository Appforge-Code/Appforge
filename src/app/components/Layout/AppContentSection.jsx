"use client";
import Image from "next/image";
import { Button } from "@heroui/react";

export default function AppContentSection({
  direction = "right",
  bgColor,
  imageSrc,
  imageAlt,
  heading,
  paragraph,
  buttonText,
}) {
  const isImageLeft = direction === "left";

  return (
    <div className={`flex flex-col md:flex-row items-center bg-[${bgColor}] px-40 py-6 max-md:px-4`}>
      <div className={`w-full md:w-1/2 ${isImageLeft ? "order-1" : "order-2"}`}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={600}
          height={600}
          className="object-cover"
        />
      </div>
      <div
        className={`w-full md:w-1/2 ${
          isImageLeft ? "order-2" : "order-1"
        } text-center md:text-left`}
      >
        <h2 className="text-4xl mb-4">{heading}</h2>
        <p className="text-gray-600 mb-6">{paragraph}</p>
        {buttonText && (
          <Button color="primary" radius="sm" className="bg-[#4B2B9E]">
            {buttonText}
          </Button>
        )}
      </div>
    </div>
  );
}
