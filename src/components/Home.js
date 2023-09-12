import React from 'react'
import { useState } from 'react'
import Logo from '../assets/pngwing.com.png'
import Card from './Card'
import { FiMenu } from "react-icons/fi";

const cardArray = [{
   heading: "Basic",
   subHeading: "FOR INDIVIDUALS & SMALL BUSINESSES",
   description: "Everything you need to create your store, ship products, and process payments",
   price: "₹1,994",
   planDetails: ["Basic reports", "Up to 1,000 inventory locations", "2 staff accounts"]
},
{
   heading: "Shopify",
   subHeading: "FOR SMALL BUSINESSES",
   description: "Level up your business with professional reporting and more staff accounts",
   price: "₹7,447",
   planDetails: ["Professional reports", "Up to 1,000 inventory locations", "5 staff accounts"]
},
{
   heading: "Advanced",
   subHeading: "FOR MEDIUM TO LARGE BUSINESSES",
   description: "Get the best to Shopify with custom reporting and our lowest transaction fees",
   price: "₹30,164",
   planDetails: ["Custom report builder", "Up to 1,000 inventory locations", "15 staff accounts"]
}]

const Home = () => {
   const [active, setActive] = useState("free trial")
   const [activeCard, setCard] = useState("Basic")
   const [payType, setPayType] = useState("monthly")
   const setActiveCard = (card) => {
      setCard(card)
   }

   return (
      <div className='bg-container'>
         <nav>
            <div className='d-flex flex-row justify-content-start align-items-center nav-items-container'>
               <img src={Logo} alt="logo" className='logo' />
               <ul className='d-flex flex-row justify-content-start align-items-center nav-list '>
                  <li>
                     <select className='dropdown' defaultValue="Solutions">
                        <option className=''>
                           Solutions
                        </option>
                     </select>
                  </li>
                  <li className='mb-2'>Pricing</li>
                  <li>
                     <select className='dropdown' defaultValue="Resources">
                        <option>
                           Resources
                        </option>
                     </select>
                  </li>
               </ul>
               <button onClick={() => setActive("login")} className={active === "login" ? "active" : "nav-btn"}>Login</button>
               <button onClick={() => setActive("free trial")} className={active === "free trial" ? "active" : "nav-btn"}>Start free trial</button>
               <div className='mobile-container'>
                  <button className='mobile-btn'>Start free trial</button>
                  <FiMenu size={25} style={{ color: "#000" }} />
               </div>
            </div>
         </nav>
         <hr color='gray' className='m-0' />
         <div
            className="mb-3 tab-buttons-container"
         >
            <button onClick={() => setCard("Basic")} className={activeCard === "Basic" ? "active-tab-btn" : 'tab-btn'}>
               Basic
            </button>
            <button onClick={() => setCard("Shopify")} className={activeCard === "Shopify" ? "active-tab-btn" : 'tab-btn'}>
               Shopify
            </button>
            <button onClick={() => setCard("Advanced")} className={activeCard === "Advanced" ? "active-tab-btn" : 'tab-btn'}>
               Advanced
            </button>
         </div>
         <div className='content-container d-flex flex-column justify-content-start align-items-center pt-5 pl-0 pr-0'>
            <div className='toggle-card'>
               <button className={payType === "monthly" ? "active" : "nav-btn m-1"} onClick={() => setPayType("monthly")}>Pay Monthly</button>
               <button className={payType === "yearly" ? "active" : "nav-btn m-1"} onClick={() => setPayType("yearly")}>Pay Yearly (Save 25%)</button>
            </div>
            <div className='d-flex justify-content-between m-0 p-0 card-container'>
               {cardArray.map(eachCard => (
                  <Card key={eachCard.heading} cardDetails={{ ...eachCard, activeCard }} setActiveCard={setActiveCard} />
               ))}
            </div>
         </div>
      </div>
   )
}

export default Home