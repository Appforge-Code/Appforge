"use client";
import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import WebUI from "../../../public/ApplicationUI/webUI.png";
import WebUI_2 from "../../../public/ApplicationUI/webUI_2.png";
import WebUI_3 from "../../../public/ApplicationUI/webUI_3.png";
import WebUI_4 from "../../../public/ApplicationUI/webUI_4.png";

const webImages = [WebUI, WebUI_2, WebUI_3, WebUI_4];

export default function WebSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col justify-center items-center overflow-hidden px-60 max-md:px-4">
      <div className="my-10 px-20 max-md:px-0">
        <h1 className="text-6xl text-center font-extrabold pb-10 max-md:text-4xl">
          Launch Your First Web App With Us
        </h1>
        <p className="text-center text-gray-600">
          Have a brilliant idea for the next big web platform? Let’s bring it to
          life. Book your free consultation today and take the first step toward
          building your web app with us.
        </p>
      </div>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        spaceBetween={0}
        className="w-full"
      >
        {webImages.map((src, index) => {
          const relativeIndex =
            (index - activeIndex + webImages.length) % webImages.length;
          const isCenter = relativeIndex === 0;
          const isNext =
            relativeIndex === 1 ||
            (activeIndex === webImages.length - 1 && index === 0);
          const isPrev =
            relativeIndex === webImages.length - 1 ||
            (activeIndex === 0 && index === webImages.length - 1);

          let scale = 0.85;
          if (isCenter) scale = 1;
          else if (isNext || isPrev) scale = 0.9;

          return (
            <SwiperSlide key={index}>
              <div
                style={{
                  transform: `scale(${scale})`,
                  transition: "transform 0.4s ease",
                }}
                className="flex justify-center items-center"
              >
                <Image
                  src={src}
                  alt={`Phone ${index}`}
                  width={800}
                  height={800}
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
