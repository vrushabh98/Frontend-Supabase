import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { supabase } from "../../service";

import InputField from "../../Component/Form-Component/InputField";
import PasswordField from "../../Component/Form-Component/PasswordField";
import Design from "../../assets/design.png";

function Login() {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);

  const loginValidationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter valid email")
      .required("This field is required."),
    password: Yup.string().required("This field is required."),
  });

  const loginUser = async (payload_value) => {
    setLoader(true);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: payload_value.email,
        password: payload_value.password,
      });

      if (error) {
        throw error;
      }

      sessionStorage.setItem('user', JSON.stringify(data))
      loginFormik.resetForm();
      setLoader(false);
      navigate("/");
    } catch (error) {
      setLoader(false);
      console.log(error);
    }
  };

  const loginFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: (value) => {
      loginUser(value);
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
              To keep connected with us please sign in with your personal
              information by email address and password.
            </p>
          </div>
          <div className="w-full px-10">
            <p className="text-slate-50 font-normal text-sm">
              Don't have an account?{" "}
              <span
                className="cursor-pointer underline font-semibold"
                onClick={() => navigate("/signup")}
              >
                Create your account
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="w-[40%] p-4 flex justify-center items-center">
        <div className="w-3/4 space-y-4">
          <h2 className="text-slate-600 text-3xl leading-5 tracking-wide font-semibold py-2">
            Sign In
          </h2>

          <InputField
            type="email"
            id="email"
            required={true}
            label="Email"
            placeholder="Enter User Email"
            onChange={loginFormik.handleChange}
            value={loginFormik.values.email}
            onBlur={loginFormik.handleBlur}
            error={
              Boolean(loginFormik.errors.email && loginFormik.touched.email)
                ? loginFormik.errors.email
                : ""
            }
          />
          <PasswordField
            id="Password"
            required={true}
            label="Password"
            placeholder="Enter Password"
            name="password"
            onChange={loginFormik.handleChange}
            value={loginFormik.values.password}
            onBlur={loginFormik.handleBlur}
            error={
              Boolean(
                loginFormik.errors.password && loginFormik.touched.password
              )
                ? loginFormik.errors.password
                : ""
            }
          />

          <button
            className={`w-full btn-lg ${
              loader
                ? "bg-indigo-400 hover:bg-indigo-500 pointer-events-none"
                : "bg-indigo-500 hover:bg-indigo-600"
            }  text-slate-50 font-medium`}
            onClick={() => {
              loginFormik.handleSubmit();
            }}
          >
            {loader ? "Loading..." : "Sign In"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
