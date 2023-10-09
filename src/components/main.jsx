import React from 'react';
import { Carousel } from 'react-bootstrap';
import './photoSlider.css'; 
import Landimg1 from '../assets/landhero1.png'
import Landimg2 from '../assets/landdhero2.jpg'



const Home = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100  custom-carousel-image" // Apply the custom class
            src={Landimg2}
            alt="First slide"
          />
          
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100 custom-carousel-image" // Apply the custom class
            src="https://images.pexels.com/photos/908184/pexels-photo-908184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Second slide"
          />
       
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-carousel-image" // Apply the custom class
            src="https://images.pexels.com/photos/2697616/pexels-photo-2697616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Third slide"
          />
     
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-carousel-image" // Apply the custom class
            src={Landimg1}
            alt="Fourth slide"
          />
          <Carousel.Caption className='third'>
            <h3>Welcome to Our Exquisite Jewelry Collection</h3>
            <p>We invite you to explore a world of elegance ,and craftsmanship as you browse through our stunning collection of jewelry</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
    
  );
};

export default Home;
