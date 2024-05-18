import ChatBot from "./Components/ChatBot";

import About from "./Components/About";

import LandingPage from "./Components/LandingPage";

import Login from "./Components/Login";

import SignupForm from "./Components/Signup";

function App() {
  return (
    <>
      <LandingPage></LandingPage>

      <ChatBot></ChatBot>

      <About></About>

      <SignupForm></SignupForm>
      <Login></Login>
    </>
  );
}
export default App;
