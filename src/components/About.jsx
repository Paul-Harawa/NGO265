import React from 'react'
import aboutImage from "../assets/about.jpg";
import about2Image from "../assets/about2.jpg";
import { FaRegFolderOpen } from "react-icons/fa";
import { RiTeamLine } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";

function About() {
  return (
    <div className='h-auto bg-gray-100'>
        <div className='flex flex-col text-center py-12'>

            <div className='flex flex-col'>
                <h1 className='font-bold text-2xl '>Who We Are</h1>
                <span >______________</span>
            </div>

            <div className='pt-6 flex md:flex-row flex-col p-2 justify-around md:space-y-0 space-y-2'>
                <div className='md:w-1/2 h-auto'>
                <p className='p-2 text-justify font-light text-md w-full'>
                    Founded Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum ipsum facere exercitationem quibusdam ipsam odio alias minus, molestiae impedit voluptatibus aspernatur officiis, culpa dolorem tenetur? Illum animi culpa quae beatae.
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ex placeat aut distinctio, ullam quos sint praesentium, voluptate eaque, temporibus expedita dicta mollitia. Laborum nihil quaerat numquam beatae, ratione fugiat?
                </p>

                <div className='w-full flex flex-row py-5 space-x-1'>
                    
                    <a href="#" className='bg-green-600 text-white px-5 py-3 rounded-lg hover:bg-green-700 cursor-pointer flex flex-row'>Projects <span className='text-lg p-1'>
                    <FaRegFolderOpen  /> </span></a>

                    <a href="#" className='bg-green-600 text-white px-5 py-3 rounded-lg hover:bg-green-700 cursor-pointer flex flex-row'>Team <span className='text-lg p-1'><RiTeamLine /></span></a>
                    
                    <a href="#" className='bg-green-600 text-white px-5 py-3 rounded-lg hover:bg-green-700 cursor-pointer flex flex-row'>Contact <span className='text-lg p-1'>
                    <FiPhoneCall /></span></a>
                    

                </div>

                </div>
                <div className='md:w-1/4 h-auto'>
                        <img src={aboutImage} alt="" className='bg-green-100 p-1 border border-green-200 rounded-full' />
                </div>
            </div>

        </div>
    </div>
  )
}

export default About