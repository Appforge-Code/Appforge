"use client";
import React from "react";
import { Button, Link } from "@heroui/react";

const PricingCard = ({ projectType, projectPrice, duration, features }) => {
  return (
    <div className="flex flex-1 flex-col gap-4 rounded-xl border border-solid border-[#dbe0e6] bg-white p-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-base font-bold leading-tight">{projectType}</h1>
        <span className="text-2xl font-black leading-tight tracking-[-0.033em]">
          {projectPrice}
        </span>
      </div>
      <Button
        as={Link}
        href="#contact-us"
        color="primary"
        radius="full"
        className="bg-[#4B2B9E]"
      >
        Get a Quote
      </Button>
      <div className="flex flex-col gap-2">
        <div className="text-[13px] font-normal leading-normal flex gap-3 ">
          <div data-icon="Check" data-size="20px" data-weight="regular">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              fill="currentColor"
              viewBox="0 0 256 256"
              className="text-[#4B2B9E]"
            >
              <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
            </svg>
          </div>
          {features[0]}
        </div>
        <div className="text-[13px] font-normal leading-normal flex gap-3 ">
          <div data-icon="Check" data-size="20px" data-weight="regular">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              fill="currentColor"
              viewBox="0 0 256 256"
              className="text-[#4B2B9E]"
            >
              <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
            </svg>
          </div>
          Estimated duration: {duration}
        </div>
        <div className="text-[13px] font-normal leading-normal flex gap-3 ">
          <div data-icon="Check" data-size="20px" data-weight="regular">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              fill="currentColor"
              viewBox="0 0 256 256"
              className="text-[#4B2B9E]"
            >
              <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
            </svg>
          </div>
          {features[1]}
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
