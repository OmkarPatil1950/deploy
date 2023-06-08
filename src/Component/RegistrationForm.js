import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const [password, setPassword] = useState("");
  const [mobile_num, setMobileNum] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email_id, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [username, setUsername] = useState("");
  const [errors, setErrors] = useState({});
  const navigate =useNavigate();
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleMobileChange = (event) => {
    setMobileNum(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const validateForm = () => {
    const errors = {};

    // Validate first name
    if (!first_name.trim()) {
      errors.firstName = "First name is required";
    }

    // Validate last name
    if (!last_name.trim()) {
      errors.lastName = "Last name is required";
    }

    // Validate username
    if (!username.trim()) {
      errors.username = "Username is required";
    }

    // Validate email
    if (!email_id.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email_id)) {
      errors.email = "Invalid email format";
    }

    // Validate password
    if (!password.trim()) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password should be at least 6 characters long";
    }

    // Validate mobile number
    if (!mobile_num.trim()) {
      errors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(mobile_num)) {
      errors.mobile = "Mobile number should be a 10-digit number";
    }

    // Validate address
    if (!address.trim()) {
      errors.address = "Address is required";
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (validateForm()) {
      try {
        const response = await fetch("https://server3-route-omkar-07-dev.apps.sandbox-m4.g2pi.p1.openshiftapps.com/api/customer", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            first_name,
            last_name,
            username,
            mobile_num,
            address,
            email_id,
            password,
          }),
        });
  
        if (response.ok) {
          alert("Successfully registered!");
          navigate('/')
          
        } else {
          alert("The user already exists");
        }
      } catch (error) {
        console.log("Error:", error);
        alert("The user already exists or enter correct values");
      }
    }
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-3xl text-center font-bold mb-4">Create Account</h2>
      <form onSubmit={handleSubmit} className="text-center">
        <div className="mb-4">
          <input
            type="text"
            id="first_name"
            className={`w-50% py-2 px-3 border ${
              errors.firstName ? "border-red-500" : "border-gray-300"
            } rounded-lg`}
            placeholder="Enter your first name*"
            value={first_name}
            onChange={handleFirstNameChange}
            required
          />
          {errors.firstName && <p className="text-red-500">{errors.firstName}</p>}
        </div>

        <div className="mb-4">
          <input
            type="text"
            id="last_name"
            className={`w-50% py-2 px-3 border ${
              errors.lastName ? "border-red-500" : "border-gray-300"
            } rounded-lg`}
            placeholder="Enter your last name*"
            value={last_name}
            onChange={handleLastNameChange}
            required
          />
          {errors.lastName && <p className="text-red-500">{errors.lastName}</p>}
        </div>

        <div className="mb-4">
          <input
            type="text"
            id="username"
            className={`w-50% py-2 px-3 border ${
              errors.username ? "border-red-500" : "border-gray-300"
            } rounded-lg`}
            placeholder="Enter your user name*"
            value={username}
            onChange={handleUsernameChange}
            required
          />
          {errors.username && <p className="text-red-500">{errors.username}</p>}
        </div>

        <div className="mb-4">
          <input
            type="email"
            id="email_id"
            className={`w-50% py-2 px-3 border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded-lg`}
            placeholder="Enter your email*"
            value={email_id}
            onChange={handleEmailChange}
            required
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>

        <div className="mb-4">
          <input
            type="password"
            id="password"
            className={`w-50% py-2 px-3 border ${
              errors.password ? "border-red-500" : "border-gray-300"
            } rounded-lg`}
            placeholder="Enter your password*"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          {errors.password && <p className="text-red-500">{errors.password}</p>}
        </div>

        <div className="mb-4">
          <input
            type="text"
            id="mobile"
            className={`w-50% py-2 px-3 border ${
              errors.mobile ? "border-red-500" : "border-gray-300"
            } rounded-lg`}
            placeholder="Enter your mobile number*"
            value={mobile_num}
            onChange={handleMobileChange}
            required
          />
          {errors.mobile && <p className="text-red-500">{errors.mobile}</p>}
        </div>

        <div className="mb-4">
          <input
            type="text"
            id="address"
            className={`w-50% py-2 px-3 border ${
              errors.address ? "border-red-500" : "border-gray-300"
            } rounded-lg`}
            placeholder="Enter your address*"
            value={address}
            onChange={handleAddressChange}
            required
          />
          {errors.address && <p className="text-red-500">{errors.address}</p>}
        </div>

        <div className="mb-4">
          <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded-lg">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
