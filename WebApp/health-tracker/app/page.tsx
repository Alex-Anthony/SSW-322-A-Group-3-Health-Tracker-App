import Image from "next/image";
import LoginBox from "./components/LoginBox";
import workout from "@/public/workout.svg";
import FitbitDataComponent from "@/src/FitbitDataComponent"

export default function Login() {
  return (
    <main>
      <div className="justify-between">
        <div className="absolute inset-y-0 left-0 right-1/2">
          <Image
            src={workout}
            fill={true}
            alt="start your fitness journey"
          ></Image>
        </div>
        <div className="absolute inset-y-0 right-0 left-1/2 bg-primary">
          <div className="flex justify-center">
            <div className="px-5">
              <LoginBox />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
