/* eslint-disable react/jsx-no-undef */
import icon from "../Assets/icon1.svg";
const Nevbar = () => {
  return (
    <div className="">
      <nav className="p-3 flex justify-between items-center">
        <a href="#" id="brand" className="flex gap-0 items-center">
          <img
            src={icon}
            alt={"icon"}
            className="object-cover max-w-15 max-h-15"
          />
          <span className="font-bold text-slate-400 hover:text-blue-900	text-lg  ">
            Visor
          </span>
        </a>
      </nav>
    </div>
  );
};

export default Nevbar;
