import React from "react";
import Cards from "./UI/Card";
import webApp from "../../../public/webApp.svg";
import mobileApp from "../../../public/mobileApp.svg";
import customApp from "../../../public/customApp.svg";

const Services = () => {
  return (
    <div className="text-center px-40 max-md:px-4">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <h1 className="text-6xl text-center font-extrabold pb-10 max-md:text-4xl">
            Comprehensive Solutions for Your Digital Needs
          </h1>
          <p className="text-center text-gray-600">
            From concept to deployment, we&apos;re offer a full suite of
            services to bring your vision to life.
          </p>
        </div>
        <div className="flex justify-center items-center gap-4 max-md:flex-col">
          <Cards
            Title={"Web Development"}
            Description={"Building responsive and scalable web applications"}
            CoverImage={webApp}
            LearnURL={"/web"}
          />
          <Cards
            Title={"Mobile Development"}
            Description={
              "Creating native and cross-platform mobile applications"
            }
            CoverImage={mobileApp}
            LearnURL={"/app"}
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
