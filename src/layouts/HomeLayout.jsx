import { Outlet } from "react-router-dom";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";

const HomeLayout = () => (
    <div className="h-screen bg-[#0F1925] font-opensans overflow-y-auto">
      <Navbar />
      <div className="w-[80%] min-h-screen mx-auto py-10 px-5">
        <Outlet />
      </div>
      <Footer />
    </div>
  );

export default HomeLayout;