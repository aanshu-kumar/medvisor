import ChatBot from "./Components/ChatBot";
import About from "./Components/About";
import LandingPage from "./Components/LandingPage";
import Header from "./Components/Header";
import Login from "./Components/Login";
// import SignupForm from "./Components/Signup";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContactUS from "./Components/ContactUS";
import { useState } from "react";

function App() {
  const [loggedInUser, setLoggedInUser] = useState(false);
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <LandingPage />
        </>
      ),
    },
    {
      path: "/Login",
      element: (
        <>
          <Header />{" "}
          <Login
            setLoggedInUser={setLoggedInUser}
            loggedInUser={loggedInUser}
          />
        </>
      ),
    },
    {
      path: "/About",
      element: (
        <>
          <About />
        </>
      ),
    },
    {
      path: "/chatbot",
      element: (
        <>
          <Header /> <ChatBot loggedInUser={loggedInUser} />
        </>
      ),
    },
    {
      path: "/ContactUs",
      element: (
        <>
          <Header /> <ContactUS />
        </>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default App;
