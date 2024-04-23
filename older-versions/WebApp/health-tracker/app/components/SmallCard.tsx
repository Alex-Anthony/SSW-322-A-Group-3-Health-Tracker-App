import React from "react";
import { ReactNode } from "react";

interface SCProps {
  title: string;
  children?: ReactNode;
}

const SmallCard = ({ title, children }: SCProps) => {
  return (
    <div>
      <div className="card bg-base-200 w-full">
        <div className="card-body">
          <h1 className="card-title text-left font-bold text-base text-neutral-content">
            {title}
          </h1>
          <div className="flex justify-center max-w-full">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
