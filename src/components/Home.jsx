import React from "react"
import Common from "./file/Common";
import web from "../components/resources/image1.svg"

const Home = ()=>{
  return (
    <>
    <Common
    name = "Grow Your Business With"
    buttonText = "Get Started"
    links = "/services"
    srcImg = {web}
    />
    </>
  )
}

export default Home;