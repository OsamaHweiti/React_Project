import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import logoImage from '../assets/logo.png';
export default function Footer() {

  const logoStyle = {
    height: '3rem', 
    width: '6rem',  
  };

  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
     

      <section className=''>
      
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
              
                <img src={logoImage} alt="Logo" style={logoStyle} /> 
              </h6>
              <p>
              Stay inspired about the latest trends, jewelry care tips, and special promotions by subscribing to our newsletter and following us on social media. We love sharing our passion for jewelry with you!
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                Bracelet
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Earrings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Rings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Necklace
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='/' className='text-reset'>
                  Home
                </a>
              </p>
              <p>
                <a href='/product' className='text-reset'>
                Product
                </a>
              </p>
              <p>
                <a href='/contact' className='text-reset'>
                Contact
                </a>
              </p>
              <p>
                <a href='/about' className='text-reset'>
                About
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                Aqaba,Orange Academy
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                jewellery@gmail.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> +962798657487
              </p>
              <p>
              <div>
              <a href='' className='me-4 text-reset'>
                <MDBIcon color='secondary' fab icon='facebook-f' />
              </a>
              <a href='' className='me-4 text-reset'>
                <MDBIcon color='secondary' fab icon='twitter' />
              </a>
              <a href='' className='me-4 text-reset'>
                <MDBIcon color='secondary' fab icon='google' />
              </a>
              <a href='' className='me-4 text-reset'>
                <MDBIcon color='secondary' fab icon='instagram' />
              </a>
              <a href='' className='me-4 text-reset'>
                <MDBIcon color='secondary' fab icon='linkedin' />
              </a>
              <a href='' className='me-4 text-reset'>
                <MDBIcon color='secondary' fab icon='github' />
              </a>
            </div>
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        

       
      
      </section>

    
    </MDBFooter>
  );
}