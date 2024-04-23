import { TiThMenu } from "react-icons/ti";
import Nevbar from "./Nevbar";
import { useState } from "react";

import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  // eslint-disable-next-line no-unused-vars
  let [toggle, setToggle] = useState(false);
  return (
    <div className="bg-[#F5EFE6] p-1">
      <div className="max-w-[1240]  mx-auto flex justify-between items-center ">
        <div className="text-2xl font-bold px-5">
          <Nevbar></Nevbar>
        </div>
        {toggle ? (
          <AiOutlineClose
            onClick={() => setToggle(!toggle)}
            className="text-2xl md:hidden block"
          />
        ) : (
          <TiThMenu
            onClick={() => setToggle(!toggle)}
            className="text-2xl  md:hidden block "
          />
        )}

        <ul className=" hidden md:flex gap-10 px-10 font-semibold">
          <li className=" text-slate-500 hover:text-blue-900">Home</li>
          <li className=" text-slate-500 hover:text-blue-900">Services</li>
          <li className=" text-slate-500 hover:text-blue-900">About</li>
          <li className=" text-slate-500 hover:text-blue-900">Contact</li>
        </ul>

        {/* Responsive menu */}
        <ul
          className={` duration-300 md:hidden w-full h-screen fixed bg-black  top-[77px] text-white
        ${toggle ? "left-[0]" : "left-[-100%]"}`}
        >
          <li className="p-3">Home</li>
          <li className="p-3">Services</li>
          <li className="p-3">About</li>
          <li className="p-3">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
