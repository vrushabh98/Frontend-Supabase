import React, { useState } from "react";
import InputField from "./InputField";
import { useFormik } from "formik";
import * as Yup from "yup";
import swal from "sweetalert";
import { supabase } from "../../service";

function CustomForm({ title, value, type, routeName }) {
  const [loader, setLoader] = useState(false);

  const formSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter valid email")
      .required("This field is required."),
    first_name: Yup.string().required("This field is required."),
    last_name: Yup.string().required("This field is required."),
  });

  const fomik = useFormik({
    initialValues: {
      first_name: value ? value.first_name : "",
      last_name: value ? value.last_name : "",
      email: value ? value.email : "",
    },
    validationSchema: formSchema,
    onSubmit: (value) => {
      console.log(value);
    },
  });

  return (
    <div className="p-2 space-y-4">
      <h2 className="text-center font-semibold leading-5 tracking-tight">
        {title}
      </h2>
      <div className="grid grid-cols-2 gap-2">
        <div className="">
          <InputField
            type="text"
            id="first_name"
            name="first_name"
            required={true}
            label="First Name"
            placeholder="Enter First Name"
            onChange={fomik.handleChange}
            value={fomik.values.first_name}
            onBlur={fomik.handleBlur}
            error={
              Boolean(fomik.errors.first_name && fomik.touched.first_name)
                ? fomik.errors.first_name
                : ""
            }
          />
        </div>
        <div className="">
          <InputField
            type="text"
            id="last_name"
            name="last_name"
            required={true}
            label="Last Name"
            placeholder="Enter Last Name"
            onChange={fomik.handleChange}
            value={fomik.values.last_name}
            onBlur={fomik.handleBlur}
            error={
              Boolean(fomik.errors.last_name && fomik.touched.last_name)
                ? fomik.errors.last_name
                : ""
            }
          />
        </div>
        <div className="col-span-2">
          <InputField
            type="email"
            id="email"
            required={true}
            label="Email"
            placeholder="Enter User Email"
            onChange={fomik.handleChange}
            value={fomik.values.email}
            onBlur={fomik.handleBlur}
            error={
              Boolean(fomik.errors.email && fomik.touched.email)
                ? fomik.errors.email
                : ""
            }
          />
        </div>
        <div className="">
          <button
            className={`w-full p-2 rounded bg-slate-50 border border-slate-500 text-slate-500 font-medium`}
            onClick={() => {
              swal.close();
            }}
          >
            Cancel
          </button>
        </div>
        <div className="">
          <button
            className={`w-full p-2 rounded ${
              loader
                ? "bg-indigo-400 hover:bg-indigo-600 pointer-events-none"
                : "bg-indigo-500 hover:bg-indigo-600"
            }  text-slate-50 font-medium`}
            onClick={() => {
              fomik.handleSubmit();
            }}
          >
            {loader ? "loading" : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CustomForm;
