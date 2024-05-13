/* eslint-disable react/prop-types */
const ChatlogAI = ({ message }) => {
  return (
    <>
      <div
        className={`chatlog ${
          message.user === "Medvisor" ? "flex text-gray-50" : ""
        }`}
      >
        <div
          className={`chat-message ${
            message.user === "Medvisor"
              ? "mt-14 bg-[#4f6f52] border-zinc-600 rounded-xl"
              : "mt-14 border-zinc-600 rounded-xl"
          }`}
        >
          <div className="avatar text-sm font-bold px-2 pt-2 ">
            {message.user}
          </div>
          <div className="message px-2 py-1">{message.message}</div>
        </div>
      </div>
    </>
  );
};
export default ChatlogAI;

// const Chatlog = ({ message }) => {
//   return (
//     <>
//       <div className="chatlog">
//         <div className="chat-message mt-14 border-zinc-600  rounded-xl">
//           <div className="avatar `${message.user === Medvisor  ?  :  }` text-sm font-bold px-2 pt-2">
//             {message.user}
//           </div>
//           <div className="message px-2 py-1">{message.message}</div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default Chatlog;
