import React from 'react'
import { TiTick } from "react-icons/ti";

const Card = ({ cardDetails, setActiveCard }) => {
   const { heading, subHeading, description, price, planDetails, activeCard } = cardDetails
   const onClickCard = () => {
      setActiveCard(heading)
   }

   return (
      <div className={activeCard === heading ? 'bg-white rounded-4 active-card' : "bg-white rounded-4 card"} onClick={onClickCard}>
         {heading === "Basic" && (<div className='pop-container'>MOST POPULAR</div>)}
         <div className='p-3'>
            <h1 className="mb" style={{ fontSize: "25px", fontWeight: "bold", color: "#000" }}>{heading}</h1>
            <h5 className="mb" style={{ fontSize: "12px", fontWeight: "1000" }}>{subHeading}</h5>
            <p className="mb">{description}</p>
            <div className='d-flex align-items-end mb-tab' >
               <h1 className="mob-view" style={{ fontWeight: "bold", margin: "0px 5px 0px 0px", color: "#000" }}>{price} </h1>
               <span className='subscript-font'>INR <br /> /mo</span>
            </div>
         </div>
         <div className='card-box mt-3 mb-3'>Get your first 3 months for ₹20/mo</div>
         <div className='p-3'>
            <h5 style={{ fontSize: "12px", fontWeight: "1000" }}>What's included on {heading}</h5>
            {planDetails.map(item => (
               <div className='d-flex justify-content-start align-items-center' key={item}>
                  <TiTick size={15} style={{ color: "#99DEEC" }} />
                  <p className='m-0 ps-2'>{item}</p>
               </div>
            ))}
            <button className='card-btn mt-4'>Try For Free</button>
         </div>
      </div>
   )
}

export default Card