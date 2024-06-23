/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform form submission logic here
    try {
      const response = await fetch(
        "https://api.render.com/deploy/srv-cprrp1aj1k6c738d6bsg?key=Lenhdazw7r4/api/user/signin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch AI response");
      }

      const responseData = await response.json();
      const serializedData = JSON.stringify(responseData.authToken);

      const storedData = localStorage.getItem("auth-token");

      // Check if the data exists in local storage
      if (!storedData) {
        localStorage.setItem("auth-token", serializedData);
      }

      setFormData({
        email: "",
        password: "",
      });
      navigate("/chatbot");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="">
      <div className="min-h-screen flex justify-center items-center bg-gray-200 border-r-8">
        <div className="max-w-screen-lg flex flex-col md:flex-row justify-center">
          <div className="w-full md:w-1/2 p-8">
            <h2 className="text-3xl font-bold mb-4 text-slate-950">
              Login To Medvisor
            </h2>
            <p className="text-gray-600">
              <br></br>
              <br></br>
              Welcome! Again Please Login with your Credentials to use the
              assistent. And have personalized Health Insights
            </p>
          </div>
          <div className="w-full md:w-1/2 bg-white shadow-md rounded p-8 border-green-700 border-2">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>

              <div className="flex items-center justify-evenly">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Login
                </button>
                <Link to="/Signup">
                  {" "}
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Signup
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
