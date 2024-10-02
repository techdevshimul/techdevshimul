"use client";
import { IoMdCloseCircle } from "react-icons/io";
import { Pacifico } from "next/font/google";
import toggleSideBar from "./menu-function";

const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });

export default function SideBarClose() {
  return (
    <div className="relative">
      <IoMdCloseCircle className="lg:hidden size-10" onClick={toggleSideBar} />
    </div>
  );
}
