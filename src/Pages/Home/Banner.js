import React from 'react';
import { BiLinkExternal } from 'react-icons/bi';
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';

const Banner = () => {
  return (
    <section class="text-gray-400 bg-gray-900 body-font">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            <span className=" text-xl ">Hi There! </span>
            <br class="inline-block" />
            I'M Anwarul Islam
          </h1>
          <p class="mb-8 leading-relaxed">
            I am passionate about using Javascript and React.js Libraries to
            create awesome user experiences. With over One years of experience
            developing web applications using the latest front-end and back-end
            technologies.
          </p>
          <div class="flex justify-center ">
            <button
              onClick={() => {
                window.open(
                  'https://drive.google.com/file/d/1XRQGq7phnlhIDzWgT4cQEI3HqCZIgxeb/view?usp=sharing',
                  '_blank'
                );
                return false;
              }}
              class="inline-flex items-center text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg uppercase font-medium"
            >
              Resume Download <BiLinkExternal className=" ml-3" />
            </button>
          </div>

          {/* social media  */}
          <div class="flex justify-center mt-5">
            <button
              onClick={() => {
                window.open(
                  'https://www.linkedin.com/in/anwarul-islam-69689023b/',
                  '_blank'
                );
                return false;
              }}
              class="inline-flex items-center text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg uppercase font-medium"
            >
              <BsLinkedin className="" />
            </button>
            <button
              onClick={() => {
                window.open('https://github.com/anwarul1', '_blank');
                return false;
              }}
              class="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              <BsGithub className="" />
            </button>
            <button
              onClick={() => {
                window.open('https://twitter.com/anwarul_007', '_blank');
                return false;
              }}
              class="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              <BsTwitter className="" />
            </button>
          </div>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            class="object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
