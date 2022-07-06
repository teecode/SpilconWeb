import { useState } from "react";
import backgroundImage from "../images/image.jpg";
import { apiEndpoints } from "../api/apiEndpoints";
import { postDataWithoutToken } from "../api/axiosApiMethods";
import { BASE_URL } from "../appConstants";
import { toast } from "react-toastify";
import { errorHandler } from "../helpers/errorHandler";
import ROUTES from "../helpers/Routes";

function LandingPage() {
  const [loading, setLoading] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    setLoading(true);
    const reqBody = {
      username: username,
      password,
    };

    try {
      const res = await postDataWithoutToken(
        apiEndpoints.loginUrl,
        reqBody,
        BASE_URL
      );
      window.location.replace(ROUTES.REGISTRATION);
      localStorage.setItem("token", res.token);
      localStorage.setItem("id", res.id);
      toast.success("Successfully Logged In");
    } catch (error) {
      setLoading(false);
      toast.error(errorHandler(error));
    }
  };

  return (
    <div className="App">
      <div className="flex items-center justify-center min-h-screen bg-[#EA780B]">
        {/* <!-- Card Container --> */}
        <div className="relative flex flex-col m-6 space-y-10 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0">
          {/* <!-- Left Side --> */}
          <div className="p-6 md:p-20">
            {/* <!-- Top Content --> */}
            <h2 className="font-mono mb-5 text-4xl font-bold">Log In</h2>
            <p className="max-w-sm mb-12 font-sans font-light text-gray-600">
              Log in with your email
            </p>
            <form className="" onSubmit={(e) => onSubmit(e)}>
              <input
                className="w-full p-3 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light focus:border-orange-300 focus:outline-none "
                type="email"
                name="username"
                placeholder="Enter your username"
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                className="w-full mt-5 p-3 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light focus:border-orange-300 focus:outline-none "
                placeholder="Enter your password"
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {/* <!-- Middle Content --> */}
              <div className="flex flex-col items-center justify-between mt-6 space-y-6 md:flex-row md:space-y-0">
                <button
                  className="w-full md:w-auto flex justify-center items-center p-3 space-x-4 font-sans font-bold text-white rounded-md shadow-sm px-9 bg-cyan-700 shadow-cyan-100 hover:bg-opacity-90 hover:shadow-lg border transition hover:-translate-y-0.5 duration-150"
                  type="submit"
                  value="submit"
                  disabled={loading || !username || !password}
                  onClick={onSubmit}
                >
                  Log{loading && "ing"} In {loading && " ....."}
                </button>
              </div>
            </form>
            {/* <!-- Border --> */}
            <div className="mt-12 border-b border-b-gray-300"></div>
          </div>

          {/* <!-- Right Side --> */}
          <img src={backgroundImage} alt="" className="w-[480px] " />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
