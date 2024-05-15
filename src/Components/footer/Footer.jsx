import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="footer py-5">
        <div className="container p-2">
          <div className="row flex-shrink-1 ">
            <div className="col-2 UBTC">
              <span className=" py-1 px-3 fs-1 text-white border ">UBTC</span>
            </div>

            <div className="col-10 d-flex    footerunderline position-relative ">
              <div className="row justify-content-between align-items-end w-100 toprow ">
                <div className="col-6">
                  <div>
                    <ul className="list-unstyled d-flex ">
                      <li className="px-2">
                        <Link to="/#aboutUs">About</Link>
                      </li>
                      <li className="px-2">
                        <a href="#">Services</a>
                      </li>
                      <li className="px-2">
                        <Link to="/#ourprojects">Projects</Link>
                      </li>
                      <li className="px-2">
                        <Link to="/careers">Careers</Link>
                      </li>
                      <li className="px-2">
                        <Link to="/contact">Contact</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-6">
                  <div>
                    <ul className="socialmediaicons d-flex list-unstyled justify-content-end">
                      <li className="px-3">
                        {" "}
                        <a
                          href="#"
                          target="_blank"
                        >
                          <i className="fa-brands fa-lg fa-facebook-f"></i>
                        </a>
                      </li>
                      <li className="px-3">
                        {" "}
                        <a
                          target="_blank"
                          href="#"
                        >
                          <i className="fa-brands fa-linkedin-in fa-lg"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-6"></div>
              </div>
            </div>
            <div className=""></div>
          </div>
          <div className="row flex-shrink-1">
            <div className="col-2"></div>
            <div className="col-10">
              <div className="row secondrow justify-content-between py-2 ">
                <div className="col-6 p-0">
                  <ul className="list-unstyled d-flex ">
                    <li className="px-3  py-2">
                      <a className="" href="#">
                        Privacy Policy
                      </a>
                    </li>
                    <li className="px-2  py-2">
                      <a className="" href="#">
                        Terms of Use
                      </a>
                    </li>
                    <li className="px-2  py-2">
                      <a className="" href="#">
                        Sales and Refunds
                      </a>
                    </li>
                    <li className="px-2  py-2">
                      <a className="" href="#">
                        Legal
                      </a>
                    </li>
                    <li className="px-2  py-2">
                      <a className="" href="#">
                        Site Map
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-6 p-0">
                  <ul className="list-unstyled d-flex justify-content-around ">
                    <li className="px-1  py-2">
                      <a className="" href="#">
                        Company@info.com
                      </a>
                    </li>
                    <li className="px-1  py-2">
                      <a className="" href="#">
                        +7 (900) 000-00-01
                      </a>
                    </li>
                    <li className="px-1 abnourfoot  py-2">
                      <img
                        src="abnuur-foot-1.png"
                        className="w-75 "
                        alt=""
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
