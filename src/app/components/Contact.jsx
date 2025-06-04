import React, { useState, useMemo } from "react";
import { Button, Input, addToast } from "@heroui/react";
import Image from "next/image";
import SendMainIcon from "../../../public/Icons/SendMail.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const validateEmail = (value) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);

  const isInvalid = useMemo(() => {
    if (email === "") return false;

    return validateEmail(email) ? false : true;
  }, [email]);

  const handleSendEmail = async () => {
    if (!email)
      return addToast({
        title: "Email Required",
        description: "Please enter your email address.",
        color: "danger",
      });

    setLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        {
          user_email: email,
        },
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      );
      addToast({
        title: "Email Sent",
        description: "Thanks for reaching out! We'll get back to you shortly.",
        color: "success",
      });
      setEmail("");
    } catch (err) {
      console.error("Failed to send email:", err);
      addToast({
        title: "Failed to Send",
        description: "Oops! Something went wrong. Please try again later.",
        color: "danger",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="@container" id="contact-us">
      <div className="flex flex-col justify-end gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20">
        <div className="flex flex-col justify-center items-center gap-2 text-center">
          <h1 className="tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
            Ready to Start Your Project?
          </h1>
          <p className="text-base font-normal leading-normal max-w-[720px">
            Contact us today for a free consultation and let&apos;s discuss how
            we can help you achieve your business goals.
          </p>
        </div>
        <div className="flex flex-1 justify-center">
          <div className="flex w-full max-w-[480px] min-w-40 overflow-hidden rounded-medium border-none">
            <Input
              placeholder="Your Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              radius="none"
              className="flex-1 rounded-l-medium rounded-r-none border-none focus:ring-0"
            />
            <Button
              color="primary"
              errorMessage="Please enter a valid email"
              isInvalid={isInvalid}
              isLoading={loading}
              isDisabled={loading || isInvalid}
              onClick={handleSendEmail}
              radius="none"
              className="rounded-l-none rounded-r-medium max-md:w-2"
            >
              <Image
                src={SendMainIcon}
                alt="Send"
                width={25}
                height={25}
                className="hidden max-md:block text-xs text-white"
              />
              <p className="max-md:hidden">Request a Quote</p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
