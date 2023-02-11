import React, { useState } from "react";
import Input from "../atoms/Input";
import Logo from "../atoms/Logo";
import person from "../../images/profilecircle.png";
import mail from "../../images/mail-01.png";
import Button from "../atoms/Button";

const FirstInput = () => {
  const [access, setAccess] = useState({
    fname:"",
    email:""
  })

 const handleChange = (e) => {
  setAccess({
    ...access,[e.target.name]:e.target.value
  })
 }

 const handleSubmit =(e) =>{
  e.preventDefault();
  console.log(access)
 }
  return (
    <>
      <form className="md:w-1/3 flex flex-col m-auto gap-5 mt-14" onSubmit={handleSubmit}>
        <div className="relative">
          <Logo src={person} className="absolute top-1/4 left-3" />
          <Input
            type="text"
            placeholder="Tell us your name"
            className="w-full input inpt"
            name="fname"
            value={access.fname}
            onChange={handleChange}
          />
        </div>
        <div className="relative">
          <Logo src={mail} className="absolute top-1/4 left-3" />
          <Input
          type="email"
            placeholder="Enter your email address"
            className="w-full input inpt"
            name="email"
            value={access.email}
            onChange={handleChange}
          />
        </div>
        <Button
          children="Get early access"
          className="btn-two px-10 font-medium py-3 text-white rounded-full"
        />

        <div className="flex items-center relative m-auto">
          <p className="w-8 text-white text-center rounded-full px-1 py-1 font-semibold blue relative z-30">
            G
          </p>
          <p className="w-8 text-white text-center rounded-full px-1 py-1 font-semibold violet absolute left-7 z-20">
            O
          </p>
          <p className="w-8 text-white text-center rounded-full px-1 py-1 font-semibold blue absolute left-14 z-10">
            U
          </p>
          <p className="w-8 text-white text-center rounded-full px-1 py-1 font-semibold violet absolute left-20">
            M
          </p>
          <p className="font-medium ml-24 text-white">+57 joined</p>
        </div>
      </form>
    </>
  );
};

export default FirstInput;
