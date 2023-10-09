import React, { useState, useEffect } from "react";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate , Link  } from "react-router-dom";
import Header from '../admincomp/Header';
import Sidebar from '../admincomp/Sidebar';

function Users() {
  const [userData, setUserData] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const navigate = useNavigate(); 
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };
  useEffect(() => {
    Axios.get("http://localhost/projectreact/src/DB/userget.php")
      .then((response) => {
        console.log("Response", response.data);
        setUserData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  // toggle form
  const toggleAddForm = () => {
    setShowAddForm(!showAddForm);
  };
  //ADD NEW USER TO DATABASE
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    password: "",
    address: "",
    type: "0", // Default value for radio button
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
    
    Axios.post("http://localhost/projectreact/src/DB/useradd.php", formData)
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
        navigate('/admin/users');
        

      })
      .catch((error) => {
        console.error("Error adding user:", error);
      });
  };

  return (
    <div className="grid-container">
    <Header OpenSidebar={OpenSidebar} />
    <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
    <div className="users-data-r">
      <div className="user-data m-b-30 m-3">
        <div className="row justify-content-between mb-3">
          <div className="col-lg-6">
            <h3 className="title-3">
              <i className="zmdi zmdi-account-calendar"></i> Jewelry Users
            </h3>
          </div>
          <div className="col">
            <p style={{ textAlign: "left", color: "#888" }}>
              Total number of users: {userData.length}
            </p>
          </div>
          <div className="col mb-4">
            <button
              className="btn btn-outline-secondary"
              onClick={toggleAddForm}
            >
              Add New User
            </button>
          </div>
        </div>

        {showAddForm && (
          <div className="add-user-form">
            <h4>Add New User</h4>
            <div id="adddiv">
              <form onSubmit={handleSubmit}>
                <label className="col-2">First Name:</label>
                <input
                  className="col-5"
                  type="text"
                  name="fname"
                  value={formData.fname}
                  onChange={handleInputChange}
                  required
                />
                <br />
                <label className="col-2">Last Name:</label>
                <input
                  className="col-5"
                  type="text"
                  name="lname"
                  value={formData.lname}
                  onChange={handleInputChange}
                  required
                />
                <br />
                <label className="col-2">Email:</label>
                <input
                  className="col-5"
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <br />
                <label className="col-2">Mobile:</label>
                <input
                  className="col-5"
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
                <br />
                <label className="col-2">Password:</label>
                <input
                  className="col-5"
                  type="text"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
                <br />
                <label className="col-2">Address:</label>
                <input
                  className="col-5"
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                />
                <br />
                <label className="col-2">Admin:</label>
                <input
                  type="radio"
                  value="1"
                  name="type"
                  checked={formData.type === "1"}
                  onChange={handleInputChange}
                  required
                />
                Yes
                <input
                  type="radio"
                  value="0"
                  name="type"
                  checked={formData.type === "0"}
                  onChange={handleInputChange}
                  required
                />{" "}
                No
                <br />
                <input
                  type="submit"
                  className="btn btn-outline-secondary"
                  value="Add"
                  name="addnewuser"
                />
              </form>
            </div>
          </div>
        )}

        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Is Admin</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((user) => (
                // <tr><img src=""></img></tr>
                <tr key={user.id}>
           
                  <td>{user.id}</td>
                  <td>{user.firstname}</td>
                  <td>{user.lastname}</td>
                  <td>{user.email}</td>
                  <td>{user.address}</td>
                  <td>
                    <span
                      className={`btn ${
                        user.type === 1 ? "btn-danger" : "btn-info"
                      }`}
                      disabled
                    >
                      {user.type === 1 ? "Admin" : "User"}
                    </span>
                  </td>
                  <td>
                    <Link to={`/admin/user/edit/${user.id}`}>
                    
                      <button className="btn btn-outline-primary">Edit</button>
                    </Link>
                  </td>
                  <td>
                    <Link to={`/admin/user/delete/${user.id}`}>
                      <button className="btn btn-outline-danger">Delete</button>
                    </Link>
                    
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Users;
