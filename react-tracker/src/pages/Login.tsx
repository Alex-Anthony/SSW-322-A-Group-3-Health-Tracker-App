import LoginBox from "../components/LoginBox";
import workout from "../../public/workout.svg";

export default function Login() {
  return (
    <main>
      <div className="justify-between">
        <div className="absolute inset-y-0 left-0 right-1/2">
          <img
            src={workout}
            alt="start your fitness journey"
          ></img>
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
