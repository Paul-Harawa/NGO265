import React from "react";

function Contact() {
  return (
    <div class="max-w-6xl mx-auto pt-8 pb-12">
     
      <div className='flex flex-col text-center py-12 '>
                <h1 className='font-bold text-2xl '>Get In Touch</h1>
                <span >______________</span>
            </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-2">
        <div class="bg-gray-100 rounded-lg shadow-lg p-6">
          <form action="#" method="POST">
            <div class="mb-4">
              <label for="name" class="block text-gray-700 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <div class="mb-4">
              <label for="name" class="block text-gray-700 font-medium mb-2">
                Phone Number
              </label>
              <input
                type="number"
                id="name"
                name="name"
                placeholder="Your contact number"
                class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <div class="mb-4">
              <label for="email" class="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <div class="mb-4">
              <label for="message" class="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Your Message"
                class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              class="w-full p-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        <div class="rounded-lg overflow-hidden shadow-lg">
         

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1919.6272450607405!2d35.00609988866767!3d-15.79052951521985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18d845a7b76ce68d%3A0x9de528f83fb4b182!2s6254%2BWX3%20Blantyre%20Market%2C%20Market%20Street%2C%20Blantyre!5e0!3m2!1sen!2smw!4v1742999047114!5m2!1sen!2smw"
            wwidth="100%"
            height="100%"
            allowfullscreen=""
            loading="lazy"
            class="h-full w-full border-0"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
