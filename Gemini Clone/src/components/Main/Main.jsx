import React from 'react'
import './Main.css'
import { assets } from '../../assets/img/assets'

const Main = () => {
  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
            <div className="greet">
                <p><span>Hello, Mani.</span></p>
                <p>How can I help you today?</p>
            </div>
            <div className="cards">
                
                <div className="card">
                    <p>Can you please tell me about...</p>
                    <img src={assets.compass_icon} alt="" />
                </div>

                <div className="card">
                    <p>Briefly summarize this concept: How to reverse climate change?</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>

                <div className="card">
                    <p>Please suggest some of the beautiful hillstations in India</p>
                    <img src={assets.message_icon} alt="" />
                </div>

                <div className="card">
                    <p>What is the best way to make money online?</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main
