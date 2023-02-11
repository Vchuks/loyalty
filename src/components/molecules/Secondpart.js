import React from "react";
import Footer from "./Footer";
import SecondInput from "./SecondInput";

const Secondpart = () => {
  return (
    <>
      <div className="bg-style-two px-10 md:px-20 py-8 md:py-10 ">
        <div className="md:flex text-white items-center">
          <div className="w-full">
            <h1 className="text-4xl md:text-xxl text-center md:text-left py-4 md:py-14">What we do</h1>
            <p className="md:w-9/12">
              Loyalbaze, empowers businesses to offer digital, mobile-first
              loyalty programs to their customers. With our AI Powered platform,
              you can easily create and manage custom loyalty and rewards
              programs, track customer engagement, and gain valuable insights to
              improve your business.
            </p>
          </div>
          <div className="w-full light-blue px-4 md:px-12 py-6 rounded-2xl mt-8 md:mt-0 mb-10 md:mb-24">
            <SecondInput />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Secondpart;
