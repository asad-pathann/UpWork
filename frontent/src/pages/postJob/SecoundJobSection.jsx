import React, { useState } from "react";
import MainNav from "../../Components/mainNav";
import JobFooter from "./JobFooter";
import TextField from "@mui/material/TextField";

const SecoundJobSection = () => {
  const [Controll, setControll] = useState("");
  return (
    <>
      <MainNav />

      <div className="grid grid-cols-12 py-3 mx-auto  w-[90%] xl:w-[70%] lg:w-[80%]">
        <div className="lg:col-span-6 col-span-12 flex flex-col  gap-3   lg:gap-2 ">
          <p className="flex  items-center gap-3 ">
            1/5 <span className="font-semibold">Job Post</span>
          </p>
          <h2 className="text-3xl   font-semibold">
            Lets start with stronge title
          </h2>

          <p className="text-gray-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis voluptates
          </p>
        </div>
        <div className="lg:col-span-6 col-span-12 flex  flex-col  gap-5  ">
          <div className="flex flex-col gap-2 ">
            write a title for your job post
            <TextField
              value={Controll}
              onChange={(e) => setControll(e.target.value)}
              label="e.g.."
              placeholder="e.g .."
            ></TextField>
          </div>

          {/* list   */}

          <ul className="list-disc flex  flex-col gap-2  text-gray-900">
            <p className="text-lg font-semibold">Example title</p>
            <li className="ms-10">
              builed resposive wordPrse site to with booking payment funtionalty
            </li>
            <li className="ms-10">
              grapic desienr needed to design ad craettive for multifull
              compaigns
            </li>
            <li className="ms-10">
              facebookk ads specialist needed for product lunch{" "}
            </li>
          </ul>
        </div>
      </div>

      <JobFooter width={"w-1/5"} />
    </>
  );
};

export default SecoundJobSection;
