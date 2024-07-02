"use client"

import CreateFrom from "@/components/ui/CreateFrom"

const page = () => {
    return (
      <div className="max-w-[1450px] w-[90%] mx-auto min-h-screen mt-20">
        <div className="w-full mt-5 text-center">
          <h1 className="md:text-6xl text-4xl font-extrabold uppercase mb-1">
            Post a{" "}
            <span className="text-purple-600">job</span>
          </h1>
          
        </div>
        <CreateFrom />
      </div>
    );
  };

  export default  page;