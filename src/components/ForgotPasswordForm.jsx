import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleResetPassword = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="min-h-screen  flex justify-center items-center">
      <div className="max-w-md w-full mx-auto">
        <div className="text-center font-medium text-xl mb-6 text-white">
          Forgot password
        </div>
        <h4 className="text-white">Please enter you signin email here. We will send you an email to recover your password</h4>
        <br/>
        <form onSubmit={handleResetPassword}>
          <div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-white font-medium mb-2"
              >
                Email
                <i className="text-red-600">*</i>
              </label>
            </div>

            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <button
            type="submit"
            className="bg-orange-900 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
