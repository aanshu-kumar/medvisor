async function queryChatbot(req, res) {
  try {
    console.log("Response from the chatbot");
    res.json("Hi from the chatbot");
  } catch (err) {
    console.error(err);
    res.status(500).json({
      msg: "Internal server!",
    });
  }
}

module.exports = { queryChatbot };
