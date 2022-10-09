import React from "react";
import "./index.css";
import Dropdown from "./components/dropdown_bar/dropdown";
import Navbar from "./components/navbar/navbar";
import Crousal from "./components/crousal/crousal";
import Slider from "./components/slider/slider";
import Checkbox from "./components/cardCheckbox/checkbox";
import SignUp from "./components/signUp/signUp";
import Review from "./components/Review/review";
import Footer from "./components/footer/footer";
import ribbon from "./ribbon.png";
import Navbar1 from "./components/Navbar1/navbar1";
const App = () => {
  return (
    <>
      <div>
        <Navbar />
        {/* <Navbar1/> */}
        <Dropdown />
        <Crousal />
        <img
          className="d-block w-100 h-1 mt-4"
          src={ribbon}
          alt="Second slide"
        />
        <Slider />
        <Checkbox />
        <SignUp />
        <Review />
        <Footer />
      </div>
    </>
  );
};

export default App;
