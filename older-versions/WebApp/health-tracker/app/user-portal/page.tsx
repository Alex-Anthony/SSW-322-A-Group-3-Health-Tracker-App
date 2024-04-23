'use client'
import React, { useState } from "react";
import Menu from "../components/Menu";
import TextBox from "../components/TextBox";
import headerimg from "@/public/header.jpeg"
import Image from "next/image";
import { getFirstName, getTheme } from "./Users";


const Home = () => {
  return (
    <div className="flex items-start" data-theme={getTheme()}>
      <Menu />
      <div className="flex flex-wrap flex-col gap-10">
        <div className="card w-full max-h-60 image-full">
          <figure>
            <Image src={headerimg} alt="" />
          </figure>
          <div className="card-body">
            <div className="py-5 px-5 min-w-1/3 max-w-md">

              <TextBox title={"Hello " + getFirstName() + ", Welcome Back"}>
                <p className="text-base-content">
                  Explore more of your fitness journey
                </p>
              </TextBox>
            </div>
          </div>
        </div>
        <div className="py-5 px-5 grid grid-cols-2 gap-5 justify-evenly">
          <div className="flex flex-col justify-center place-items-center">
            <div className="max-w-md align-center">
              <TextBox title="Your Goals">
                <div className="grid grid-cols-2 gap-3 gap-y-3 w-full text-lg">
                  <div>Steps</div>
                  <div>
                    <progress
                      className="progress progress-accent max-w-full"
                      value={60}
                      max="100"
                    /></div>

                  <div>Sleep</div>
                  <div>
                    <progress
                      className="progress progress-accent max-w-full"
                      value={90}
                      max="100"
                    ></progress>
                  </div>


                  <div>Workout Minutes</div>
                  <div>
                    <progress
                      className="progress progress-accent max-w-full"
                      value={30}
                      max="100"
                    ></progress>
                  </div>


                </div>
              </TextBox>
            </div>

          </div>
          <div className="flex flex-col justify-center">
            <div className="stats stats-vertical shadow">
              <div className="stat">
                <div className="stat-title">Today&apos;s Steps</div>
                <div className="stat-value">31K</div>
                <div className="stat-desc">↗︎ 400 (22%)</div>
              </div>

              <div className="stat">
                <div className="stat-title">Heart Rate</div>
                <div className="stat-value">64</div>
                <div className="stat-desc">↗︎ 400 (22%)</div>
              </div>

              <div className="stat">
                <div className="stat-title">Last Night&apos;s Sleep</div>
                <div className="stat-value">7.5</div>
                <div className="stat-desc">↘︎ 9 (14%)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Home;
