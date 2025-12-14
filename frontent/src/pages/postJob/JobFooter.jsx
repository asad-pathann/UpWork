import Button from "@mui/material/Button";
import React from "react";

const JobFooter = ({ width }) => {
  return (
    <>
      <div className="w-full fixed bottom-0  shadow-xl p-3 z-10   justify-between items-center">
        <div className="w-full h-[5px]   mb-5   bg-gray-500">
          <div className={`${width}  h-[6px]   bg-black`}></div>
        </div>

        <div className="flex justify-between items-center  gap-3 ">
          <div className="flex items-center   gap-3 ">
            <Button
              style={{
                color: "oklch(62.7% 0.194 149.214)",
                border: "1px solid lightgray",
              }}
              variant="outline"
            >
              Back
            </Button>
            <Button
              style={{
                background: "oklch(62.7% 0.194 149.214)",
              }}
              variant="contained"
            >
              Job using With UI
            </Button>
          </div>
          <div>
            <Button
              style={{
                color: "",
                background: " oklch(55.1% 0.027 264.364)",
              }}
              variant="contained"
            >
              Neext Skill
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobFooter;
