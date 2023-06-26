import React from 'react';

const MySkills = () => {
  return (
    <div>
      <div className="flex flex-wrap mt-8 justify-between">
        <div className="py-4 px-6 bg-gray-100 m-4 md:w-48 w-40 rounded-lg flex flex-col items-center hover:scale-125 cursor-pointer">
          <img alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-plain.svg" className="w-8" />
          <h4 className="text-md mt-2">C Language</h4>
        </div>
        <div className="py-4 px-6 bg-gray-100 m-4 md:w-48 w-40 rounded-lg flex flex-col items-center hover:scale-125 cursor-pointer">
          <img alt="" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" className="w-8" />
          <h4 className="text-md mt-2">TypeScript</h4>
        </div>
        <div className="py-4 px-6 bg-gray-100 m-4 md:w-48 w-40 rounded-lg flex flex-col items-center hover:scale-125 cursor-pointer">
          <img alt="" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" className="w-8" />
          <h4 className="text-md mt-2">Express</h4>
        </div>
        <div className="py-4 px-6 bg-gray-100 m-4 md:w-48 w-40 rounded-lg flex flex-col items-center hover:scale-125 cursor-pointer">
          <img alt="" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" className="w-8" />
          <h4 className="text-md mt-2">NodeJS</h4>
        </div>
        <div className="py-4 px-6 bg-gray-100 m-4 md:w-48 w-40 rounded-lg flex flex-col items-center hover:scale-125 cursor-pointer">
          <img alt="" src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" className="w-8" />
          <h4 className="text-md mt-2">Postman</h4>
        </div>
        <div className="py-4 px-6 bg-gray-100 m-4 md:w-48 w-40 rounded-lg flex flex-col items-center hover:scale-125 cursor-pointer">
          <img alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" className="w-8" />
          <h4 className="text-md mt-2">Dart</h4>
        </div>
        <div className="py-4 px-6 bg-gray-100 m-4 md:w-48 w-40 rounded-lg flex flex-col items-center hover:scale-125 cursor-pointer">
          <img alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" className="w-8" />
          <h4 className="text-md mt-2">Flutter</h4>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
