import React from "react";
import Navbar from "@/app/components/Navbar";
import { getTheme } from "../Users";

const doctorPortal = () => {
  return (
    <div className="flex items-start" data-theme={getTheme()}>
      <Navbar />
      <h1 className="text-3xl font-extrabold pl-10 pt-10">Doctor&apos;s Portal</h1>
    </div>
  );
};

export default doctorPortal;
