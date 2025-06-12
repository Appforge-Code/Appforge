import React from "react";
import WebSlider from "../components/WebSlider";
import AppContentSection from "../components/Layout/AppContentSection";
import webUI_1 from "../../../public/ApplicationUI/webUI.png";
import webUI_2 from "../../../public/ApplicationUI/webUI_2.png";
import webUI_3 from "../../../public/ApplicationUI/webUI_3.png";

const page = () => {
  return (
    <div>
      <WebSlider />
      <AppContentSection
        direction="left"
        imageSrc={webUI_1}
        imageAlt="Hero Image"
        heading="Quick Commerce Multi Vendor APP & Website "
        paragraph="Build your own quick commerce app just like Blinkit & Zepto Our app is a powerful tool to build your own quick-commerce platform. "
        buttonText="Request a Quote"
      />
      <AppContentSection
        direction="right"
        imageSrc={webUI_2}
        imageAlt="Hero Image"
        heading="Quick Commerce Multi Vendor APP & Website "
        paragraph="Build your own quick commerce app just like Blinkit & Zepto Our app is a powerful tool to build your own quick-commerce platform. "
        buttonText="Request a Quote"
      />
      <AppContentSection
        direction="left"
        imageSrc={webUI_3}
        imageAlt="Hero Image"
        heading="Quick Commerce Multi Vendor APP & Website "
        paragraph="Build your own quick commerce app just like Blinkit & Zepto Our app is a powerful tool to build your own quick-commerce platform. "
        buttonText="Request a Quote"
      />
    </div>
  );
};

export default page;
