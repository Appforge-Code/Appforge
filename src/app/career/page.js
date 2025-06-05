"use client";
import React from "react";
import { Button } from "@heroui/react";
import Image from "next/image";
import careerSearch from "../../../public/careerSearch.svg";

const page = () => {
  return (
    <div className="px-40 flex flex-1 justify-center py-5 max-md:px-0">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <div className="flex min-w-72 flex-col gap-3">
            <p className="text-4xl font-black leading-tight tracking-[-0.033em]">
              Join Our Team
            </p>
            <p className="text-[#67588d] text-base font-normal leading-normal">
              At AppForge, we&apos;re always looking for talented individuals to
              join our team. If you&apos;re passionate about technology and want
              to work on exciting projects, we encourage you to apply.
            </p>
          </div>
        </div>
        <div className="flex flex-col px-4 py-6">
          <div className="flex flex-col items-center gap-6">
            <Image
              src={careerSearch}
              alt="career Image"
              className="bg-center bg-no-repeat aspect-video bg-cover rounded-xl w-full max-w-[360px]"
            />
            <div className="flex max-w-[480px] flex-col items-center gap-2">
              <p className=" text-lg font-bold leading-tight tracking-[-0.015em] max-w-[480px] text-center">
                No Current Openings
              </p>
              <p className=" text-sm font-normal leading-normal max-w-[480px] text-center">
                We currently do not have any open positions. However, we are
                always interested in hearing from talented individuals. Please
                feel free to submit your resume for future opportunities.
              </p>
            </div>
            <Button color="primary" radius="sm" className="bg-[#4B2B9E]">
              Submit Resume (via email)
            </Button>
          </div>
        </div>
        <p className="text-blue-500 text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center underline">
          career@appforge.com
        </p>
      </div>
    </div>
  );
};

export default page;
