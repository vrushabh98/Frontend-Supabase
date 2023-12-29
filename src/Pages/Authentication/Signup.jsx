import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { supabase } from "../../service";

import InputField from "../../Component/Form-Component/InputField";
import PasswordField from "../../Component/Form-Component/PasswordField";
import Design from "../../assets/design.png";

function Signup() {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);

  const signupValidationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter valid email")
      .required("This field is required."),
    password: Yup.string().required("This field is required."),
    first_name: Yup.string().required("This field is required."),
    last_name: Yup.string().required("This field is required."),
  });

  const signUpUser = async (payload) => {
    setLoader(true)
    try {
      const { user, error } = await supabase.auth.signUp({
        email: payload.email,
        password: payload.password,
        options: {
          data: {
            first_name: payload.first_name,
            last_name: payload.last_name
          }
        }
      });

      if (error) {
        throw error;
      }

      signupFormik.resetForm()
      alert('Registration successful! Please check your email for verification.');
      setLoader(false)
    } catch (error) {
      setLoader(false)
      console.log(error)
    }
    
  };

  const signupFormik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    },
    validationSchema: signupValidationSchema,
    onSubmit: (value) => {
      signUpUser(value);
    },
  });

  return (
    <div className="w-screen h-screen flex">
      <div
        className="w-1/2 bg-cover bg-center p-4 flex justify-center items-center relative"
        style={{ backgroundImage: `url(${Design})` }}
      >
        <div className="w-[70%] p-4 space-y-4">
          <h1 className="text-slate-50 font-bold text-3xl leading-5 tracking-wide">
            Welcome Back!
          </h1>
          <div className="p-6">
            <p className="text-slate-50 text-sm italic font-light">
              Initiate your project journey effortlessly with a quick sign-up
              process. Get started now!
            </p>
          </div>
          <div className="w-full px-10">
            <p className="text-slate-50 font-normal text-sm">
              Already have an account? &nbsp;
              <span
                className="cursor-pointer underline font-semibold"
                onClick={() => navigate("/signin")}
              >
                Sign In
              </span>
              &nbsp; to continue your journey.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[40%] p-4 flex justify-center items-center">
        <div className="w-3/4 space-y-4">
          <h2 className="text-slate-600 text-3xl leading-5 tracking-wide font-semibold py-2">
            Sign Up
          </h2>

          <div className="flex space-x-4">
                <InputField
                  type="text"
                  id="first_name"
                  name="first_name"
                  required={true}
                  label="First Name"
                  placeholder="Enter First Name"
                  onChange={signupFormik.handleChange}
                  value={signupFormik.values.first_name}
                  onBlur={signupFormik.handleBlur}
                  error={
                    Boolean(
                      signupFormik.errors.first_name &&
                        signupFormik.touched.first_name
                    )
                      ? signupFormik.errors.first_name
                      : ""
                  }
                />
                <InputField
                  type="text"
                  id="last_name"
                  name="last_name"
                  required={true}
                  label="Last Name"
                  placeholder="Enter Last Name"
                  onChange={signupFormik.handleChange}
                  value={signupFormik.values.last_name}
                  onBlur={signupFormik.handleBlur}
                  error={
                    Boolean(
                      signupFormik.touched.last_name &&
                        signupFormik.errors.last_name
                    )
                      ? signupFormik.errors.last_name
                      : ""
                  }
                />
              </div>

          <InputField
            type="email"
            id="email"
            name='email'
            required={true}
            label="Email"
            placeholder="Enter User Email"
            onChange={signupFormik.handleChange}
            value={signupFormik.values.email}
            onBlur={signupFormik.handleBlur}
            error={
              Boolean(signupFormik.errors.email && signupFormik.touched.email)
                ? signupFormik.errors.email
                : ""
            }
          />
          <PasswordField
            id="Password"
            required={true}
            label="Password"
            name='password'
            placeholder="Enter Password"
            onChange={signupFormik.handleChange}
            value={signupFormik.values.password}
            onBlur={signupFormik.handleBlur}
            error={
              Boolean(
                signupFormik.errors.password && signupFormik.touched.password
              )
                ? signupFormik.errors.password
                : ""
            }
          />

          <button
            className={`w-full btn-lg ${loader ? 'bg-indigo-400 hover:bg-indigo-600 pointer-events-none' :'bg-indigo-500 hover:bg-indigo-600'}  text-slate-50 font-medium`}
            onClick={() => {
              signupFormik.handleSubmit();
            }}
          >
            {loader ? 'loading' : 'Sign Up'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
