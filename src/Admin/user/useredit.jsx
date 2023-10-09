import React, { useState } from 'react';
import Axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../admincomp/Header';
import Sidebar from '../admincomp/Sidebar';

function EditUserForm({  fname, lname, email, phone, password, address,display }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };
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

    Axios.post(`http://localhost/projectreact/src/DB/useredit.php?id=${id}`, formData)
      .then((response) => {
        console.log('User updated successfully:', response.data);
        navigate('/admin/users');
        
      })
      .catch((error) => {
        console.error('Error updating user:', error);
      });
  };

  return (
    <div className="grid-container">
    <Header OpenSidebar={OpenSidebar} />
    <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
    <div id="editdiv" style={{ display }} className='m-5'>
        {/* <form onSubmit={handleSubmit}>
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
                />{" "}
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
              </form> */}
      <form onSubmit={handleSubmit}>
        <input type="hidden" value={formData.userid} name="userid" />
        <label className="col-2">First Name:</label>
        <input
          className="col-5"
          type="text"
          value={formData.fname}
          name="fname"
          onChange={handleInputChange}
        /><br />
        <label className="col-2">Last Name:</label>
        <input
          className="col-5"
          type="text"
          value={formData.lname}
          name="lname"
          onChange={handleInputChange}
        /><br />
        <label className="col-2">Email:</label>
        <input
          className="col-5"
          type="text"
          value={formData.email}
          name="email"
          onChange={handleInputChange}
        /><br />
        <label className="col-2">Mobile:</label>
        <input
          className="col-5"
          type="text"
          value={formData.phone}
          name="phone"
          onChange={handleInputChange}
        /><br />
        <label className="col-2">Password:</label>
        <input
          className="col-5"
          type="text"
          value={formData.password}
          name="password"
          onChange={handleInputChange}
        /><br />
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
          checked={formData.type === '1'}
          onChange={handleInputChange}
          required
        /> Yes
        <input
          type="radio"
          value="0"
          name="type"
          checked={formData.type === '0'}
          onChange={handleInputChange}
          required
        /> No<br />
        <input
          type="submit"
          className="btn btn-outline-secondary"
          value="Save"
          name="newuser"
        />
      </form>
    </div>
    </div>
  );
}

export default EditUserForm;
