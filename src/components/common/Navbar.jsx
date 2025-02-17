import React from "react";
import { Link } from "react-router-dom";
import { PhoneCallIcon } from "lucide-react";

const LinkItems = [
  { name: "Exams", path: "/exams" },
  { name: "Programs", path: "/programs" },
  { name: "Scholarships", path: "/scholarships" },
  { name: "Test Series", path: "/test-series" },
  { name: "Study Materials", path: "/study-material" },
];

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-10 py-6">
      <div className="flex items-center space-x-8">
        <Link to={"/"} className="text-3xl font-bold font-sigmar">
          Allen
        </Link>
        <div className="flex items-center justify-evenly gap-8">
          {LinkItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="text-white/90 text-sm font-semibold"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <button className="bg-white text-sm text-[#0F1925] px-4 py-2 rounded-3xl font-semibold tracking-tight flex gap-2 items-center">
          <PhoneCallIcon className="h-4 w-4" />
          Talk to us
        </button>
        <button className="font-semibold border-1 px-6 py-2 rounded-3xl text-sm drop-shadow-lg border-white text-white">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
