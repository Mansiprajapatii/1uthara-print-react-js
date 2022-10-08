import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
// import { IconName } from "react-icons/fa";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';
export default function footer() {
  return (
    <MDBFooter  className='text-center text-lg-start text-muted' >


      <section className='' style={{MarginTop: 50,backgroundColor: "#c2bfbe"}}    >
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h4 className='text-uppercase fw-bold mb-4 mt-5'>
                <MDBIcon icon="gem" className="me-3" />
                Uthara print
              </h4>
              
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="1" xl="1" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 mt-5'>Products</h6>
              <p>
                <a >
                  Office
                </a>
              </p>
              <p>
                <a >
                  Marketing
                </a>
              </p>
              <p>
                <a >
                  Promotion
                </a>
              </p>
              <p>
                <a >
                  Display
                </a>
              </p>
              <p>
                <a >
                  Books
                </a>
              </p>
              <p>
                <a >
                  Vue
                </a>
              </p>
              <p>
                <a >
                  Laravel
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 mt-5'>Useful links</h6>
              <p>
                <a >
                  Pricing
                </a>
              </p>
              <p>
                <a >
                  Settings
                </a>
              </p>
              <p>
                <a >
                  Orders
                </a>
              </p>
              <p>
                <a> Help</a>
                 
                
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 mt-5'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-0' style={{ backgroundColor: '#163eab', color: "white", fontSize: 15 }}>
        <p>Terms & Conditions| privacy Policy</p>
        ©Uthara print 2017-2021 all right reserved. This site is designed and developed by ####.
      </div>
    </MDBFooter>
  );
}