import { useState } from "react";
import Chatlog from "./Chatlog";
import ChatlogAI from "./ChatlogAI";

const ChatBot = () => {
  const [input, setInput] = useState("");
  const [chatLog, setChatLog] = useState([
    {
      user: "Medvisor",
      message: "Hello, how can I help you!!",
    },
  ]);

  async function handleSubmit(e) {
    e.preventDefault();
    setChatLog((chatLog) => [...chatLog, { user: "You", message: `${input}` }]);
    try {
      const response = await fetch(
        "http://localhost:3000/api/aibot/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYzZjUzM2ZmMjk3ZDgzN2NkMTQxZjY0IiwiZW1haWwiOiJhYmNfQGdtYWlsLmNvbSJ9LCJpYXQiOjE3MTU1MDY3NjJ9.--FFiI9aAww5tibENxezDsdq-dySLEdtvaTmB5hdQdU",
          },
          body: JSON.stringify({
            message: input,
          }),
        }
      );
      const responseData = await response.json();

      if (!response.ok) {
        throw new Error("Failed to fetch AI response");
      }
      setChatLog((chatLog) => [
        ...chatLog,
        { user: "Medvisor", message: responseData.data },
      ]);
      setInput("");
    } catch (error) {
      console.error("Error:", error);
      // Handle error gracefully, maybe display an error message to the user
    }
  }

  return (
    <div className="w-full h-screen bg-[#E1F0DA] flex justify-center relative mt-[20px]">
      <div className="w-[100%] md:w-[55%] chatbox overflow-auto h-[70%] mt-[8px]">
        {chatLog.map((chat, index) =>
          chat.user == "Medvisor" ? (
            <ChatlogAI key={index} message={chat}></ChatlogAI>
          ) : (
            <Chatlog key={index} message={chat} />
          )
        )}
      </div>
      {/* chat input holder */}
      <form
        onSubmit={handleSubmit}
        className="flex justify-center p-[12px] absolute inset-x-0 bottom-0 mb-[40px]"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows={"1"}
          className="w-[100%] md:w-[60%] bg-[#507554]  placeholder-[#F5EFE6] outline-none rounded-xl shadow-white shadow margin-[12px] px-[30px] py-[10px] pt-[7px] text-lg text-white border-[#dbdbda] border-spacing-10 border-4"
          placeholder="Enter your message here"
        ></input>
      </form>
      {/* warning message */}

      <div className="text-xs md:text-sm flex justify-center absolute inset-x-0 bottom-0 mb-[20px] ">
        <p>
          Note: Medvisor can make mistakes. Consult doctors for critical
          information.
        </p>
      </div>
    </div>
  );
};
export default ChatBot;
