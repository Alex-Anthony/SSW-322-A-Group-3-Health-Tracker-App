import { ReactNode } from "react";


const SmallCard = ({ title, children }) => {
  return (
    <div>
      <div className="card bg-base-200 w-full">
        <div className="card-body">
          <h1 className="card-title text-left font-bold text-base text-base-content">
            {title}
          </h1>
          <div className="flex justify-center max-w-full">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
