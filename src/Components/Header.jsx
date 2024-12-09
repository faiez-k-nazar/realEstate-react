
import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from 'mdb-react-ui-kit';

function Header() {
    const [openNavLeft, setOpenNavLeft] = useState(false);

  return (
   
        <MDBNavbar expand='lg' light bgColor='light'>
          <MDBContainer fluid>
            <MDBNavbarToggler
              type='button'
              data-target='#navbarLeftAlignExample'
              aria-controls='navbarLeftAlignExample'
              aria-expanded='false'
              aria-label='Toggle navigation'
              onClick={() => setOpenNavLeft(!openNavLeft)}
            >
              <MDBIcon icon='bars' fas />
            </MDBNavbarToggler>
    
            <MDBCollapse navbar open={openNavLeft}>
              <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
                <MDBNavbarItem>
                  <MDBNavbarLink active aria-current='page' href='#'>
                    Home
                  </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href='#'>Link</MDBNavbarLink>
                </MDBNavbarItem>
    
                <MDBNavbarItem>
                  <MDBDropdown>
                    <MDBDropdownToggle tag='a' className='nav-link'>
                      Dropdown
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                      <MDBDropdownItem link>Action</MDBDropdownItem>
                      <MDBDropdownItem link>Another action</MDBDropdownItem>
                      <MDBDropdownItem link>Something else here</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
                    Disabled
                  </MDBNavbarLink>
                </MDBNavbarItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
      );
    
    
    
  
}

export default Header