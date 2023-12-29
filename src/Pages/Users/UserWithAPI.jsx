import React, { useState, useEffect } from "react";
import Header from "../Layout/Header";
import Sidebar from "../Layout/Sidebar";
import InputField from "../../Component/Form-Component/InputField";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import { supabase } from "../../service";

function UserWithAPI() {
  const [showForm, setShowForm] = useState(false);
  const [updateForm, setUpdateForm] = useState(false);
  const [loader, setLoader] = useState(false);
  const [update, setUpdate] = useState(1);
  const [data, setData] = useState([]);

  const formSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter valid email")
      .required("This field is required."),
    first_name: Yup.string().required("This field is required."),
    last_name: Yup.string().required("This field is required."),
  });

  const fomik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
    },
    validationSchema: formSchema,
    onSubmit: (value) => {
      if (showForm) {
        insertData(value);
      } else {
        updateData(value);
      }
    },
  });

  const fetchData = async () => {
    try {
      const { data, error } = await supabase.from("users").select("*");
      if (error) {
        throw error;
      }
      setData(data);
    } catch (error) {
      console.log("error ---", error);
    }
  };

  const insertData = async (payload) => {
    setLoader(true);
    try {
      const { data, error } = await supabase.from("users").insert([
        {
          first_name: payload.first_name,
          last_name: payload.last_name,
          email: payload.email,
        },
      ]);
      if (error) {
        throw error;
      }
      setUpdate(update + 1);
      fomik.resetForm();
      setLoader(false);
      setShowForm(false);
    } catch (error) {
      console.log("error --", error);
      setLoader(false);
    }
  };

  const deleteData = async (id) => {
    try {
      const { error } = await supabase.from("users").delete().eq("id", id);
      if (error) {
        throw error;
      }
      setUpdate(update + 1);
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const updateData = async (payload) => {
    setLoader(true)
    try {
      const { data, error } = await supabase
        .from("users")
        .update(payload)
        .eq("id", updateForm);

      if (error) {
        console.error("Error updating data:", error.message);
      }

      setLoader(false);
      setUpdateForm(false);
      setUpdate(update + 1);
      fomik.resetForm();
    } catch (error) {
      console.log("error --", error);
      setLoader(false)
    }
  };

  useEffect(() => {
    fetchData();
  }, [update]);

  return (
    <div className="w-screen h-screen flex overflow-x-hidden">
      <Sidebar />
      <main className="w-[85%] overflow-y-auto">
        <Header title="Users with API" />
        <div
          className="h-screen p-4 gap-2 space-y-8"
          style={{ height: "calc(100vh - 80px)" }}
        >
          <div className="flex justify-end items-center">
            <button
              className={`w-[10%] p-2 rounded ${
                showForm
                  ? "bg-indigo-400 text-white hover:bg-indigo-500 pointer-events-none"
                  : "bg-indigo-500 text-white hover:bg-indigo-600"
              } `}
              onClick={() => setShowForm(true)}
            >
              Add User
            </button>
          </div>
          {showForm || updateForm ? (
            <div className="flex justify-center items-center">
              <div class="w-1/2 h-3/4 space-y-4">
                <h2 className="text-xl font-semibold leading-5 tracking-tight">
                  {updateForm ? "Update User" : "Add User"}
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
                        Boolean(
                          fomik.errors.first_name && fomik.touched.first_name
                        )
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
                        Boolean(
                          fomik.errors.last_name && fomik.touched.last_name
                        )
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
                        setShowForm(false);
                        setUpdateForm(false);
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
                      {loader ? "loading..." : "Submit"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div class="relative flex flex-col w-full h-3/4 overflow-x-hidden overflow-y-auto text-gray-700 shadow-md rounded-xl bg-clip-border">
              <table class="w-full text-left table-auto min-w-max">
                <thead>
                  <tr>
                    <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                      <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                        First Name
                      </p>
                    </th>
                    <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                      <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                        Last Name
                      </p>
                    </th>
                    <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                      <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                        Email
                      </p>
                    </th>
                    <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                      <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70"></p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.length > 0 &&
                    data.map((ele, index) => (
                      <tr>
                        <td class="p-4 border-b border-blue-gray-50">
                          <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                            {ele.first_name}
                          </p>
                        </td>
                        <td class="p-4 border-b border-blue-gray-50">
                          <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                            {ele.last_name}
                          </p>
                        </td>
                        <td class="p-4 border-b border-blue-gray-50">
                          <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                            {ele.email}
                          </p>
                        </td>
                        <td class="p-4 border-b border-blue-gray-50 flex items-center space-x-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="16"
                            width="16"
                            viewBox="0 0 512 512"
                            className="fill-current cursor-pointer"
                            onClick={() => {
                              fomik.setFieldValue("first_name", ele.first_name);
                              fomik.setFieldValue("last_name", ele.last_name);
                              fomik.setFieldValue("email", ele.email);
                              setUpdateForm(ele.id);
                            }}
                          >
                            <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="16"
                            width="14"
                            viewBox="0 0 448 512"
                            className="fill-current cursor-pointer text-rose-500"
                            onClick={() => deleteData(ele.id)}
                          >
                            <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                          </svg>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default UserWithAPI;
