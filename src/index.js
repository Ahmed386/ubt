import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Components/home/Home";
import Career from "./Components/career/Career";
import Contactus from "./Components/contact/Contactus";
import Projectdetails from "./Components/projects/Projectdetails";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "careers", element: <Career /> },
      { path: "contact", element: <Contactus /> },
      { path: "project", element: <Projectdetails /> ,children:[
        {path:':id'}
      ]},
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

reportWebVitals();
