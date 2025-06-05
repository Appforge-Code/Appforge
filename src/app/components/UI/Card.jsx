import React from "react";
import { Card, CardHeader, Button, Link } from "@heroui/react";
import Image from "next/image";

// Suggested code may be subject to a license. Learn more: ~LicenseLog:2418775954.
const Cards = ({ Title, Description, CoverImage }) => {
  return (
    <Card
      className="flex justify-around items-center p-4 h-[350px] w-[280px]"
      radius="sm"
      shadow="sm"
    >
      <Image src={CoverImage} alt="Image" height={140} width={140}/>
      <CardHeader className="flex flex-col">
        <p className="text-large font-bold text-center">{Title}</p>
        <h4 className=" font-medium text-tiny text-center">{Description}</h4>
      </CardHeader>
      <Button
        as={Link}
        href="#contact-us"
        color="primary"
        radius="sm"
        className="bg-[#4B2B9E]"
      >
        Learn more
      </Button>
    </Card>
  );
};

export default Cards;
