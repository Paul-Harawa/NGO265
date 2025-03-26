import React from "react";
import { FaGlobeAfrica } from "react-icons/fa";

function Footer() {
  return (
    <footer class="bg-green-600 text-gray-200 py-6">
      <div class="container mx-auto flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:justify-between">
        <div class="text-md font-bold text-white">
          <a href="#" className="flex flex-row hover:text-green-100">
            <span className="px-1 text-xl">
              <FaGlobeAfrica />
            </span>
            <h1 className="text-md font-bold">NGO 265</h1>
          </a>
        </div>

        <div class="max-w-full overflow-hidden flex flex-row space-x-3 text-sm">
          <a href="#" class="hover:text-white">
            Home
          </a>
          <a href="#" class="hover:text-white">
            About
          </a>
          <a href="#" class="hover:text-white">
            Projects
          </a>
          <a href="#" class="hover:text-white">
            Team
          </a>
          <a href="#" class="hover:text-white">
            Contact
          </a>
          <a href="#" class="hover:text-white">
            News
          </a>
          
        </div>

        <div class="text-sm text-gray-100">
          © 2025 NGO 265. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
