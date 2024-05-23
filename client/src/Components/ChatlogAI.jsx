/* eslint-disable react/prop-types */
import parse from "html-react-parser";
const ChatlogAI = ({ message }) => {
  function formatTextResponse(response) {
    let responseArray = response.split("**");
    let newResponse = [];
    for (let i = 0; i < responseArray.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        newResponse += responseArray[i];
      } else {
        newResponse += "<strong>" + responseArray[i] + "</strong>";
      }
    }
    let newResponse2 = newResponse.split("*").join("</br>");
    return newResponse2;
  }

  const formattedMessage = formatTextResponse(message.message); // Call the formatting function
  const parsedMessage = parse(formattedMessage);

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
          <div className="message px-2 py-1">{parsedMessage}</div>
        </div>
      </div>
    </>
  );
};
export default ChatlogAI;
