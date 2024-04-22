import Navbar from "../components/Navbar";
import { useState } from "react";
//import { DatePickerDemo } from "../components/DatePicker";
import { getUsername, getFirstName, getLastName, getEmail, getTheme, getHeight, getWeight, getGender, getWeeklyReports, getGoalReminders, getHealthAlerts, } from "../components/Users";
import TextDataEntry from "../components/TextDataEntry";


const UserSettings = () => {
  const [weight, setTempWeight] = useState(getWeight());
  const [firstName, setTempfirstName] = useState(getFirstName());
  const [lastName, setTemplastName] = useState(getLastName());
  const [email, setTempEmail] = useState(getEmail());
  const [username, setTempUsername] = useState(getUsername());
  const [weeklyReports, setTempWeeklyReports] = useState(getWeeklyReports())
  const [goalReminders, setTempGoalReminders] = useState(getGoalReminders())
  const [healthAlerts, setTempHealthAlerts] = useState(getHealthAlerts())
  const [gender, setTempGender] = useState(getGender())
  const [theme, setTempTheme] = useState(getTheme())

  /*function saveChanges() {
    //setHeight();
    setWeight(weight);
    setFirstName(firstName);
    setLastName(lastName);
    setEmail(email);
    setUsername(username);
    setWeeklyReports(weeklyReports);
    setGoalReminders(goalReminders);
    setHealthAlerts(healthAlerts);
    setGender(gender);
    setTheme(theme);
  }
*/


  return (
    <div data-theme={theme}>
      <div className="flex items-start">
        <Navbar />
        <div>
          <h1 className="text-3xl font-extrabold pl-10 pt-10">Settings</h1>
          <div className="static flex w-full">
            <div className="absolute h-screen grid md:grid-cols-2 p-5 gap-5 justify-center items-stretch">
              <div className="flex basis-1/2 h-screen flex-col gap-5 items-center">
                <div className="avatar">
                  <div className="w-64 mask mask-squircle">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <div className="flex flex-col justify-center gap-3">
                  <TextDataEntry label="Height" initialValue={getHeight()}></TextDataEntry>
                  <label className="input input-bordered flex items-center gap-2">
                    Weight
                    <input type="text" className="grow" placeholder="Enter Weight" value={weight} onChange={(e) => setTempWeight(e.target.value)} />
                  </label>
                  <select className="select select-bordered w-full max-w-xs text-base" value={gender} onChange={(e) => setTempGender(e.target.value)}>
                    <option disabled selected>
                      Gender
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Non-Binary">Non-Binary</option>
                    <option value="Other">Other</option>
                  </select>

                </div>
              </div>
              <div className="flex flex-col h-screen gap-5 items-stretch">
                <div className="divider">Account</div>
                <div className="flex gap-3 justify-center">
                  <label className="input input-bordered flex items-center w-1/2 gap-2">
                    First
                    <input type="text" className="grow" placeholder="Enter First Name" value={firstName} onChange={(e) => setTempfirstName(e.target.value)} />
                  </label>
                  <label className="input input-bordered flex items-center w-1/2 gap-2">
                    Last
                    <input type="text" className="grow" placeholder="Enter Last Name" value={lastName} onChange={(e) => setTemplastName(e.target.value)} />
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
                    <input type="text" className="grow" placeholder="Enter Email" value={email} onChange={(e) => setTempEmail(e.target.value)} />
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
                    <input type="text" className="grow" placeholder="Enter Username" value={username} onChange={(e) => setTempUsername(e.target.value)} />
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
                        checked={weeklyReports}
                        onChange={() => setTempWeeklyReports(!weeklyReports)}
                      />
                    </label>
                  </div>
                  <div className="form-control w-full">
                    <label className="cursor-pointer label">
                      <span className="label-text">Goal Reminders</span>
                      <input
                        type="checkbox"
                        className="toggle toggle-primary"
                        checked={goalReminders}
                        onChange={() => setTempGoalReminders(!goalReminders)}
                      />
                    </label>
                  </div>
                  <div className="form-control w-full">
                    <label className="cursor-pointer label">
                      <span className="label-text">Health Monitor Alerts</span>
                      <input
                        type="checkbox"
                        className="toggle toggle-primary"
                        checked={healthAlerts}
                        onChange={() => setTempHealthAlerts(!healthAlerts)}
                      />
                    </label>
                  </div>
                </div>

                <div className="divider">Appearance</div>
                <div className="flex flex-row h-14 justify-between">
                  <span>Change theme</span>
                  <div className="dropdown mb-60">
                    <div tabIndex={0} role="button" className="btn m-1">
                      {theme}
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
                          onChange={(e) => setTempTheme(e.target.value)}
                        />
                      </li>
                      <li>
                        <input
                          type="radio"
                          name="theme-dropdown"
                          className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                          aria-label="Retro"
                          value="retro"
                          onClick={() => setTempTheme("retro")}
                        />
                      </li>
                      <li>
                        <input
                          type="radio"
                          name="theme-dropdown"
                          className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                          aria-label="Cyberpunk"
                          value="cyberpunk"
                          onClick={() => setTempTheme("cyberpunk")}
                        />
                      </li>
                      <li>
                        <input
                          type="radio"
                          name="theme-dropdown"
                          className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                          aria-label="Valentine"
                          value="valentine"
                          onClick={() => setTempTheme("valentine")}
                        />
                      </li>
                      <li>
                        <input
                          type="radio"
                          name="theme-dropdown"
                          className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                          aria-label="Aqua"
                          value="aqua"
                          onClick={() => setTempTheme("aqua")}
                        />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-row gap-5 justify-stretch">
                  <button className="btn w-1/2">Cancel</button>
                  <button className="btn btn-primary w-1/2" >Save</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSettings;
