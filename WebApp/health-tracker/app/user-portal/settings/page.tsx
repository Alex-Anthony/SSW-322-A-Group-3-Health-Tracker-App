import React from "react";
import Navbar from "@/app/components/Navbar";
import { DatePickerDemo } from "@/app/components/DatePicker";

const userSettings = () => {
  return (
    <div className="flex items-start">
      <Navbar />
      <div>
        <h1 className="text-3xl font-extrabold pl-10 pt-10">Settings</h1>
        <div className="static flex w-full">
          <div className="absolute inset-20 h-screen grid grid-cols-2 p-5 gap-5 justify-center items-stretch">
            <div className="flex basis-1/2 h-screen flex-col gap-5 items-center">
              <div className="avatar">
                <div className="w-64 mask mask-squircle">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div className="flex flex-col justify-center gap-3">
                <label className="input input-bordered flex items-center gap-2">
                  Height
                  <input type="text" className="grow" placeholder="5'2" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                  Weight
                  <input type="text" className="grow" placeholder="135" />
                </label>
                <select className="select select-bordered w-full max-w-xs text-base">
                  <option disabled selected>
                    Gender
                  </option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Non-Binary</option>
                  <option>Other</option>
                </select>
                <DatePickerDemo></DatePickerDemo>
              </div>
            </div>
            <div className="flex flex-col h-screen gap-5 items-stretch">
              <div className="divider">Account</div>
              <div className="flex gap-3 justify-center">
                <label className="input input-bordered flex items-center w-1/2 gap-2">
                  First
                  <input type="text" className="grow" placeholder="Daisy" />
                </label>
                <label className="input input-bordered flex items-center w-1/2 gap-2">
                  Last
                  <input type="text" className="grow" placeholder="Smith" />
                </label>
              </div>
              <div className="flex gap-3 justify-center">
                <label className="input input-bordered flex items-center w-1/2 gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                  </svg>
                  <input type="text" className="grow" placeholder="Email" />
                </label>
                <label className="input input-bordered flex items-center w-1/2 gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                  </svg>
                  <input type="text" className="grow" placeholder="Username" />
                </label>
              </div>

              <div className="divider">Notifications</div>
              <div className="flex flex-col">
                <div className="form-control w-full">
                  <label className="cursor-pointer label">
                    <span className="label-text">Weekly Reports</span>
                    <input
                      type="checkbox"
                      className="toggle toggle-primary"
                      checked
                    />
                  </label>
                </div>
                <div className="form-control w-full">
                  <label className="cursor-pointer label">
                    <span className="label-text">Goal Reminders</span>
                    <input
                      type="checkbox"
                      className="toggle toggle-primary"
                      checked
                    />
                  </label>
                </div>
                <div className="form-control w-full">
                  <label className="cursor-pointer label">
                    <span className="label-text">Health Monitor Alerts</span>
                    <input
                      type="checkbox"
                      className="toggle toggle-primary"
                      checked
                    />
                  </label>
                </div>
              </div>

              <div className="divider">Appearance</div>
              <div className="flex flex-row h-14 justify-between">
                <span>Change theme</span>
                <div className="dropdown mb-60">
                  <div tabIndex={0} role="button" className="btn m-1">
                    Theme
                    <svg
                      width="12px"
                      height="12px"
                      className="h-2 w-2 fill-current opacity-60 inline-block"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 2048 2048"
                    >
                      <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                    </svg>
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52"
                  >
                    <li>
                      <input
                        type="radio"
                        name="theme-dropdown"
                        className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                        aria-label="Default"
                        value="default"
                      />
                    </li>
                    <li>
                      <input
                        type="radio"
                        name="theme-dropdown"
                        className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                        aria-label="Retro"
                        value="retro"
                      />
                    </li>
                    <li>
                      <input
                        type="radio"
                        name="theme-dropdown"
                        className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                        aria-label="Cyberpunk"
                        value="cyberpunk"
                      />
                    </li>
                    <li>
                      <input
                        type="radio"
                        name="theme-dropdown"
                        className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                        aria-label="Valentine"
                        value="valentine"
                      />
                    </li>
                    <li>
                      <input
                        type="radio"
                        name="theme-dropdown"
                        className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                        aria-label="Aqua"
                        value="aqua"
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-row gap-5 justify-stretch">
                <button className="btn w-1/2">Cancel</button>
                <button className="btn btn-primary w-1/2">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default userSettings;
