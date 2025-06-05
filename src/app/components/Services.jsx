import React from "react";
import Cards from "./UI/Card";
import webApp from "../../../public/webApp.svg";
import mobileApp from "../../../public/mobileApp.svg";
import customApp from "../../../public/customApp.svg";

const Services = () => {
  return (
    <div className="text-center">
      {/* <h2 className=" font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-5">
        Our Services
      </h2> */}
      <div className="flex flex-col gap-10 px-4 py-2">
        <div className="flex flex-col gap-4">
          <h1 className="tracking-light text-[32px] font-bold leading-tight">
            Comprehensive Solutions for Your Digital Needs
          </h1>
          <p className="text-base font-normal leading-normal">
            From concept to deployment, we&apos;re offer a full suite of
            services to bring your vision to life.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4">
          <Cards
            Title={"Web Development"}
            Description={"Building responsive and scalable web applications"}
            CoverImage={webApp}
          />
          <Cards
            Title={"Mobile Development"}
            Description={
              "Creating native and cross-platform mobile applications"
            }
            CoverImage={mobileApp}
          />
          <Cards
            Title={"Custom Solutions"}
            Description={"To achieve your goals, we build custom software."}
            CoverImage={customApp}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
