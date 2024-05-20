import LogoAboutUs from "../Assets/Logo aboutUS.png";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="max-w-full h-screen bg-gradient-to-r from-[#4CA1AF]  to-[#C4E0E5] bg-[#003973] flex ">
      <div className="w-[100%] h-screen inline">
        <div className="flex">
          <div className="w-[40%] h-screen bg-gray-100  text-center">
            <img
              src={LogoAboutUs}
              className="w-[40%] ml-[175px] mt-[100px]"
            ></img>
            <h3 className=" text-[35px] font-bold pt-2">Medvisor</h3>
            <p className=" font-thin text-[25px]">Your Fitness Advisor</p>
            <div className="h-10 w-[200px] bg-gray-800 text-white text-center pt-2 mt-[70px] ml-[185px]">
              Got Query?
            </div>
          </div>
          <div className="w-[60%] h-screen bg-white">
            <div className="w-[55%] text-justify mt-[200px] ml-[200px]">
              <h2 className=" text-[40px] font-bold">About Us</h2>
              <p className="text-[17px] font-light">
                Medvisor is a cutting-edge health management platform designed
                to empower users with comprehensive tools for tracking and
                understanding their health. By leveraging advanced AI
                technology, Medvisor offers personalized insights and
                recommendations based on users&apos; health metrics and medical
                reports. Our mission is to help users take control of their
                health, make informed decisions, and lead healthier lives.
              </p>
            </div>
            <div className="h-10 w-[480px] ml-[200px] mt-[60px] inline-flex justify-between">
              <div className="h-10 w-[200px] bg-gray-800 text-white text-center pt-2">
                {" "}
                contact us
              </div>
              <Link to="/">
                <div className="h-10 w-[200px] bg-gray-800 text-white text-center pt-2">
                  Home
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
