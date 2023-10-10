import React  ,{  useState }from "react";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "../components";

import  { useNavigate } from 'react-router-dom';
import Axios from 'axios';


const Login = () => {
  const navigate = useNavigate();
  const [formData, getFormData] = useState({
    email: '',
    password: '',
});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        getFormData({
            ...formData,
            [name]: value,
        });
    };
const handleSubmit = (e) => {
  e.preventDefault();
  
  Axios.post("http://localhost/React_Project/src/DB/login.php", formData)
    .then((response) => {
      console.log("User added successfully:", response.data);

      getFormData({
    
        email: "",
       
        password: "",
      
      });

      if (response.data.success) {
   
        localStorage.setItem('login', 'true');
        localStorage.setItem('id', response.data.UserId);
if (response.data.is_admin==1)
        
        navigate('/admin');
        else{
          navigate("/")
        }
      } 
     
      

    })
    .catch((error) => {
      console.error("Error adding user:", error);
    });
  }

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Login</h1>
        <hr />
        <div class="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form onSubmit={handleSubmit}>
              <div class="my-3">
                <label for="display-4">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  name="email"
                />
              </div>
              <div class="my-3">
                <label for="floatingPassword display-4">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  name="password"
                />
              </div>
              <div className="my-3">
                <p>New Here? <Link to="/register" className="text-decoration-underline text-info">Register</Link> </p>
              </div>
              <div className="text-center">
                <button class="my-2 mx-auto btn btn-dark" type="submit" >
                  Login
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

export default Login;