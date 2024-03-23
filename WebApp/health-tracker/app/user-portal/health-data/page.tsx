import Navbar from "@/app/components/Navbar";
import SmallBarChart from "@/app/components/SmallBarChart";
import SmallCard from "@/app/components/SmallCard";
import Widget from "@/app/components/Widget";
import React from "react";

const healthData = () => {
  return (
    <div className="flex items-start">
      <Navbar />
      <div>
        <h1 className="text-3xl font-extrabold pl-10 pt-10">Health Data</h1>
        <div className="static flex basis-full justify-center">
          <div className="absolute inset-20 grid grid-cols-2 p-5 gap-5 content-stretch">
            <div className="flex basis-1/2 flex-col gap-5">
              <SmallCard title="Quick Look">
                <div className="flex flex-row gap-3">
                  <Widget
                    title="9 hours avg."
                    svgPath="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  ></Widget>
                  <Widget
                    title="65 bpm avg."
                    svgPath="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  ></Widget>
                  <Widget
                    title="5 workouts avg."
                    svgPath="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  ></Widget>
                </div>
              </SmallCard>
              <SmallCard title="Step Tracker">
                <SmallBarChart></SmallBarChart>
              </SmallCard>
            </div>
            <div className="flex flex-col gap-5">
              <SmallCard title="Running"></SmallCard>
              <SmallCard title="swimming"></SmallCard>
              <SmallCard title="Cycling"></SmallCard>
              <SmallCard title="Weight Training"></SmallCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default healthData;