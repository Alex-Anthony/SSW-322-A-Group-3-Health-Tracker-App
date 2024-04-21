

interface WGProps {
  title: string;
  svgPath?: string;
}

const Widget = ({ title, svgPath }: WGProps) => {
  return (
    <div className="card bg-secondary h-32 w-32">
      <div className="card-body h-full justify-center items-center">
        <div className="mask mask-squircle bg-base-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 p-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={svgPath}
            />
          </svg>
        </div>
        <h1 className="card-title text-center font-bold text-sm text-secondary-content">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default Widget;
