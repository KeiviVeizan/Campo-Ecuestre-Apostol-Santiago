// FloatingChatbot.jsx
import React from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "./config";
import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";

const FloatingChatbot = () => {
    const [isVisible, setIsVisible] = React.useState(false);

    const toggleChatbot = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 1000 }}>
            <button onClick={toggleChatbot} style={{ borderRadius: "50%", padding: "10px", cursor: "pointer" }}>
                💬
            </button>
            {isVisible && (
                <div style={{ position: "absolute", bottom: "60px", right: "0", width: "300px", height: "500px" }}>
                    <Chatbot
                        config={config}
                        messageParser={MessageParser}
                        actionProvider={ActionProvider}
                    />
                </div>
            )}
        </div>
    );
};

export default FloatingChatbot;
