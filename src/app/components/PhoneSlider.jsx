"use client";
import { useState } from "react";
import Image from "next/image";
import { Button, Link } from "@heroui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import PhoneUI from "../../../public/ApplicationUI/phoneUI.png";

const phoneImages = [PhoneUI, PhoneUI, PhoneUI, PhoneUI, PhoneUI, PhoneUI];

export default function PhoneSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col justify-center items-center overflow-hidden px-40 py-20 max-md:px-4">
      <div className="py-16">
        <h1 className="text-6xl text-center font-extrabold pb-10 max-md:text-4xl">
          Launch Your First Mobile App With Us
        </h1>
        <p className="text-center text-gray-600">
          Got a startup idea? Let’s turn it into a reality. Book your free
          consultation today and take the first step toward building your app
          together.
        </p>
      </div>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        spaceBetween={0}
        className="w-full max-w-6xl cursor-grab"
      >
        {phoneImages.map((src, index) => {
          const relativeIndex =
            (index - activeIndex + phoneImages.length) % phoneImages.length;
          const isCenter = relativeIndex === 0;
          const isNext =
            relativeIndex === 1 ||
            (activeIndex === phoneImages.length - 1 && index === 0);
          const isPrev =
            relativeIndex === phoneImages.length - 1 ||
            (activeIndex === 0 && index === phoneImages.length - 1);

          let scale = 0.85;
          if (isCenter) scale = 1;
          else if (isNext || isPrev) scale = 0.9;

          return (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center"
            >
              <div
                style={{
                  transform: `scale(${scale})`,
                  transition: "transform 0.4s ease",
                }}
              >
                <Image
                  src={src}
                  alt={`Phone ${index}`}
                  width={250}
                  height={250}
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Button
        as={Link}
        href="#contact-us"
        color="primary"
        radius="full"
        className="w-60 h-12 bg-[#4B2B9E] my-12 uppercase"
      >
        Book Free Consultation
      </Button>
    </div>
  );
}
