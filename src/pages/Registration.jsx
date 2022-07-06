import React, { Fragment, useState } from "react";
import { toast } from "react-toastify";
import { apiEndpoints } from "../api/apiEndpoints";
import { postData } from "../api/axiosApiMethods";
import { errorHandler } from "../helpers/errorHandler";

export default function Registration() {
  const [loading, setLoading] = useState(false);

  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    gender: "",
    email: "",
    isGuest: true,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const onSubmit = async () => {
    const createdBy = localStorage.getItem("id");
    console.log("first", createdBy);
    setLoading(true);
    const reqBody = {
      ...state,
      createdBy: Number(createdBy),
    };

    try {
      const res = await postData(apiEndpoints.registerUrl, reqBody);
      // setUserInfo(res.data);
      console.log(res);
      toast.success(res.message);
    } catch (error) {
      console.log("here", error);
      setLoading(false);
      toast.error(errorHandler(error));
    }
  };
  return (
    <Fragment>
      <div className="flex flex-col md:flex-row mb:mb-4">
        <div className="md:w-1/2 md:mr-1 md:mb-0 mb-4">
          <label className="block text-grey-darker text-sm font-bold mb-2">
            First Name
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            name="firstName"
            type="text"
            placeholder="Your first name"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="md:w-1/2 md:ml-1 md:mb-0 mb-4">
          <label className="block text-grey-darker text-sm font-bold mb-2">
            Last Name
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            type="text"
            placeholder="Your last name"
            name="lastName"
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row mb-4">
        <div className="md:w-1/2 md:mr-1 md:mb-0 mb-4">
          {" "}
          <label className="block text-grey-darker text-sm font-bold mb-2">
            Gender
          </label>
          <select
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            type="text"
            name="gender"
            placeholder="Gender"
            onChange={(e) => handleChange(e)}
          >
            <option value="">Select Gender</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
          </select>
        </div>

        <div className="md:w-1/2 md:ml-1 md:mb-0 mb-4">
          <label className="block text-grey-darker text-sm font-bold mb-2">
            Phone Number
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            id="phoneNumber"
            name="phoneNumber"
            type="number"
            placeholder="Your email address"
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row mb-4">
        <div className="md:w-1/2 md:mr-1 md:mb-0 mb-4">
          <label className="block text-grey-darker text-sm font-bold mb-2">
            Email Address
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            type="email"
            name="email"
            placeholder="Your email address"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="md:w-1/2 md:ml-1 md:mb-0 mb-4">
          {" "}
          <label className="block text-grey-darker text-sm font-bold mb-2">
            Guest
          </label>
          <select
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            type="text"
            name="isGuest"
            onChange={(e) => handleChange(e)}
          >
            <option value={true}>True</option>
            <option value={false}>False</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between mt-8">
        <button
          className="hover:bg-cyan-700 bg-cyan-500 text-white font-bold py-2 px-4 rounded-md"
          type="submit"
          onClick={onSubmit}
        >
          Register
        </button>
      </div>
    </Fragment>
  );
}
