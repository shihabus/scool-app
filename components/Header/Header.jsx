import React from "react";
import Navigation from "./Navigation";
import Actions from "./actions";
import LogoWrapper from "./Logo";

export default function Header() {
  return (
    //return
    <div className=" p-4 lg:border-b border-gray-400 mx-6 lg:mx-28 flex items-center justify-between ease-in-out">
      <LogoWrapper />
      <Navigation />
      <Actions />
    </div>
  );
}
