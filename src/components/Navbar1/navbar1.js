import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import { Cart } from "react-ionicons";
import { Layers } from 'react-ionicons';
import { Mail } from 'react-ionicons';
import { LogoWhatsapp } from "react-ionicons";
import { SearchSharp } from 'react-ionicons'

export default function App() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='#1d1a59'>
      <MDBContainer fluid >
        <MDBNavbarBrand href='#'>Uthara print</MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
 
        <MDBCollapse navbar show={showBasic}>
            
          <form className=' d-flex justify-content-around input-group w-auto' >
            <input type='search' className='form-control' placeholder='Search...' aria-label='Search' />
            <MDBBtn color='primary'><SearchSharp color={'#ffffff'}  height="20px" width="20px"/></MDBBtn>
          </form>
          <MDBNavbarNav className='ml-5 d-flex justify-content-md-around mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#'>
                <Layers color={'#000000'} height="20px" width="20px" />
               Order Designs
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink active  href='#'><Mail color={'#000000'} height="20px" width="20px" />sales@utharaprint</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink active href='#'><LogoWhatsapp color={'#000000'} height="20px" width="20px" />020 3239 9280</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink active href='#' ms-lg-3><Cart color={'#000000'} height="20px" width="20px" /></MDBNavbarLink>
            </MDBNavbarItem>


          </MDBNavbarNav>

        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}