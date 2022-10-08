import React from "react"
import "./index.css"
import Dropdown from "./components/dropdown_bar/dropdown";
import Navbar from "./components/navbar/navbar";
import Crousal from "./components/crousal/crousal";
import Slider from "./components/slider/slider";
import Checkbox from "./components/cardCheckbox/checkbox";
import SignUp from "./components/signUp/signUp";
import Review from './components/Review/review';
import Footer from './components/footer/footer'
const App = () => {
  return (
    <>
  <div>
  <Navbar/>
  <Dropdown/>
  <Crousal/>
  <Slider/>
  <Checkbox/>
  <SignUp/>
  <Review/>
  <Footer/>



  </div>
  
  </>

    
  );
}

export default App
