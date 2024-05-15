import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Components/footer/Footer";
import ScrollToTop from "./Components/ScrollToTop";
import { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const notify = () => toast("Here is your toast.");

  const sectionRef = useRef();

  return (
    <>
    {/* <button>ahmed</button> */}
      <Toaster className='toast-hot'  />
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
