import { ReactNode } from "react";


const TextBox = ({ title, children }) => {
  return (
    <div className="card bg-base-200 ">
      <div className="card-body items-center text-center">
        <h1 className="card-title font-bold text-3xl text-primary">{title}</h1>
        <div className="flex w-full justify-items-stretch">{children}</div>
      </div>
    </div>
  );
};

export default TextBox;
