import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextInput from "../components/TextInput.component";
import { useForm } from "react-hook-form";
import { errorHandler } from "../utils/errorHandler";
import Swal from "sweetalert2";
import ButtonLoader from "../components/ButtonLoader.component";

const ForgotPassword = () => {
  const { register, handleSubmit, errors } = useForm();
  const [loading, setLoading] = useState(false);
  const onSubmit = handleSubmit(async () => {
    try {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        Swal.fire(
          "Password reset",
          "Your password has been reset. Please check your email to change to a new password.",
          "success"
        );
      }, 2000);
    } catch (error) {
      setLoading(false);
      Swal.fire("Error", errorHandler(error), "error");
    }
  });
  return (
    <form onSubmit={onSubmit}>
      <h1 className="h3 mb-4 mt-5 font-weight-bold text-center">
        Forgot Password
      </h1>
      <TextInput
        placeholder="Enter Email Address"
        type="email"
        name="email"
        autoFocus
        reference={register({ required: true })}
        errors={errors.email}
        margin="my-4"
      />
      <button
        className="btn btn-md btn-secondary btn-block"
        type="submit"
        disabled={loading}
      >
        {loading ? <ButtonLoader /> : "Reset Password"}
      </button>
      <h6 className="text-center mt-5">
        <Link to="/">Login </Link>
      </h6>
    </form>
  );
};

export default ForgotPassword;
