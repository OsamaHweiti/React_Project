import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Header from '../admincomp/Header';
import Sidebar from '../admincomp/Sidebar';
function Adminprod() {
  const navigate = useNavigate(); 
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };
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

  const toggleAddForm = () => {
    setShowAddForm(!showAddForm);
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
      .get("http://localhost/projectreact/src/DB/category/catget.php")
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
      console.log(formData);
      axios.post(
          "http://localhost/React_Project/src/DB/products/proadd.php",
          formData
        )
        .then((response) => {
          console.log("File uploaded:", response.data);
          window.location.reload();
        });
    } else {
      console.log("No file selected.");
    }
    // debugger;
  };
  return (
    <>
       <div className="grid-container">
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      <div className="users-data-r">
        <div className="user-data m-b-30 m-3">
          <div className="row justify-content-between mb-3">
            <div className="col-lg-6">
              <h3 className="title-3">
                <i className="zmdi zmdi-account-calendar"></i> Jewelry Products
              </h3>
            </div>
            <div className="col">
              <p style={{ textAlign: "left", color: "#888" }}>
                Total number of Products: {data.length}
              </p>
            </div>
            <div className="col mb-4">
              <button
                className="btn btn-outline-secondary"
                onClick={toggleAddForm}
              >
                Add New Products
              </button>
            </div>
          </div>
          {showAddForm && (
            <div className="add-user-form">
              <h4>Add New Category</h4>
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
                    name="Add new product"
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
                  <th>Name</th>
                  <th>Product Describe</th>
                  <th>Product Price</th>
                  <th>Product Image</th>
                  <th>Product Cat</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  // <tr><img src=""></img></tr>
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>{item.price}</td>
<td>
                      <img
                        src={`/images/${item.image}`}
                        alt="category_image"
                        style={{ width: "50px", height: "50px" }}
                      />
                    </td>

                    <td>{item.category_id}</td>
                    

                    <td>
                      <Link to={`/admin/products/edit/${item.id}`}>
                        <button className="btn btn-outline-primary">
                          Edit
                        </button>
                      </Link>
                    </td>
                    <td>
                      <Link to={`/admin/products/delete/${item.id}`}>
                        <button className="btn btn-outline-danger">
                          Delete
                        </button>
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
    </>
  );
}
export default Adminprod;
