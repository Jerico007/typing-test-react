import React,{useState} from "react";

const para = `generally throw season needle who powder pretty burst accident cloud snow cage tool ahead frame planned feet our account purple from music five writer green mass biggest paragraph bark graph soon sudden range society drive victory die tightly plain raise college rod hurt remain cream raw leg mirror guard best`;

const TypingBox = () => {
   
    const [time,setTime] = useState("15");
  return (
    <div className="typing-box">
      <div className="timer-container">
        <div className="time">{time}</div>
        <div className="time-option">
          <button onClick={()=>setTime("15")}>15s</button>
          <button onClick={()=>setTime("30")}>30s</button>
          <button onClick={()=>setTime("60")}>60s</button>
        </div>
      </div>
      <div className="text-container">
        <div className="words">
          {para.trim().split("").map((val,index) =>(<span key={'char'+ index}>{val}</span>))}
        </div>
      </div>
    </div>
  );
};

export default TypingBox;
