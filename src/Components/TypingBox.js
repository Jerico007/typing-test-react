import React from "react";

const para = `generally throw season needle who powder pretty burst accident cloud snow cage tool ahead frame planned feet our account purple from music five writer green mass biggest paragraph bark graph soon sudden range society drive victory die tightly plain raise college rod hurt remain cream raw leg mirror guard best`;

const TypingBox = () => {
    
  return (
    <div className="typing-box">
      <div className="timer-container">
        <div className="time">15</div>
        <div className="time-option">
          <button>15s</button>
          <button>30s</button>
          <button>60s</button>
        </div>
      </div>
      <div className="text-container">
        <div className="words">
          {para
            .trim()
            .split("")
            .map((val, index) => (
              <span key={'char'+ {index}}>{val}</span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TypingBox;
