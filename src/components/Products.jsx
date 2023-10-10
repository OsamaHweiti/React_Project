import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import Axios from 'axios';

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import MyImg from "../assets/jewl.jpg";
import ering from "../assets/er.png";
import nic from "../assets/nick.jpg";
import all from "../assets/alll.webp";
import rin from "../assets/GUEST_b5569450-597f-45c7-889a-fbeae9ca0627.jpeg";
const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product))
  }

  // useEffect(() => {
  //   const getProducts = async () => {
  //     setLoading(true);
  //     const response = await fetch("https://fakestoreapi.com/products/");
  //     if (componentMounted) {
  //       setData(await response.clone().json());
  //       setFilter(await response.json());
  //       setLoading(false);
  //     }

  //     return () => {
  //       componentMounted = false;
  //     };
  //   };

  //   getProducts();
  // }, []);
  useEffect(() => {
    let componentMounted = true; // Add this flag to track component mount/unmount
    const getProducts = async () => {
      setLoading(true);
      
      try {
        const response = await Axios.get("http://localhost/React_Project/src/DB/products/prodget.php");
         const categ = await Axios.get("http://localhost/React_Project/src/DB/category/catget.php")
        if (componentMounted) {
          setData(response.data);
          setFilter(response.data);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };
  
    getProducts();
  
    return () => {
      componentMounted = false; // Cleanup: Set the flag to false when unmounting
    };
  }, []);
  

  const Loading = () => {
    return (
      <>
        <div className="col-12 py-5 text-center">
          <Skeleton height={40} width={560} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((item) => item.category_id === cat);
    setFilter(updatedList);
  }
  const ShowProducts = () => {
    return (
      
      <>
     
   
        
      <div className="d-flex justify-content-between" style={{ margin: '10px' }}>
     

      <Card style={{
  width: '18rem',
  height: '18rem',
  backgroundImage: `url(${MyImg})`, // Use string interpolation to include the image URL
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}}>
        
        <Card.Body>
          
         
          <Button variant="primary" style={{ width: '100%' }} className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct(9)}>Necklaces </Button>
        </Card.Body>
      </Card>
         
      
      <Card style={{
        width: '18rem',
        height: '18rem',
        backgroundImage: `url(${ering})`, // Use string interpolation to include the image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <Card.Body>
          
         
          <Button variant="primary" style={{ width: '100%' }} className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct(10)}>
          Earrings</Button>
        </Card.Body>
      </Card>
         
      <Card style={{
        width: '18rem',
        height: '18rem',
        backgroundImage: `url(${rin})`, // Use string interpolation to include the image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <Card.Body>
          
         
          <Button variant="primary" style={{ width: '100%' }} className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("jewelery")}>Rings</Button>
        </Card.Body>
      </Card>
         

      <Card style={{
        width: '18rem',
        height: '18rem',
        backgroundImage: `url(${nic})`, // Use string interpolation to include the image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <Card.Body>
          
         
          <Button variant="primary" style={{ width: '100%' }} className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("electronics")}>Necklace</Button>
        </Card.Body>
      </Card>
         
          
          
          
     
        </div >
        <div className="row mt-4">
        <div className="col-12">
          <h2 className="display-5 text-center">Product</h2>
          <hr />
        </div>
      </div>
        {filter.map((product) => {
          return (
            <div id={product.id} key={product.id} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
              <div className="card text-center h-100" key={product.id}>
                <img
                  className="card-img-top p-3"
                  src={`/images/${product.image}`}
                  alt="Card"
                  height={300}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {product.name.substring(0, 12)}...
                  </h5>
                  <p className="card-text">
                    {product.description.substring(0, 90)}...
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item lead">$ {product.price}</li>
                  {/* <li className="list-group-item">Dapibus ac facilisis in</li>
                    <li className="list-group-item">Vestibulum at eros</li> */}
                </ul>
                <div className="card-body">
                  <Link to={"/product/" + product.id} className="btn btn-dark m-1">
                    Buy Now
                  </Link>
                  <button className="btn btn-dark m-1" onClick={() => addProduct(product)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

          );
        })}
      </>
    );
  };
  return (
    <>
      <div className="container my-3 py-3">
        <div className="row">
          <div className="col-12">
            <h2 className="display-5 text-center">Categories</h2>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </>
  );
};

export default Products;
