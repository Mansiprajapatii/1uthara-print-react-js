import React from "react";
import * as ReactDOM from "react-dom";
import p from "../signUp/person.png";

export default function signUp() {
  return (
    <>
      <div class="card" style={{marginTop: 50,backgroundColor: "white", boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"}} >
        <div class="row no-gutters">
          <div class="col-auto">
            <img
              src={p}   
              class="img-fluid"
              alt=""
              style={{ marginTop: 30, marginLeft: 60, width: 280 }}
            ></img>
          </div>
          <div class="col">
            <div class="card-block px-2">
              <h4 class="card-title" style={{color: "#163eab", marginRight: 250, marginLeft: 100, marginTop:100}}>Get on the VIP list !</h4>
              <p class="card-text" style={{marginRight: 250, marginLeft: 100, marginTop:10}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.{" "}
              </p>
              <a href="#" class="btn" style={{backgroundColor: "#163eab", color:"white" ,marginRight: 250, marginLeft: 100, marginTop:10, width:150}}>
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
