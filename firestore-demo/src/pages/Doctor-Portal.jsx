import FitbitDataComponent from "../components/FitbitDataComponent";
import Navbar from "../components/Navbar";
import { getTheme } from "../components/Users";
//nimport BackendDemo from "./BackendDemo";

const DoctorPortal = () => {
  return (
    <div className="flex items-start" data-theme={getTheme()}>
      <Navbar />
      <h1 className="text-3xl font-extrabold pl-10 pt-10">Doctor&apos;s Portal</h1>
      <FitbitDataComponent></FitbitDataComponent>
    </div>
  );
};

export default DoctorPortal;
