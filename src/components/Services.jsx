import React from "react"
import Card from "../components/file/Card"
import Sdata from "../components/file/Sdata"

const Services = ()=>{
  return (
    <>
      <div className="my-5">
      <h1 className="text-center">Our Services</h1>
      </div>

      <div className="container-fluid mb-5"> 
      <div className="row">
        <div className="col-10 mx-auto">
        <div className="row  gy-4">

        {
          Sdata.map((data, ind)=>{
           return  (
             <Card 
               key= {ind}
               name = {data.title}
               imgSrc =  {data.imgsrc}
             />)
          })
        }

        
        
        </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Services;