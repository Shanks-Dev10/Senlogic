import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import error from "@/assets/404.webp";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted ">
      <div className="text-center flex flex-col gap-5 justify-center items-center">
        <div className="w-full md:w-[700px] ">
          <img src={error} alt="404img" className="w-full h-full" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold">
          You took a wrong turn 🚧
        </h1>
        <p className="text-gray-500 mt-2">
           Don’t worry, we’ll help you get back on track.
        </p>
        <Link
          to={"/"}
          className="bg-[#d2151e] py-[12px] px-[30px] text-[13px] font-semibold rounded-sm text-white"
        >
          Return To Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
