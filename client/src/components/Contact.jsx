import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Contact = () => {
  const [data,setData] = useState()
  const [loading, setLoading] = useState(false)

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(10, "Must be 10 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(10, "Must be 10 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid Email").required("Required"),
      message: Yup.string().max(250, "Message required").required("Required"),
    }),
    onSubmit: (values,onSubmit) => {
     setLoading(true)
        axios
          .post("/mail",values)
          .then((res) =>{
            onSubmit.resetForm({values:''})
            setLoading(false)
            setData(res.data)})

          .catch((err) => console.log(err));
      
    },
  });

  return (
    <section id="contact" className="px-0 md:px-24">
      <div className="w-full ">
        <p className="text-center mb-20 text-4xl font-bodyFont font-bold">
          Get in touch
        </p>
        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col">
            <div className="grid grid-cols-2 px-0 md:px-48 mb-10">
              <div className="flex flex-col justify-center items-end  px-4 md:px-12">
                <div className="w-full h-[80px]  ">
                  <label htmlFor="FirstName" className="text-sm font-bodyTitle text-gray-400">First name</label>
                  <input
                    onChange={formik.handleChange}
                    type="text"
                    id="firstName"
                    name="firstName"
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                    className="text-sm py-2 outline-none font-bodyTitle text-gray-200 w-full bg-black   border-b border-gray-400"
                  />
                  {formik.touched.firstName && formik.errors.firstName ? (
                    <p className="text-[12px] text-red-500">
                      {formik.errors.firstName}
                    </p>
                  ) : null}
                </div>
                <div className="w-full mb-5 h-[50px]">
                <label htmlFor="LastName" className="text-sm font-bodyTitle text-gray-400">Last name</label>

                  <input
                    onChange={formik.handleChange}
                    type="text"
                    id="lastName"
                    name="lastName"
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                    className="text-sm py-2 outline-none font-bodyTitle text-gray-200 w-full bg-black border-b border-gray-400 "
                  />
                  {formik.touched.lastName && formik.errors.lastName ? (
                    <p className="text-[12px] text-red-500">
                      {formik.errors.lastName}
                    </p>
                  ) : null}
                </div>
              </div>
              <div className="flex flex-col justify-center items-start px-4 md:px-12">
                <div className="w-full  h-[80px]">
                <label htmlFor="email" className="text-sm font-bodyTitle text-gray-400">Email</label>

                  <input
                  
                    type="text"
                    id="email"
                    name="email"
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    className="text-sm py-2 outline-none font-bodyTitle text-gray-200 w-full  bg-black border-b border-gray-400"
         
                    onChange={formik.handleChange}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <p className="text-[12px] text-red-500">
                      {formik.errors.email}
                    </p>
                  ) : null}
                </div>
                <div className="w-full mb-5 h-[50px]">
                <label htmlFor="phone" className="text-sm font-bodyTitle text-gray-400">Phone number</label>

                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                    className="text-sm py-2 outline-none font-bodyTitle text-gray-200 w-full bg-black border-b border-gray-400"
                    onChange={formik.handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="px-4 md:px-60">
              <textarea
                id="message"
                name="message"
                onBlur={formik.handleBlur}
                value={formik.values.message}
                className=" pl-1 h-[70px] text-sm py-2 outline-none font-bodyTitle text-gray-200 w-full bg-black   border border-gray-400"
                placeholder="Message"
                onChange={formik.handleChange}
              />
              {formik.touched.message && formik.errors.message ? (
                <p className="text-[12px] text-red-500">
                  {formik.errors.message}
                </p>
              ) : null}
            </div>
          {data ? <h6 className="text-[12px] text-gray-300 px-4 text-center">{data}</h6> : ''}

            <div className="px-6 mt-5 flex items-center justify-center mb-32 md:px-60">
              <button
                type="submit"
                disabled={loading}
                className={`font-[400] text-black rounded-sm font-titleFont bg-[#27AE60] px-4 py-2`}
              >
                Email me
              </button>
            </div>

          </div>

        </form>
      </div>
      
    </section>
  );
};

export default Contact;
