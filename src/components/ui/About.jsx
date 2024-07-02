const About = () => {
  return (
    <div className="py-16 bg-gray-50/50 mt-10" id="about">
      <div className="w-[90%] mx-auto max-w-[1450px]">
        <h2 className="w-full text-center mb-10 text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase text-purple-600">
          About Us
        </h2>

        <div className="mt-5 lg:w-full flex flex-col justify-center items-center w-[290px]">
          <p className="leading-loose text-center text-sm md:text-base lg:text-lg">
            At JobFinds, we believe that finding the right job should be a seamless and empowering experience for both job seekers and employers. Our mission is to bridge the gap between talented individuals and thriving companies by providing a platform that fosters meaningful connections and career growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
