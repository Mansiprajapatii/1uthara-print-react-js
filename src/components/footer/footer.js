import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Call } from "react-ionicons";
import { LogoInstagram } from "react-ionicons";
import { LogoFacebook } from "react-ionicons";
import { LogoTwitter } from "react-ionicons";
import { LogoWhatsapp } from "react-ionicons";
import { LogoLinkedin } from "react-ionicons";
import { Mail } from 'react-ionicons';
import { LocationSharp } from 'react-ionicons';

export default function footer() {
  return (
    <MDBFooter className="text-center text-lg-start text-muted">
      <section
        className=""
        style={{ MarginTop: 50, backgroundColor: "#c2bfbe" }}>
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol
              md="3"
              lg="6"
              xl="3"
              className="mx-auto mb-4"
              style={{ color: "#2c2c2e" }}>
              <h4
                className="text-uppercase fw-bold mb-4 mt-5"
                style={{ color: "#1d1a59" }}>
                <MDBIcon icon="gem" className="me-3" />
                Uthara print
              </h4>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
              <Mail color={"#00000"} height="20px" width="20px"  style={{MarginTop:50}}/> Email
              <p>sales@utharaprint.co.uk</p>
            </MDBCol>

            <MDBCol
              md="2"
              lg="1"
              xl="1"
              className="mx-auto mb-4"
              style={{ color: "#2c2c2e" }}
            >
              <h6
                className="text-uppercase fw-bold mb-4 mt-5"
                style={{ color: "#1d1a59" }}
              >
                Products
              </h6>
              <p>
                <a>Office</a>
              </p>
              <p>
                <a>Marketing</a>
              </p>
              <p>
                <a>Promotion</a>
              </p>
              <p>
                <a>Display</a>
              </p>
            </MDBCol>

            <MDBCol
              md="3"
              lg="2"
              xl="2"
              className="mx-auto mb-4"
              style={{ color: "#2c2c2e" }}
            >
              <h6
                className="text-uppercase fw-bold mb-4 mt-5"
                style={{ color: "#1d1a59" }}
              >
                Useful links
              </h6>
              <p>
                <a>Pricing</a>
              </p>
              <p>
                <a>Settings</a>
              </p>
              <p>
                <a>Orders</a>
              </p>
              <p>
                <a> Help</a>
              </p>
            </MDBCol>

            <MDBCol
              md="4"
              lg="3"
              xl="3"
              className="mx-auto mb-md-0 mb-4"
              style={{ color: "#2c2c2e" }}
            >
              <h6 className="text-uppercase fw-bold mb-4 mt-5"
                style={{ color: "#1d1a59", marginLeft: 3 }} >
                Contact
              </h6>
              <p>
                
                <LocationSharp color={"#00000"} height="20px" width="20px" />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" />
                <Call color={"#00000"} height="20px" width="20px" /> + 01 234
                567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" />
                <Call color={"#00000"} height="20px" width="20px" /> + 01 234
                567 89
              </p>
            </MDBCol>

            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
              <div className="ml-10 d-none d-lg-block">
                <span style={{ color: "#1d1a59" , fontWeight:600}}>
                  Get connected with us on social networks:
                </span>
              </div>

              <div>
                <a href="" className="me-4 text-reset">
                  <LogoInstagram color={"#00000"} height="20px" width="20px" />
                </a>
                <a href="" className="me-4 text-reset">
                  <LogoFacebook color={"#00000"} height="20px" width="20px" />
                </a>
                <a href="" className="me-4 text-reset">
                  <LogoTwitter color={"#00000"} height="20px" width="20px" />
                </a>
                <a href="" className="me-4 text-reset">
                  <LogoWhatsapp color={"#00000"} height="20px" width="20px" />
                </a>
                <a href="" className="me-4 text-reset">
                  <LogoLinkedin color={"#00000"} height="20px" width="20px" />
                </a>
              </div>
            </section>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-0"
        style={{ backgroundColor: "#163eab", color: "white", fontSize: 15 }}
      >
        <p>Terms & Conditions| privacy Policy</p>
        ©Uthara print 2017-2021 all right reserved. This site is designed and
        developed by ####.
      </div>
    </MDBFooter>
  );
}
