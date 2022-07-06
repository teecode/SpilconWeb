import React, { Fragment, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { apiEndpoints } from "../api/apiEndpoints";
import { getData, postData } from "../api/axiosApiMethods";
import { errorHandler } from "../helpers/errorHandler";

export default function Attendance() {
  const [loading, setLoading] = useState(false);
  const [attendees, setAttendees] = useState(false);
  const [state, setState] = useState({
    name: "",
    code: "",
  });
 
  const handleQueryChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });

    const fetchAttendees = async(search) =>{
      const getattendees =  await getData(`${apiEndpoints.queryattendees}${search}`);
      console.log(getattendees);
      setAttendees(getattendees);
    }
    
    fetchAttendees(value).catch(console.error);
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  //useEffect(() =>{
    
    // const  fetchStatistics = async () => {
    //   const regToday =  await getData(apiEndpoints.registrationtoday);
    //   setTrt(regToday.count);
    // };

    // const  fetchAttendance = async () => {
    //   const attToday =  await getData(apiEndpoints.attendancetoday);
    //   setTat(attToday.count);
    // };

    // fetchStatistics().catch(console.error);
    // fetchAttendance().catch(console.error);
 // }, []);

  const onSubmit = async (code) => {
    const reqBody ={
      attendeeid : code
    };
    try {
      const res = await postData(apiEndpoints.markattendance, reqBody);
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
            Attendee Code
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            name="code"
            type="text"
            placeholder="Your Attendee Code"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="md:w-1/2 md:ml-1 md:mb-0 mb-4">
          <label className="block text-grey-darker text-sm font-bold mb-2">
            Attendee Name
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            type="text"
            placeholder="Attendee Name"
            name="name"
            onChange={(e) => handleQueryChange(e)}
          />
        </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between mt-8">
        <button
          className="hover:bg-cyan-700 bg-cyan-500 text-white font-bold py-2 px-4 rounded-md"
          type="submit"
          onClick={()=> onSubmit(state.code)}
          disabled={loading}
        >
          Register{loading && "ing....."}
        </button>
        </div>
     
     

      <br/>
      <br />
      <div className="flex flex-col md:flex-row mb:mb-8">
      <table class="table-auto">
          <thead>
            <tr>
              <th>Name</th>
              <th>Code</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              attendees && attendees.map((item, i) => (
                <tr key= {i}>
                  <td>
                    {item.firstName} {item.lastName}
                  </td>
                  <td> {item.code}</td>
                  <td><button
                      className="hover:bg-cyan-700 bg-cyan-500 text-white font-bold py-2 px-4 rounded-md"
                      type="submit"
                      onClick={()=>onSubmit(item.code)}
                      disabled={loading}
                    >
                      Submit{loading && "ing....."}
                    </button> 
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </Fragment>
  );
}
