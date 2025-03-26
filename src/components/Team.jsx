import React from "react";

import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa";

import t1Image from "../assets/t1.jpg";
import t2Image from "../assets/t2.jpg";
import t3Image from "../assets/t3.jpg";
import t4Image from "../assets/t4.jpg";

function Team() {
  return (
    <div className="h-auto bg-green-600 pb-16">
      <div className="flex flex-col text-center py-12">
        <div className="flex flex-col">
          <h1 className="font-bold text-2xl text-white">Meet The Team</h1>
          <span className="text-white">______________</span>
        </div>
      </div>

      <div className="pt-6 flex md:flex-row flex-col p-2 justify-around md:space-y-0 space-y-6 md:space-x-2">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          <div class="bg-black bg-opacity-30 rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300">
            <div class="flex items-center">
              <img
                src={t1Image}
                alt="Team Member"
                class="w-16 h-16 rounded-full object-cover border border-blue-500"
              />
              <div class="ml-4">
                <h2 class="text-lg font-bold text-gray-100">John Doe</h2>
                <p class="text-gray-200">Founder and Director</p>
              </div>
            </div>
            <p class="text-gray-100 mt-4">
              John is a talented engineer who specializes in creating seamless
              user experiences. He loves coding and coffee!
            </p>
            <div class="flex space-x-4 mt-4">
              <a href="#" class="bg-gray-200 p-4 rounded-full text-blue-500 hover:text-blue-700">
                <SlSocialLinkedin />
              </a>
              <a href="#" class="bg-gray-200 p-4 rounded-full text-blue-500 hover:text-blue-700">
                <SlSocialFacebook />
              </a>
              <a href="#" class="bg-gray-200 p-4 rounded-full text-blue-500 hover:text-blue-700">
                <SlSocialTwitter  />
              </a>
              <a href="#" class="bg-gray-200 p-4 rounded-full text-blue-500 hover:text-blue-700">
                <FaWhatsapp />
              </a>
            </div>
          </div>



          <div class="bg-black bg-opacity-30  rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300">
            <div class="flex items-center">
              <img
                src={t2Image}
                alt="Team Member"
                class="w-16 h-16 rounded-full object-cover border border-blue-500"
              />
              <div class="ml-4">
                <h2 class="text-lg font-bold text-gray-100">John Doe</h2>
                <p class="text-gray-200">Founder and Director</p>
              </div>
            </div>
            <p class="text-gray-100 mt-4">
              John is a talented engineer who specializes in creating seamless
              user experiences. He loves coding and coffee!
            </p>
            <div class="flex space-x-4 mt-4">
              <a href="#" class="bg-gray-200 p-4 rounded-full text-blue-500 hover:text-blue-700">
                <SlSocialLinkedin />
              </a>
              <a href="#" class="bg-gray-200 p-4 rounded-full text-blue-500 hover:text-blue-700">
                <SlSocialFacebook />
              </a>
              <a href="#" class="bg-gray-200 p-4 rounded-full text-blue-500 hover:text-blue-700">
                <SlSocialTwitter  />
              </a>
              <a href="#" class="bg-gray-200 p-4 rounded-full text-blue-500 hover:text-blue-700">
                <FaWhatsapp />
              </a>
            </div>
          </div>


          <div class="bg-black bg-opacity-30  rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300">
            <div class="flex items-center">
              <img
                src={t3Image}
                alt="Team Member"
                class="w-16 h-16 rounded-full object-cover border border-blue-500"
              />
              <div class="ml-4">
                <h2 class="text-lg font-bold text-gray-100">John Doe</h2>
                <p class="text-gray-200">Founder and Director</p>
              </div>
            </div>
            <p class="text-gray-100 mt-4">
              John is a talented engineer who specializes in creating seamless
              user experiences. He loves coding and coffee!
            </p>
            <div class="flex space-x-4 mt-4">
              <a href="#" class="bg-gray-200 p-4 rounded-full text-blue-500 hover:text-blue-700">
                <SlSocialLinkedin />
              </a>
              <a href="#" class="bg-gray-200 p-4 rounded-full text-blue-500 hover:text-blue-700">
                <SlSocialFacebook />
              </a>
              <a href="#" class="bg-gray-200 p-4 rounded-full text-blue-500 hover:text-blue-700">
                <SlSocialTwitter  />
              </a>
              <a href="#" class="bg-gray-200 p-4 rounded-full text-blue-500 hover:text-blue-700">
                <FaWhatsapp />
              </a>
            </div>
          </div>


          <div class="bg-black bg-opacity-30  rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300">
            <div class="flex items-center">
              <img
                src={t4Image}
                alt="Team Member"
                class="w-16 h-16 rounded-full object-cover border border-blue-500"
              />
              <div class="ml-4">
                <h2 class="text-lg font-bold text-gray-100">John Doe</h2>
                <p class="text-gray-200">Founder and Director</p>
              </div>
            </div>
            <p class="text-gray-100 mt-4">
              John is a talented engineer who specializes in creating seamless
              user experiences. He loves coding and coffee!
            </p>
            <div class="flex space-x-4 mt-4">
              <a href="#" class="bg-gray-200 p-4 rounded-full text-blue-500 hover:text-blue-700">
                <SlSocialLinkedin />
              </a>
              <a href="#" class="bg-gray-200 p-4 rounded-full text-blue-500 hover:text-blue-700">
                <SlSocialFacebook />
              </a>
              <a href="#" class="bg-gray-200 p-4 rounded-full text-blue-500 hover:text-blue-700">
                <SlSocialTwitter  />
              </a>
              <a href="#" class="bg-gray-200 p-4 rounded-full text-blue-500 hover:text-blue-700">
                <FaWhatsapp />
              </a>
            </div>
          </div>
          




        </div>
      </div>
    </div>
  );
}

export default Team;
