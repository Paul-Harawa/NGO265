import React, { useEffect } from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/hero.jpg";
import heroBg from "../assets/bg.jpg";
import { FaGlobeAfrica } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { BiSolidDonateHeart } from "react-icons/bi";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialYoutube } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="h-auto ">
      <div className="w-full bg-[url('./assets/bg.jpg')] bg-cover bg-center">
        <div class="bg-white bg-opacity-15 w-full flex md:flex-row md:justify-around flex-col py-14 px-10">
          <div className="md:w-1/2">
            <img
              src={heroImage}
              alt=""
              className="rounded-b-full border-x-8 border-green-700"
            />
          </div>

          <div className="md:py-8 md:my-14 my-10 py-8 md:w-1/3 bg-white border border-gray-300 shadow-2xl shadow-gray-800 rounded-3xl">
            <div className="px-5 text-center">
              <div className="text-2xl font-bold flex flex-row space-x-2">
                <span className="text-3xl text-green-600">
                  <FaGlobeAfrica />
                </span>
                <h1 className="text-2xl font-bold text-green-600">NGO 265</h1>
              </div>
              <div className="py-2 text-justify ">
                <p className="font-light text-md">
                  We are a registered local Non Governmental Organization based
                  in Blantyre, Malawi. <br />
                  <br /> We are implementing multiple projects in the following
                  thematic areas: <br />
                  <div className="flex flex-row space-x-2 pt-3">
                    <FaRegArrowAltCircleRight className="text-green-600 my-1" />{" "}
                    <span className="">Education</span>
                  </div>
                  <br />
                  <div className="flex flex-row space-x-2">
                    <FaRegArrowAltCircleRight className="text-green-600 my-1" />{" "}
                    <span className="">Child Development</span>
                  </div>
                  <br />
                  <div className="flex flex-row space-x-2">
                    <FaRegArrowAltCircleRight className="text-green-600 my-1" />{" "}
                    <span className="">Youth Empowerment</span>
                  </div>
                  <br />
                </p>

                <div>
                  <motion.a
                    whileHover={{ scale: 1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleCloseMenu();
                      handleScrollTo("contact");
                    }}
                    href="#contact"
                    className="flex flex-row text-white bg-green-600 hover:bg-green-600/90 px-5 py-2 rounded-full w-full justify-center"
                  >
                    Contribute To The Cause{" "}
                    <span className="text-xl px-2">
                      <BiSolidDonateHeart />
                    </span>
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-auto bg-gray-100 text-green-600">
        <div className="flex flex-row justify-around text-5xl py-6"> 
          <SlSocialYoutube className="bg-green-600 text-white border rounded-2xl p-3 hover:bg-green-500 cursor-pointer" />
          <SlSocialLinkedin className="bg-green-600 text-white border rounded-2xl p-3 hover:bg-green-500 cursor-pointer" />
          <SlSocialFacebook className="bg-green-600 text-white border rounded-2xl p-3 hover:bg-green-500 cursor-pointer" />
          <SlSocialTwitter className="bg-green-600 text-white border rounded-2xl p-3 hover:bg-green-500 cursor-pointer" />

          <FaWhatsapp className="bg-green-600 text-white border rounded-2xl p-3 hover:bg-green-500 cursor-pointer" />
          
        </div>
      </div>
    </div>
  );
};

export default Hero;
