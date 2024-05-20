import { ReactTyped } from "react-typed";

const Banner = () => {
  return (
    <>
      <div className="bg-[#F5EFE6] w-full py-[100px] mt-[65px]">
        <div className="max-w-[1240px] mx-auto text-center my-[80px]">
          <div className="text-[30px]"> The greatest wealth is health.</div>
          <div className=" text-[60px] md:text-[80px] p-[20px] font-bold text-[#4F6F52]">
            Get Fit with us.
          </div>
          <div className="text-[40px] md:text-[50px] p-[24px]font-bold text-[#e8d3a2]">
            Your{" "}
            <ReactTyped
              className="p-2 font-bold"
              strings={[
                "Personal Health Assistent.",
                "Gym Partner.",
                "Yoga Instructor.",
                "Nutrinist.",
              ]}
              typeSpeed={60}
              loop={true}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Banner;
