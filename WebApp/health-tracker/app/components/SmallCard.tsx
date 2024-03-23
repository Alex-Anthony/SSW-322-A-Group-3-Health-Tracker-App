import React from "react";
import { ReactNode } from "react";

interface SCProps {
  title: string;
  children?: ReactNode;
}

const SmallCard = ({ title, children }: SCProps) => {
  return (
    <div>
      <div className="card bg-base-200 ">
        <div className="card-body">
          <h1 className="card-title text-left font-bold text-base text-neutral">
            {title}
          </h1>
          <div className="flex justify-center">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
