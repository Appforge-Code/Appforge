import React from "react";
import AppContentSection from "../components/Layout/AppContentSection";
import mobileUI_1 from "../../../public/groupUI/mobileUI.png";
import mobileUI_2 from "../../../public/groupUI/mobileUI_2.png";
import mobileUI_3 from "../../../public/groupUI/mobileUI_3.png";

const page = () => {
  return (
    <div className="">
      <AppContentSection
        direction="left"
        bgColor={"#deeaeb"}
        imageSrc={mobileUI_1}
        imageAlt="Hero Image"
        heading="Quick Commerce Multi Vendor APP & Website "
        paragraph="Build your own quick commerce app just like Blinkit & Zepto Our app is a powerful tool to build your own quick-commerce platform. "
        buttonText="Request a Quote"
      />
      <AppContentSection
        direction="right"
        // bgColor={"#dfc5ca"}
        imageSrc={mobileUI_2}
        imageAlt="Hero Image"
        heading="Multi Vendor Ecommerce APP & Website "
        paragraph="Build your own Ecommerce app just like Amazon & Flipkart Our app is a powerful tool to build your own Ecommerce platform. "
        buttonText="Request a Quote"
      />
      <AppContentSection
        direction="left"
        bgColor={"#e0d8be"}
        imageSrc={mobileUI_3}
        imageAlt="Hero Image"
        heading="Grocery Multi Vendor Ecommerce APP & Website "
        paragraph="Build your own Grocery app just like Grofers Our app is a powerful tool to build your own Grocery platform. "
        buttonText="Request a Quote"
      />
    </div>
  );
};

export default page;
