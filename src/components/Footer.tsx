import IMDB from "@/Icons/IMDB";
import Instagram from "@/Icons/Instagram";
import LinkedIn from "@/Icons/LinkedIn";
import Vimeo from "@/Icons/Vimeo";
import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-between w-[80%] py-4 text-accent fixed bottom-0 backdrop-blur-3xl">
      <div className="flex max-w-[15%] rounded-lg justify-between items-center px-4">
        <p className="border-x px-4">
          <IMDB />
        </p>
        <p className="border-r px-4">
          <LinkedIn />
        </p>
        <p className="px-4">
          <Instagram />
        </p>
        <p className="border-x px-4">
          <Vimeo />
        </p>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-sm">All rights reserved &#169; 2024</p>
        <p className="text-xs">Ananth Bharadwaj Munikoti</p>
      </div>
    </div>
  );
};

export default Footer;
