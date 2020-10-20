import React, { useState } from "react"

const Contact = ()=>{

  const [data , setData] = useState({
    name: "",
    phone: "",
    email: "",
    msg : ""
  })

  
 
  const handleChange = (event)=>{
    const {name, value} = event.target;
    
    setData((prevs)=>{
      return {
        ...prevs,
        [name] : value
      }
    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    alert(`Hi ${data.name}, Phone Number : ${data.phone} , Email : ${data.email}  and the Message : ${data.msg}`)

  }




  return (
    <>
      <div className="my-5">
        <h1 className="text-center" >Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">

            <form className="pb-5" onSubmit={handleSubmit}>

            <div className="mb-3">
      <label htmlFor="exampleFormControlInput1" className="form-label" >Full Name</label>
      <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your name" name="name" value={data.name}  onChange={handleChange} />
            </div>

            <div className="mb-3">
      <label htmlFor="exampleFormControlInput1" className="form-label" >Phone</label>
      <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Mobile Number" name="phone" value={data.phone}   onChange={handleChange} />
            </div>

            <div className="mb-3">
      <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
      <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name="email" value={data.email}  onChange={handleChange} />
            </div>

            <div className="mb-3">
      <label htmlFor="exampleFormControlTextarea1" className="form-label" >Message</label>
      <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="msg" value={data.msg}  onChange={handleChange}></textarea>
            </div>

            <div className="col-12">
      <button className="btn btn-outline-primary" type="submit">Submit form</button>
            </div>

            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;