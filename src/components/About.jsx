import React from "react"
import Common from "./file/Common";
import web2 from "../components/resources/image2.svg"


const About = ()=>{
  return (
    <>
    <Common 
    name="Welcome to About Page"
    buttonText = "Contact Now"
    links = "/contact"
    srcImg = {web2}

    />
    </>
  )
}

export default About;