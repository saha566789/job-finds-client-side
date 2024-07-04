import React from 'react';
import UpdateForm from "@/components/ui/UpdateFrom";

const Page = ({ postId}) => {
  return (
    <div className="max-w-[1450px] w-[90%] mx-auto min-h-screen mt-20">
      <div className="w-full mt-5 text-center">
        <h1 className="md:text-6xl text-4xl font-extrabold mb-1">
          Update a <span className="text-purple-600">job</span>
        </h1>
      </div>
      <UpdateForm postId={postId} />
    </div>
  );
};

export default Page;
