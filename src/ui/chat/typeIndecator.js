import React, { useEffect, useState } from "react";
import "./chat.scss";

const TypingIndicator = () => {
  const [showTypingIndicator, setShowTypingIndicator] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setShowTypingIndicator((prev) => !prev);
    }, 500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="typing-indicator-container">
      <div
        className={`typing-indicator ${showTypingIndicator ? "active" : ""}`}
      ></div>
      <div
        className={`typing-indicator ${showTypingIndicator ? "active" : ""}`}
      ></div>
      <div
        className={`typing-indicator ${showTypingIndicator ? "active" : ""}`}
      ></div>
    </div>
  );
};

export default TypingIndicator;
