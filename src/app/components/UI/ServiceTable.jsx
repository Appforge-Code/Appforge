"use client";
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@heroui/react";

const ServiceTable = ({ services }) => {
  return (
    <div className="px-0 py-3">
      <div className="rounded-xl border border-[#dde0e3] overflow-hidden">
        <Table className="text-sm text-left">
          <TableHeader>
            <TableColumn>Service</TableColumn>
            <TableColumn>Description</TableColumn>
            <TableColumn>Price/Rate</TableColumn>
          </TableHeader>
          <TableBody>
            {services.map((service, index) => (
              <TableRow key={index} className="border-t border-[#dde0e3]">
                <TableCell className="px-4 py-4 font-normal">{service.name}</TableCell>
                <TableCell className="px-4 py-4 text-[#6a7481] font-normal">
                  {service.description}
                </TableCell>
                <TableCell className="px-4 py-4 font-semibold">{service.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ServiceTable;
