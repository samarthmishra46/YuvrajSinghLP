import { useNavigate } from "react-router-dom";

const CTA: React.FC = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("https://rzp.io/rzp/M4TBjei"); //  actual route
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
      <button
        onClick={handleButtonClick}
        className="flex items-center gap-2 btn-primary "
      >
        Work With Me
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </button>
    </div>
  );
};

export default CTA;
