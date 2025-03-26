import React, { useState } from "react";
import projectsBg from "../assets/projectsbg.jpg";

import project1 from "../assets/pj1.jpg";
import project2 from "../assets/pj2.jpg";
import project3 from "../assets/pj3.jpg";

function Projects() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => setShowPopup(!showPopup);

  return (
    <div className="h-auto bg-gray-100 pb-16">
      <div className="flex flex-col text-center py-12">
        <div className="flex flex-col">
          <h1 className="font-bold text-2xl ">Our Projects</h1>
          <span>______________</span>
        </div>
      </div>

      <div className="pt-6 flex md:flex-row flex-col p-2 justify-around md:space-y-0 space-y-6 md:space-x-2">
        <div class="md:w-1/3 ">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault(); // Prevent navigation
              togglePopup(); // Open popup
            }}
            class="group block overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div class="relative h-64 overflow-hidden">
              <img
                src={project1}
                alt="Card Image"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div class="p-4">
              <h2 class="text-lg font-bold text-gray-800 group-hover:text-teal-600">
                Child Development
              </h2>
              <p class="text-gray-600 mt-2 font-light">
                This is a description for the child development project. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Itaque a
                officia praesentium sint ea quae alias illo quidem minus omnis
                iste, assumenda corrupti quod natus delectus ipsa blanditiis
                obcaecati.
              </p>
            </div>
          </a>
        </div>

        <div class="md:w-1/3 ">
          <a
            href="#"
            onClick={(e) => {
                e.preventDefault(); // Prevent navigation
                togglePopup(); // Open popup
              }}
            class="group block overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div class="relative h-64 overflow-hidden">
              <img
                src={project2}
                alt="Card Image"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div class="p-4">
              <h2 class="text-lg font-bold text-gray-800 group-hover:text-teal-600">
                Youth Empowerment
              </h2>
              <p class="text-gray-600 mt-2 font-light">
                This is a description for the Youth Empowerment project. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Itaque a
                officia praesentium sint ea quae alias illo quidem minus..
              </p>
            </div>
          </a>
        </div>

        <div class="md:w-1/3 ">
          <a
            href="#"
            onClick={(e) => {
                e.preventDefault(); // Prevent navigation
                togglePopup(); // Open popup
              }}
            class="group block overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div class="relative h-64 overflow-hidden">
              <img
                src={project3}
                alt="Card Image"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div class="p-4">
              <h2 class="text-lg font-bold text-gray-800 group-hover:text-teal-600">
                Education
              </h2>
              <p class="text-gray-600 mt-2 font-light">
                This is a description for the education project. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Itaque a officia
                praesentium sint ea quae alias illo quidem minus omnis iste,
                assumenda corrupti quod natus delectus ipsa blanditiis
                obcaecati.
              </p>
            </div>
          </a>
        </div>

        {/* Popup Details */}
        {showPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-1">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
              <h3 className="text-xl font-bold text-gray-800">
                Child Development
              </h3>
              <p className="mt-4 text-gray-600">
              This is a description for the child development project. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Itaque a
                officia praesentium sint ea quae alias illo quidem minus omnis
                iste, assumenda corrupti quod natus delectus ipsa blanditiis
                obcaecati.
              </p>
              <button
                onClick={togglePopup}
                className="mt-6 px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600 transition"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;
