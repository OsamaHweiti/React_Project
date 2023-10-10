import React, { useState } from 'react';
import  { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { Footer, Navbar } from "../components";
const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        address: '',
        phoneNumber: '',
        email: '',
        password: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

  
    const handleSubmit = (e) => {
        e.preventDefault();
        
        Axios.post("http://localhost/React_Project/src/DB/register.php", formData)
          .then((response) => {
            console.log("User added successfully:", response.data);
    
            setFormData({
              fname: "",
              lname: "",
              email: "",
              phone: "",
              password: "",
              address: "",
              type: "0",
            });
            navigate('/login');
            
    
          })
          .catch((error) => {
            console.error("Error adding user:", error);
          });
        }
  

    return (
        <>
         <Navbar />
            <div className="container my-3 py-3">
                <h1 className="text-center">Register</h1>
                <hr />
                <div className="row my-4 h-100">
                    <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
                        <form onSubmit={handleSubmit}>
                            <div className="form my-3">
                                <label htmlFor="FirstName">First Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="FirstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Enter Your First Name"
                                />
                            </div>
                            <div className="form my-3">
                                <label htmlFor="LastName">Last Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="LastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Enter Your Last Name"
                                />
                            </div>
                            <div className="form my-3">
                                <label htmlFor="Address">Address</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="Address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Enter Your Address"
                                />
                            </div>
                            <div className="form my-3">
                                <label htmlFor="PhoneNumber">Phone Number</label>
                                <input
                                    type="tel"
                                    className="form-control"
                                    id="PhoneNumber"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Enter Your Phone Number"
                                />
                            </div>
                            <div className="form my-3">
                                <label htmlFor="Email">Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="Email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="name@example.com"
                                />
                            </div>
                            <div className="form my-3">
                                <label htmlFor="Password">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="Password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Password"
                                />
                            </div>
                            <div className="my-3">
                                <p>
                                    Already have an account?{' '}
                                    <Link
                                        to="/login"
                                        className="text-decoration-underline text-info"
                                    >
                                        Login
                                    </Link>{' '}
                                </p>
                            </div>
                            <div className="text-center">
                                <button
                                    className="my-2 mx-auto btn btn-dark"
                                    type="submit"
                                    
                                    name="submit"
                                >
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Register;
