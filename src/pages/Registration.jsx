import React, { Fragment, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { apiEndpoints } from "../api/apiEndpoints";
import { getData, postData } from "../api/axiosApiMethods";
import { errorHandler } from "../helpers/errorHandler";

export default function Registration() {
  const [loading, setLoading] = useState(false);
  const [trt, setTrt] = useState(false);
  const [tat, setTat] = useState(false);

  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    gender: "",
    email: "",
    isGuest: false
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  useEffect(() =>{
    
    const  fetchStatistics = async () => {
      const regToday =  await getData(apiEndpoints.registrationtoday);
      setTrt(regToday.count);
    };

    const  fetchAttendance = async () => {
      const attToday =  await getData(apiEndpoints.attendancetoday);
      setTat(attToday.count);
    };

    fetchStatistics().catch(console.error);
    fetchAttendance().catch(console.error);
  }, []);

  const onSubmit = async () => {
    const createdBy = localStorage.getItem("id");
    setLoading(true);
    const { isGuest } = state;
    const reqBody = {
      ...state,
      isGuest:
        isGuest === "true" ? true : isGuest === "false" ? false : isGuest,
      createdBy: Number(createdBy),
    };

    try {
      const res = await postData(apiEndpoints.registerUrl, reqBody);
      setLoading(false);
      toast.success(res.message);
    } catch (error) {
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
            value={state.isGuest}
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
          disabled={loading}
        >
          Register{loading && "ing....."}
        </button>
      </div>

      <br/>
      <br />
      <div className="flex flex-col md:flex-row mb:mb-4">
        <div className="md:w-1/2 md:mr-1 md:mb-0 mb-4">
          <label className="block text-grey-darker text-sm font-bold mb-2">
            Total Registered Today
          </label>
          {trt &&<label name= "trt" className="block text-grey-darker text-sm font-bold mb-2">
            {trt}
          </label>}
        </div>
        <div className="md:w-1/2 md:mr-1 md:mb-0 mb-4">
          <label className="block text-grey-darker text-sm font-bold mb-2">
            Total Attendance Today
          </label>
          {tat &&<label name= "tat" className="block text-grey-darker text-sm font-bold mb-2">
            {tat}
          </label>}
        </div>
      </div>
    </Fragment>
  );
}
