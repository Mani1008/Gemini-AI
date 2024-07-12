import React from "react";
import "./Main.css";
import { assets } from "../../assets/img/assets";
import { Context } from "../../context/Context";
import { useContext } from "react";

const Main = () => {

  const {onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context)


  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">

        {!showResult
        ?<>
            <div className="greet">
            <p>
              <span>Hello, Mani.</span>
            </p>
            <p>How can I help you today?</p>
          </div>
          <div className="cards">
            <div className="card">
              <p>Can you please tell me about...</p>
              <img src={assets.compass_icon} alt="" />
            </div>

            <div className="card">
              <p>
                Briefly summarize this concept: How to reverse climate change?
              </p>
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

          </>
          :<div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading
              ?<div className="loader">
                <hr />
                <hr />
                <hr />
              </div>
              :<p dangerouslySetInnerHTML={{__html: resultData}}></p>
            }

              {/* <p dangerouslySetInnerHTML={{__html: resultData}}></p> */}
            </div>

          </div>
        }

        

        <div className="main-bottom">
            <div className="search-box">
                <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder="Enter a Prompt Here" />
                <img src={assets.gallery_icon} alt="" />
                <img src={assets.mic_icon} alt="" />
                <img onClick={()=>onSent()} src={assets.send_icon} alt="" />
            </div>
            <p className="bottom-info">
                Ask it for any information e.g., current news, cooking recipes, making good connections with others and many more.
            </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
