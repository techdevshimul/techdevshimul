"use client";
import { GiHamburgerMenu } from "react-icons/gi";
import { Pacifico } from "next/font/google";
import toggleSideBar from "./menu-function";

const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });

export default function SideBarMenu() {
  return (
    <div className="relative">
      <GiHamburgerMenu className="lg:hidden size-7" onClick={toggleSideBar} />
    </div>
  );
}
