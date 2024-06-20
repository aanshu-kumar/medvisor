import { TiThMenu } from "react-icons/ti";
import Nevbar from "./Nevbar";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  // eslint-disable-next-line no-unused-vars
  const [toggle, setToggle] = useState(false);
  const authToken = localStorage.getItem("auth-token");

  function handleLogout() {
    localStorage.removeItem("auth-token");
    window.location.reload();
  }

  return (
    <div className="bg-[#F5EFE6] fixed top-0 right-0 left-0 z-50 block">
      <div className="max-w-[1240]  mx-auto flex justify-between items-center ">
        <div className="text-2xl font-bold px-5">
          <Nevbar></Nevbar>
        </div>
        {toggle ? (
          <AiOutlineClose //hamburger menu
            onClick={() => setToggle(!toggle)}
            className="text-2xl md:hidden block"
          />
        ) : (
          <TiThMenu //cross icon
            onClick={() => setToggle(!toggle)}
            className="text-2xl  md:hidden block "
          />
        )}

        <ul className=" hidden md:flex gap-10 px-10 font-semibold">
          <Link to="/">
            {" "}
            <li className=" text-slate-500 hover:text-blue-900">Home</li>
          </Link>
          <Link to="/chatbot">
            {" "}
            <li className=" text-slate-500 hover:text-blue-900">Services</li>
          </Link>
          <Link to="/about">
            {" "}
            <li className=" text-slate-500 hover:text-blue-900">About</li>
          </Link>
          <Link to="/ContactUs">
            {" "}
            <li className=" text-slate-500 hover:text-blue-900">Contact</li>
          </Link>
          {authToken ? (
            <button
              type="submit"
              onClick={handleLogout}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline"
            >
              Logout
            </button>
          ) : (
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline"
            >
              <Link to="/Login">Login</Link>
            </button>
          )}
        </ul>

        {/* Responsive menu */}
        <ul
          className={` duration-300 md:hidden w-full h-screen fixed bg-black  top-[77px] text-white
        ${toggle ? "left-[0]" : "left-[-100%]"}`}
        >
          <Link to="/">
            {" "}
            <li className="p-3">Home</li>{" "}
          </Link>
          <Link to="">
            <li className="p-3">Services</li>
          </Link>
          <Link to="about">
            <li className="p-3">About</li>
          </Link>
          <Link to="/ContactUs">
            <li className="p-3">Contact</li>
          </Link>
          {authToken ? (
            <button
              type="submit"
              onClick={handleLogout}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline"
            >
              Logout
            </button>
          ) : (
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline"
            >
              <Link to="/Login">Login</Link>
            </button>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
