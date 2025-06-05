import React from "react";
import PricingCard from "../components/UI/PricingCard";
import ServiceTable from "../components/UI/ServiceTable";

const page = () => {
  const services = [
    {
      name: "Server Maintenance",
      description:
        "Ensure your application runs smoothly with our server maintenance services. We handle updates, security, and performance monitoring.",
      price: "₹2100/month",
    },
    {
      name: "Logo Design",
      description:
        "Create a unique brand identity with our professional logo design services. We work with you to develop a logo that represents your business.",
      price: "₹800 - ₹1000",
    },
    {
      name: "Database Management",
      description:
        "Optimize your data storage and retrieval with our database management services. We handle backups, scaling, and performance tuning.",
      price: "₹1800/month",
    },
    {
      name: "Technical Support",
      description:
        "Get ongoing support for your application with our technical support services. We provide timely assistance and troubleshooting.",
      price: "₹800/hour",
    },
    {
      name: "API Integration",
      description:
        "Connect your application with third-party services using our API integration expertise. We ensure seamless and secure data exchange.",
      price: "Custom Rate",
    },
  ];

  return (
    <div className="px-40 flex flex-1 justify-center py-5 max-md:px-0">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <div className="flex min-w-72 flex-col gap-3">
            <p className="tracking-light text-[32px] font-bold leading-tight">
              Services and Pricing
            </p>
            <p className="text-sm font-normal leading-normal">
              Explore our flexible pricing options tailored to your
              project&apos;s scope and complexity. We offer transparent and
              competitive rates to ensure you get the best value for your
              investment.
            </p>
          </div>
        </div>
        <h2 className="text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Project-Based Pricing
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(228px,1fr))] gap-2.5 px-4 py-3 @3xl:grid-cols-4">
          <PricingCard
            projectType={"Small Projects"}
            projectPrice={"₹6,000 - ₹12,000"}
            duration={"5-7 days"}
            features={[
              "Ideal for simple applications, landing pages, or small feature additions",
              "Up to 5 core features",
            ]}
          />
          <PricingCard
            projectType={"Medium Projects"}
            projectPrice={"₹15,000 - ₹30,000"}
            duration={"2-4 weeks"}
            features={[
              "Suitable for moderately complex applications, e-commerce sites, or custom software",
              "Up to 15 core features",
            ]}
          />
          <PricingCard
            projectType={"Large Projects"}
            projectPrice={"₹30,000+"}
            duration={"6-12 weeks"}
            features={[
              "Best for complex applications, enterprise solutions, or large-scale platforms",
              "More than 15 core features",
            ]}
          />
        </div>
        <div className="flex flex-1 justify-center py-5 ">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className=" tracking-light text-[32px] font-bold leading-tight">
                  Extra Services
                </p>
                <p className="text-[#6a7481] text-sm font-normal leading-normal">
                  Enhance your project with our additional services. We offer a
                  range of options to support your software development needs,
                  from server maintenance to logo design.
                </p>
              </div>
            </div>
            <ServiceTable services={services} />
          </div>
        </div>
        <h2 className="text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Commission-Based Services
        </h2>
        <p className="text-base font-normal leading-normal pb-3 pt-1 px-4">
          For projects where ongoing revenue generation is expected, we offer
          commission-based partnerships. This model aligns our success with
          yours—ensuring mutual investment in the long-term growth of your
          application.
        </p>
        <div className="flex items-center gap-4  px-4 min-h-[72px] py-2">
          <div className="flex flex-col justify-center">
            <p className="text-base font-medium leading-normal line-clamp-1">
              Commission Structure
            </p>
            <p className=" text-sm font-normal leading-normal line-clamp-2">
              We offer a <span className="font-bold text-sm">2%</span> to{" "}
              <span className="font-bold text-sm">5%</span> commission to
              individuals or affiliates who successfully bring in new clients.
              The exact percentage is based on the project&apos;s scope and
              budget.
            </p>
          </div>
        </div>
        <h2 className="text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Hourly Rates
        </h2>
        <p className="text-base font-normal leading-normal pb-3 pt-1 px-4">
          For projects with evolving requirements or ongoing maintenance, we
          offer flexible hourly engagement. This ensures your project can grow
          and adapt without the constraints of fixed-scope contracts.
        </p>
        <div className="flex items-center gap-4  px-4 min-h-[72px] py-2">
          <div className="flex flex-col justify-center">
            <p className="text-base font-medium leading-normal line-clamp-1">
              Hourly Rate
            </p>
            <p className="text-sm font-normal leading-normal line-clamp-2">
              Our hourly rate is <span className="font-bold text-sm">₹500</span>{" "}
              per hour for development work. This includes coding, testing, and
              project management.
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
