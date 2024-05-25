import Banner from "./Banner";
import { Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <>
      <Banner></Banner>
      <div className="w-full h-[100px] bg-[#F5EFE6] border flex justify-center pt-10">
        <Link to="/Login">
          <div className="h-10 w-[200px] bg-gray-800 text-white text-center pt-2">
            <p>Get Started</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default LandingPage;
