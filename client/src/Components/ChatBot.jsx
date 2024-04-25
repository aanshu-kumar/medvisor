import Chatlog from "./Chatlog";
import ChatlogAI from "./ChatlogAI";

const ChatBot = () => {
  return (
    <div className="w-full h-screen bg-[#F5EFE6] relative">
      <section className="chatbox">
        <Chatlog></Chatlog>
        <ChatlogAI></ChatlogAI>

        {/* chat input holder */}

        <div className="flex justify-center p-[12px] absolute inset-x-0 bottom-0 mb-[40px]">
          <textarea
            rows={"1"}
            className="bg-[#507554] w-[60%] placeholder-[#F5EFE6] outline-none rounded-xl shadow-white shadow margin-[12px] px-[30px] py-[10px] pt-[7px] text-lg text-white border-[#dbdbda] border-spacing-10 border-4"
            placeholder="Enter your message here"
          ></textarea>
        </div>

        {/* warning message */}

        <div className="flex justify-center absolute inset-x-0 bottom-0 mb-[20px] text-sm">
          <p>
            Note: Medvisor can make mistakes. Consult doctors for critical
            information.
          </p>
        </div>
      </section>
    </div>
  );
};
export default ChatBot;
