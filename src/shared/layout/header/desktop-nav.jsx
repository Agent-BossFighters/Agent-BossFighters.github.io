import { Link } from "react-router-dom";
import { AgentLogo } from "@img/index";
import HeaderPart from "@features/users/auth/header-part";

export default function DesktopNav() {
  return (
    <div className="hidden md:flex h-24 items-center justify-between py-4 px-10 lg:px-0 lg:w-5/6 mx-auto">
      <div className="flex items-center gap-4 h-full">
        <Link to="/" className="flex items-center h-full">
          <img src={AgentLogo} alt="Agent logo" className="h-full" />
        </Link>
        {/* Navbar */}
      </div>
      <div className="flex items-center gap-4">
        {/* Currency */}
        <div className="bg-primary text-black px-2 py-1 rounded text-sm font-medium">
          PREMIUM
        </div>
        {/* User */}
        <HeaderPart />
      </div>
    </div>
  );
}
