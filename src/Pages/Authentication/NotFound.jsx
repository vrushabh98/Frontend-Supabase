import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="bg-white w-screen h-screen flex justify-center items-center">
      <div className="h-[65%] w-1/2 text-center space-y-4 flex-col items-center relative">
        <div className="py-2">
          <h1 className="text-indigo-500 font-extrabold text-9xl font-inter leading-[25px] tracking-tight">
            Oops!
          </h1>
        </div>
        <div className="py-8">
          <h4 className="text-indigo-500 text-2xl font-semibold py-4">
            404 – Page Not Found
          </h4>
        </div>
        <div className="flex justify-center">
          <div className={"w-3/4"}>
            <p className="text-[#202E56] text-xl font-medium leading-[25px] tracking-tight font-inter">
              The page you are looking for might have been removed or not
              exists.
            </p>
          </div>
        </div>
        <div className="flex justify-center absolute bottom-10 w-full">
          <div
            className="w-1/4 bg-indigo-500 text-white p-2 text-xl font-inter leading-[25px] hover:bg-indigo-700 border rounded-full cursor-pointer"
            onClick={() => navigate(-1)}
          >
            Back
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
