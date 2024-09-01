import React, { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    // Embedded chatbot config
    window.embeddedChatbotConfig = {
      chatbotId: "S7lWpH-5FsVwUai6s1QL_",
      domain: "www.chatbase.co",
    };

    // Create script element
    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.setAttribute("chatbotId", "S7lWpH-5FsVwUai6s1QL_");
    script.setAttribute("domain", "www.chatbase.co");
    script.defer = true;

    // Append script to the document body
    document.body.appendChild(script);

    // Cleanup function to remove the script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array to ensure this runs only on mount/unmount

  return (
    <div style={{ width: "100%", height: "100%", minHeight: "700px" }}>
      <iframe
        src="https://www.chatbase.co/chatbot-iframe/S7lWpH-5FsVwUai6s1QL_"
        width="100%"
        style={{ height: "100%", minHeight: "700px" }}
        frameBorder="0"
        title="Chatbot"
      ></iframe>
    </div>
  );
};

export default Chatbot;
