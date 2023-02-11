import React from 'react'
import Button from '../atoms/Button'
import Input from '../atoms/Input'
import { useState } from 'react'

const SecondInput = () => {
  const [req, setReq] = useState({
    fullname:"",
    email:"",
    phnum:"",
    company:"",
    country:"",
    message:""
  })

 const handleChange = (e) => {
  setReq({
    ...req,[e.target.name]:e.target.value
  })
 }

 const handleSubmit =(e) =>{
  e.preventDefault();
  console.log(req)
 }
  return (
    <>
      <form className='flex flex-col gap-4 text-lg m-auto w-11/12' onSubmit={handleSubmit}>
        <Input type='text'placeholder='Enter your full name'value={req.fullname} name="fullname"
            onChange={handleChange}/>
        <Input type='email'placeholder='Enter your work email' value={req.email} name="email"
            onChange={handleChange}/>
        <Input type='number'placeholder='Mobile number' value={req.phnum} name="phnum"
            onChange={handleChange}/>
        <Input type='text'placeholder='Company Name' value={req.company} name="company"
            onChange={handleChange}/>
        <select name="country" value={req.country} onChange={handleChange}>
            <option value="" disabled selected hidden>Select Country</option>
            <option value="Nigeria" onChange={handleChange}>Nigeria</option>
            <option value="Ghana" onChange={handleChange}>Ghana</option>
            <option value="England" onChange={handleChange}>England</option>
        </select>
        <textarea placeholder='Drop a message.....' cols="" rows="5" value={req.message} name="message"
            onChange={handleChange} className="input"></textarea>
        <Button className='btn-two px-10 font-medium py-3 rounded-full' children= 'Send Request'/>
      </form>
    </>
  )
}

export default SecondInput
