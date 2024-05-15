import React, { useState } from "react";
import axios from "axios";
import Joi from "joi";

import { toast } from "react-hot-toast";



export default function Career() {
  const [open, setOpen] = React.useState(false);
  const [resultMsg, setResultMsg] = useState("");

  const [joiErrors, setjoiErrors] = useState([]);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    department: "",
    phoneNo: "",
    email: "",
    summary: "",
  });

  const [file, setFile] = useState(null);

  function handleFile(e) {
    setFile(e.target.files[0]);
     
  }


  

 

  function getUser(e) {
    setjoiErrors([]);
    let inputValue = e.target.value;
    let newUser = { ...user };
    let propertyName = e.target.id;

    newUser[propertyName] = inputValue;
    // console.log(newUser);
    setUser(newUser);
  }

  function submitUser(e) {
    e.preventDefault();

    const schema = Joi.object({
      firstName: Joi.string().alphanum().min(3).max(12).required(),
      lastName: Joi.string().alphanum().min(3).max(12).required(),
      department: Joi.string().alphanum().min(2).max(20).required(),
      email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
        .required(),
      phoneNo: Joi.number().integer(),
      summary: Joi.string().min(0).max(50),
      // resume: Joi.string(),
    });

    let joiResponse = schema.validate(user, { abortEarly: false });
    // console.log(joiResponse.error);
    if (joiResponse.error == undefined) {
      // data is valid
      sendUser();
      e.target.reset();

    } else {
      let errorList = joiResponse.error.details;
      setjoiErrors(errorList);
    }
  }

  function getSpecificError(key) {
    if (joiErrors != []) {
      for (let i = 0; i < joiErrors.length; i++) {
        if (joiErrors[i].context.key == key) {
          return joiErrors[i].message;
        }
      }

      return " ";
    }
  }



  async function sendUser() {

    // formData : append the resume ********

    const formData = new FormData();
    formData.append("resume", file);
    formData.append("firstName", user.firstName);
    formData.append("lastName", user.lastName);
    formData.append("email", user.email);
    formData.append("department", user.department);
    formData.append("phoneNo", user.phoneNo);
    formData.append("summary", user.summary);

    // formData : append the resume ********

    let data = await axios
      .post("https://ubtcapi.abnourgroup.com/contactus/career", formData)
      .then(
        (res) => { toast.success("Request Sent Successfully", {
          position: "top-center",
          duration: 1000,
        });}
      )
      .catch((er) => { toast.error("Error", {
          position: "top-center",
          duration: 1000,
        })})}
  

  return (
    <>
     
      <div className="careerspage ubg py-5">
        <div className="text-center mt-5 text-white">
          <h1 className="fs-1 fw-bold">Careers</h1>
          <p>We are excited to grow our team!</p>
        </div>

        <div className="container bord px-5 py-4 ">
          <div className="row bg-white p-0">
            <div className="col-lg-5 p-0">
              <div className="position-relative h-100">
                <img src="img.png" className="w-100 h-100" alt="" />
              </div>
            </div>
            <div className="col-lg-7 rounded">
              <div className="p-3">
                <div className="py-5 showline position-relative ">
                  <h2 className="fw-bold">
                    Show your ideas to <br /> the world!{" "}
                  </h2>

                  <img src="Vector.png" className="position-absolute" alt="" />
                </div>

                <form onSubmit={submitUser}>
                  <div className="inputs row d-flex flex-wrap  g-3 ">
                    <div className="col-lg-6 ">
                      <label htmlFor="firstName">First name</label>
                      <input
                        onChange={getUser}
                        type="text"
                        id="firstName"
                        className=" w-100 form-control"
                      />
                      <small className="text-danger">
                        {getSpecificError("firstName")}
                      </small>
                    </div>
                    <div className="col-lg-6 ">
                      <label htmlFor="lastName">Last name</label>
                      <input
                        onChange={getUser}
                        type="text"
                        id="lastName"
                        className=" w-100 form-control"
                      />
                      <small className="text-danger">
                        {getSpecificError("lastName")}
                      </small>
                    </div>
                    <div className="col-lg-6 ">
                      <label htmlFor="department">Department applied for</label>
                      <input
                        onChange={getUser}
                        type="text"
                        id="department"
                        className=" w-100 form-control"
                      />
                      <small className="text-danger">
                        {getSpecificError("department")}
                      </small>
                    </div>

                    <div className="col-lg-6 ">
                      <label htmlFor="phoneNo">Phone number</label>
                      <input
                        onChange={getUser}
                        type="text"
                        id="phoneNo"
                        className=" w-100 form-control"
                      />
                      <small className="text-danger">
                        {getSpecificError("phoneNo")}
                      </small>
                    </div>
                    <div className="col-lg-12">
                      <label htmlFor="email">Email address</label>
                      <input
                        onChange={getUser}
                        type="email"
                        id="email"
                        className=" w-100 form-control"
                      />
                      <small className="text-danger">
                        {getSpecificError("email")}
                      </small>
                    </div>

                    <div className="col-lg-12">
                      <label htmlFor="Resume">Resume file</label>
                      <input
                        onChange={handleFile}
                        type="file"
                        id="Resume"
                        className=" w-100 form-control"
                      />
                    </div>

                    <div className="col-lg-12 ">
                      <label htmlFor="summary" className="form-label">
                        {" "}
                        Comment <span className="text-muted">(optional)</span>
                      </label>
                      <textarea
                        onChange={getUser}
                        className="form-control"
                        id="summary"
                        rows="2"
                      ></textarea>
                      <small className="text-danger">
                        {getSpecificError("summary")}
                      </small>
                    </div>

                    <div className="col-lg-12 mt-5 ">
                      <button
                        variant="outlined"
                        className="btn btn-danger w-100"
                      >
                        Submit request
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
    }
