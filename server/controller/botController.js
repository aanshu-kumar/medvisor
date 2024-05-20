const { GoogleGenerativeAI } = require("@google/generative-ai");
const { Chat } = require("../models/Chat.js");
const User = require("../models/User.js");

async function queryChatbot(req, res) {
  const userMessage = req.body.message;
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  try {
    // Check if the user message contains fitness-related keywords
    const isFitnessRequest = containsFitnessKeywords(userMessage);
    if (!isFitnessRequest) {
      return res.status(400).json({
        success: false,
        message:
          "I am not able to answer your question, please ask me fitness related questions.",
      });
    }

    const prompt = userMessage;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const data = response.text();

    // save the user message and response to the database
    const chat = await Chat.create({
      userMessage: prompt,
      aiResponse: data,
    });

    await User.findByIdAndUpdate(
      req.user.id,
      {
        $push: { chatHistory: chat._id },
      },
      { new: true }
    );

    return res.status(200).json({ success: true, data: data });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      msg: "Internal server!",
    });
  }
}

// Function to check if the message contains fitness-related keywords
function containsFitnessKeywords(message) {
  const fitnessKeywords = [
    "fit",
    "fitness",
    "exercise",
    "workout",
    "gym",
    "health",
    "wellness",
    "strength",
    "training",
    "cardio",
    "aerobic",
    "anaerobic",
    "muscle",
    "weightlifting",
    "bodybuilding",
    "crossfit",
    "running",
    "jogging",
    "walking",
    "cycling",
    "swimming",
    "yoga",
    "pilates",
    "stretching",
    "flexibility",
    "endurance",
    "calisthenics",
    "HIIT",
    "Tabata",
    "Zumba",
    "kickboxing",
    "martial arts",
    "dance",
    "paddleboarding",
    "surfing",
    "skiing",
    "snowboarding",
    "hiking",
    "mountaineering",
    "rock climbing",
    "bouldering",
    "trail running",
    "nutrition",
    "diet",
    "healthy eating",
    "macros",
    "micronutrients",
    "macros",
    "protein",
    "carbohydrates",
    "fats",
    "vitamins",
    "minerals",
    "hydration",
    "water intake",
    "supplements",
    "pre-workout",
    "post-workout",
    "recovery",
    "rest",
    "sleep",
    "stress management",
    "mental health",
    "motivation",
    "goal setting",
    "progress tracking",
    "personal trainer",
    "fitness coach",
    "group fitness",
    "exercise class",
    "fitness equipment",
    "gym membership",
    "home workout",
    "outdoor workout",
    "sports",
    "team sports",
    "individual sports",
    "fitness tracker",
    "wearable tech",
    "heart rate monitor",
    "calorie tracking",
    "meal planning",
    "meal prep",
    "active lifestyle",
    "functional training",
    "balance training",
    "agility training",
    "rehabilitation",
    "injury prevention",
    "warm-up",
    "cool-down",
    "body composition",
    "flexibility",
    "mobility",
    "recovery tools",
    "foam rolling",
    "massage",
    "sauna",
    "cold therapy",
    "community fitness",
    "fitness event",
    "fitness challenge",
    "virtual fitness",
    "online workout",
    "home gym setup",
  ];

  return fitnessKeywords.some((keyword) =>
    message.toLowerCase().includes(keyword)
  );
}

module.exports = { queryChatbot };
