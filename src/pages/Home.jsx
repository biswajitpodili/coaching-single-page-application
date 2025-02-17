import React from "react";
import BannerImage from "../assets/Screenshot 2025-02-17 171244.png";
import JeeImage from "../assets/jee.png";
import NeetImage from "../assets/neet.png";
import GradeImage from "../assets/grade.png";
import { ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <>
      <div className="flex flex-row">
        <div className="flex flex-col gap-8 w-[50%]">
          <div className="flex flex-row gap-3 text-sm">
            <span className="font-semibold">Home</span>
            <span className="text-gray-300">{">"}</span>
            <span>Online Programs</span>
          </div>
          <div className="flex gap-4 flex-col">
            <h3 className="text-3xl font-bold">Online Programs</h3>
            <p className="leading-[30px] text-white/70 font-normal tracking-tight">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              ut quod eius eveniet perspiciatis animi obcaecati quis ipsa soluta
              architecto temporibus voluptas totam expedita commodi sunt quo
              amet voluptatum rerum deleniti atque similique labore sapiente
              est. Est voluptatum illo facere, nam magni nisi ratione beatae
              sint vitae dicta rem esse. Est voluptatum illo facere.
            </p>
          </div>
        </div>
        <div className="w-[50%] flex justify-center items-center">
          <img src={BannerImage} className="w-[]" alt="banner" />
        </div>
      </div>

      <div className="flex flex-col gap-8 mt-8">
        <h4 className="text-2xl font-bold">
          Discover the perfect online programs
        </h4>
        <div className="grid grid-cols-3 gap-8">
          <div className="flex flex-col justify-between gap-30 rounded-lg bg-[#192339] p-8 relative z-[2]">
            <h2 className="font-bold text-2xl z-[2]">JEE</h2>
            <div className="text-[#7EA6F0] flex flex-row items-center gap-2 z-[2]">
              <p className="text-xl font-semibold ">View</p>{" "}
              <ArrowRight size={18} />
            </div>
            <img
              src={JeeImage}
              className="absolute bottom-0 right-0 w-[14rem] overflow-hidden z-[1] pointer-events-none"
              alt="jee"
            />
          </div>
          <div className="flex flex-col justify-between gap-30 rounded-lg bg-[#192339] p-8 relative z-[2]">
            <h2 className="font-bold text-2xl z-[2]">NEET</h2>
            <div className="text-[#7EA6F0] flex flex-row items-center gap-2 z-[2]">
              <p className="text-xl font-semibold ">View</p>{" "}
              <ArrowRight size={18} />
            </div>
            <img
              src={NeetImage}
              className="absolute bottom-0 right-0 w-[14rem] overflow-hidden z-[1] pointer-events-none"
              alt="neet"
            />
          </div>
          <div className="flex flex-col justify-between gap-30 rounded-lg bg-[#192339] p-8 relative z-[2]">
            <h2 className="font-bold text-2xl z-[2]">Grade 6-10</h2>
            <div className="text-[#7EA6F0] flex flex-row items-center gap-2 z-[2]">
              <p className="text-xl font-semibold ">View</p>{" "}
              <ArrowRight size={18} />
            </div>
            <img
              src={GradeImage}
              className="absolute bottom-0 right-0 w-[14rem] overflow-hidden z-[1] pointer-events-none"
              alt="grade"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
