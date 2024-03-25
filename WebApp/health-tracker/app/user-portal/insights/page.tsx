import React from "react";
import Navbar from "@/app/components/Navbar";
import SmallCard from "@/app/components/SmallCard";
import Widget from "@/app/components/Widget";
import SmallBarChart from "@/app/components/SmallBarChart";

const insights = () => {
  return (
    <div className="flex items-start">
      <Navbar />
      <div>
        <h1 className="text-3xl font-extrabold pl-10 pt-10">Insights</h1>
        <div className="static basis-full">
          <div className="absolute inset-20 grid grid-flow-row lg:grid-cols-3 lg:grid-rows-4 p-5 gap-5 content-stretch">
            <SmallCard title="Total Steps"></SmallCard>
            <SmallCard title="Sleep Hours"></SmallCard>
            <div className="row-span-2">
              <SmallCard title="Total Active Hours">
                <div className="flex p-2">
                  <SmallBarChart></SmallBarChart>
                </div>
              </SmallCard>
            </div>
            <div className="col-span-2 row-span-2">
              <SmallCard title="Workout Progress"></SmallCard>
            </div>
            <div className="row-span-2">
              <SmallCard title="Workout Callories Burned"></SmallCard>
            </div>
            <div className="col-span-2">
              <SmallCard title="Health Alerts">
                <div className="flex flex-row gap-3 justify-stretch">
                  <Widget
                    title="Cardio"
                    svgPath="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  ></Widget>
                  <Widget
                    title="Heart Health"
                    svgPath="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  ></Widget>
                  <Widget
                    title="Flexibility"
                    svgPath="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  ></Widget>
                  <Widget
                    title="Diet"
                    svgPath="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  ></Widget>
                </div>
              </SmallCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default insights;
