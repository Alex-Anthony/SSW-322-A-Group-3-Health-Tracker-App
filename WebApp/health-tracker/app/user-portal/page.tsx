import React from "react";
import Menu from "../components/Menu";
import TextBox from "../components/TextBox";
import headerimg from "@/public/header.jpeg";
import Image from "next/image";

const home = () => {
  return (
    <div className="flex items-start">
      <Menu />
      <div className="flex flex-wrap flex-col gap-10">
        <div className="card w-full h-60 image-full">
          <figure>
            <Image src={headerimg} alt="" />
          </figure>
          <div className="card-body">
            <div className="py-5 px-5 w-1/3">
              <TextBox title="Hello User, Welcome Back">
                <p className="text-neutral">
                  Explore more of your fitness journey
                </p>
              </TextBox>
            </div>
          </div>
        </div>
        <div className="py-5 px-5 grid grid-cols-2 gap-5 justify-evenly">
          <div className="flex flex-col justify-center">
            <TextBox title="Your Goals">
              <table className="table text-xl">
                <tbody>
                  <tr>
                    <td>Steps</td>
                    <td>
                      <progress
                        className="progress progress-accent w-56"
                        value={60}
                        max="100"
                      ></progress>
                    </td>
                  </tr>
                  <tr>
                    <td>Sleep</td>
                    <td>
                      <progress
                        className="progress progress-accent w-56"
                        value={90}
                        max="100"
                      ></progress>
                    </td>
                  </tr>
                  <tr>
                    <td>Workout minutes</td>
                    <td>
                      <progress
                        className="progress progress-accent w-56"
                        value={30}
                        max="100"
                      ></progress>
                    </td>
                  </tr>
                </tbody>
              </table>
            </TextBox>
          </div>
          <div className="flex flex-col justify-center">
            <div className="stats stats-vertical shadow">
              <div className="stat">
                <div className="stat-title">Today's Steps</div>
                <div className="stat-value">31K</div>
                <div className="stat-desc">↗︎ 400 (22%)</div>
              </div>

              <div className="stat">
                <div className="stat-title">Heart Rate</div>
                <div className="stat-value">64</div>
                <div className="stat-desc">↗︎ 400 (22%)</div>
              </div>

              <div className="stat">
                <div className="stat-title">Last Night's Sleep</div>
                <div className="stat-value">7.5</div>
                <div className="stat-desc">↘︎ 9 (14%)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;