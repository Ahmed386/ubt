import { Alert, Snackbar, Stack } from "@mui/material";
import axios from "axios";
import Joi from "joi";
import React, { useState } from "react";
import  { toast} from "react-hot-toast";

export default function Contactus() {
  // sn
  const [open, setOpen] = React.useState(false);



  // snackbar ***********

  const [joiErrors, setjoiErrors] = useState([]);
  const [resultMsg, setResultMsg] = useState("");

  const [user, setUser] = useState({
    name: ``,
    lastname: "",
    company: "",
    phoneNo: "",
    email: "",
    message: "",
  });
  function getUser(e) {
    setjoiErrors([]);
    let inputValue = e.target.value;
    let newUser = { ...user };
    let propertyName = e.target.id;

    newUser[propertyName] = inputValue;
    console.log(newUser);
    setUser(newUser);
  }

  function submitUser(e) {
    e.preventDefault();

    const schema = Joi.object({
      name: Joi.string().alphanum().min(3).max(12).required(),
      lastname: Joi.string().alphanum().min(3).max(12).required(),
      company: Joi.string().alphanum().min(2).max(20).required(),
      email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
        .required(),
      phoneNo: Joi.number().integer(),
      message: Joi.string().min(0).max(50),
    });

    let joiResponse = schema.validate(user, { abortEarly: false });
    if (joiResponse.error == undefined) {
      sendUser();
      e.target.reset();
    } else {
      let errorList = joiResponse.error.details;
      setjoiErrors(errorList);
    }
  }

  async function sendUser() {
    let data = await axios
      .post("https://ubtcapi.abnourgroup.com/contactus", user)

      .then((res) => {
        // setResultMsg("Your Message Sent Successfully!");
        // setOpen(true);
        // toast.success("Message Sent Successfully");
        // alert("here");
        toast.success("Message Sent Successfully", {
          position: "top-center",
          duration: 3000,
        });
      })
      .catch((er) => {toast.error("Error", {
          position: "top-center",
          duration: 3000,
        });})

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

  return (
    <>
      {/* <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            {resultMsg}
            Your Message Sent Successfully!
          </Alert>
        </Snackbar>
      </Stack> */}

      <div className="contactpage ubg  py-5">
        <div className="text-center mt-5 text-white">
          <h1 className="fs-1 fw-bold">Contact us</h1>
          <p>Any question or remark? Just write us a message!</p>
        </div>

        <div className="container bord px-5 py-4 ">
          <div className="row bg-white p-0">
            <div className="col-lg-5 p-0">
              <div className="py-0 h-100 w-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.11599126441!2d31.208958274269726!3d30.06220951773108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458411f3b46d6bb%3A0x90a5955277c013e!2sUBTC!5e0!3m2!1sen!2seg!4v1686479966333!5m2!1sen!2seg"
                  width="w-100"
                  height="640"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="col-lg-7 rounded kitebg position-relative">
              <img src="Vector 43.png" className="position-absolute" alt="" />

              <div className="p-4">
                <div className="py-5    ">
                  <h2 className="fw-bold">
                    Thanks for your <br /> interest!{" "}
                  </h2>
                </div>

                <form id="contactform" onSubmit={submitUser}>
                  <div className="inputs row d-flex flex-wrap  g-3 ">
                    <div className="col-lg-6 ">
                      <label htmlFor="name">First name</label>
                      <input
                        onChange={getUser}
                        type="text"
                        id="name"
                        className=" w-100 form-control"
                      />
                      <small className="text-danger">
                        {getSpecificError("name")}
                      </small>
                    </div>
                    <div className="col-lg-6 ">
                      <label htmlFor="lastname">Last name</label>
                      <input
                        onChange={getUser}
                        type="text"
                        id="lastname"
                        className=" w-100 form-control"
                      />
                      <small className="text-danger">
                        {getSpecificError("lastname")}
                      </small>
                    </div>
                    <div className="col-lg-6 ">
                      <label htmlFor="company">Company name</label>
                      <input
                        onChange={getUser}
                        type="text"
                        id="company"
                        className=" w-100 form-control"
                      />
                      <small className="text-danger">
                        {getSpecificError("company")}
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

                    <div className="col-lg-12 ">
                      <label htmlFor="message" className="form-label">
                        Questions or Comments{" "}
                        <span className="text-muted">(optional)</span>
                      </label>
                      <textarea
                        onChange={getUser}
                        className="form-control"
                        id="message"
                        rows="3"
                      ></textarea>
                      <small className="text-danger">
                        {getSpecificError("message")}
                      </small>
                    </div>

                    <div className="col-lg-12 mt-5 ">
                      <button
                        className="btn btn-danger w-100"
                        variant="outlined"
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
