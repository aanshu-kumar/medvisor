/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const Chatlog = ({ message }) => {
  return (
    <>
      <div className="chatlog">
        <div className="chat-message mt-14 border-zinc-600  rounded-xl">
          <div className="avatar `${message.user === Medvisor  ?  :  }` text-sm font-bold px-2 pt-2">
            {message.user}
          </div>
          <div className="message px-2 py-1">{message.message}</div>
        </div>
      </div>
    </>
  );
};
export default Chatlog;
