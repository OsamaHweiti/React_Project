

import { useParams, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from "react";

import axios from 'axios';
import Header from '../admincomp/Header';
import Sidebar from '../admincomp/Sidebar';
function EditProductForm(){
    const {id} = useParams();
    const navigate=useNavigate();
    const [selectedFile, setSelectedFile] = useState(null);
    const [inputValue, setInputValue] = useState({
      name: "",
      description: "",
      price: "",
      category_id: "",
    });
    const [data, setData] = useState([]);
    const [showAddForm, setShowAddForm] = useState(false);
    const [categories, setCategories] = useState([]);
    const onFileChange = (event) => {
      setSelectedFile(event.target.files[0]);
    };
  
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle);
    };
    const onInputChange = (event) => {
      const { name, value } = event.target;
      setInputValue({
        ...inputValue,
        [name]: value,
      });
    };
  
    const fetchCategories = () => {
      axios
        .get("http://localhost/React_Project/src/DB/category/catget.php")
        .then((response) => {
          setCategories(response.data);
        })
        .catch((error) => {
          console.error("Error fetching categories:", error);
        });
    };
  
    useEffect(() => {
      fetchCategories();
  
      axios
        .get("http://localhost/React_Project/src/DB/products/prodget.php")
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }, []);
    const onFileUpload = (e) => {
      e.preventDefault();
      if (selectedFile) {
        const formData = new FormData();
        formData.append("image", selectedFile);
        formData.append("name", inputValue.name); 
        formData.append("description", inputValue.description); 
        formData.append("price", inputValue.price); 
        formData.append("category_id", inputValue.category_id); 
        // console.log(formData);
        // debugger;
        console.log(formData);
        axios.post(
            `http://localhost/React_Project/src/DB/products/proedit.php?id=${id}`,
            formData
          )
          .then((response) => {

            console.log("File uploaded:", response.data);
            navigate('/admin/product')
          });
      } else {
        console.log("No file selected.");
      }
    };
  return (
    <div className="grid-container">
    <Header OpenSidebar={OpenSidebar} />
    <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
    <div id="editdiv"  className='m-5'>
     <div className="add-user-form">
          
            <div className="add-user-form">
              <h4>Edit products</h4>
              <div id="adddiv">
                <form onSubmit={onFileUpload}>
                  <label>Product Category:</label>
                  <select
                    name="category_id"
                    value={inputValue.category_id}
                    onChange={onInputChange}
                    required
                  >
                    <option value="" disabled>
                      Select a category
                    </option>
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                  <br />
                  <label className="col-2">Product Name:</label>
                  <input
                    className="col-5"
                    type="text"
                    name="name"
                    value={inputValue.name}
                    onChange={onInputChange}
                    required
                  />
                  <br />
                  <label className="col-2">Product Description:</label>
                  <input
                    className="col-5"
                    type="text"
                    name="description"
                    value={inputValue.description}
                    onChange={onInputChange}
                    required
                  />
                  <br />

                  <label className="col-2">Product Price:</label>
                  <input
                    className="col-5"
                    type="number"
                    name="price"
                    value={inputValue.price}
                    onChange={onInputChange}
                    required
                  />

                  <br />
                  <label>Product image</label>
                  <input type="file" name="photo" onChange={onFileChange} />
                  <br />
                  <input
                    type="submit"
                    className="btn btn-outline-secondary"
                    value="Add"
                    name="edit product"
                  />
                </form>
              </div>
            </div>
          </div>
          
     
    </div>
    </div>
    
  );
}

export default EditProductForm;
