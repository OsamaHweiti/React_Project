// import React, { useState, useEffect } from "react";
// import Axios from "axios";
// import "bootstrap/dist/css/bootstrap.css";
// import { useNavigate , Link  } from "react-router-dom";

// function Category() {
//   const [catData, setCatData] = useState([]);
//   const [showAddForm, setShowAddForm] = useState(false);
//   const navigate = useNavigate(); 
 
//   useEffect(() => {
//     Axios.get("http://localhost/projectreact/src/DB/category/catget.php")
//       .then((response) => {
//         console.log("Response", response.data);
//         setCatData(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching user data:", error);
//       });
//   }, []);

//   // toggle form
//   const toggleAddForm = () => {
//     setShowAddForm(!showAddForm);
//   };
//   //ADD NEW USER TO DATABASE
//   const [formData, setFormData] = useState({
//     name: "",
//     cat_section: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     Axios.post("http://localhost/projectreact/src/DB/category/catadd.php", formData)
//       .then((response) => {
//         console.log("User added successfully:", response.data);

//         setFormData({
//           name: "",
//           cat_section: "",
//         });
//         // navigate('/admin/users');
        

//       })
//       .catch((error) => {
//         console.error("Error adding user:", error);
//       });
//   };

//   return (
//     <div className="users-data-r">
//       <div className="user-data m-b-30 m-3">
//         <div className="row justify-content-between mb-3">
//           <div className="col-lg-6">
//             <h3 className="title-3">
//               <i className="zmdi zmdi-account-calendar"></i> Jewelry Categories
//             </h3>
//           </div>
//           <div className="col">
//             <p style={{ textAlign: "left", color: "#888" }}>
//               Total number of Categories: {catData.length}
//             </p>
//           </div>
//           <div className="col mb-4">
//             <button
//               className="btn btn-outline-secondary"
//               onClick={toggleAddForm}
//             >
//               Add New Category
//             </button>
//           </div>
//         </div>

//         {showAddForm && (
//           <div className="add-user-form">
//             <h4>Add New Category</h4>
//             <div id="adddiv">
//               <form onSubmit={handleSubmit}>
//                 <label className="col-2">Category Name:</label>
//                 <input
//                   className="col-5"
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                   required
//                 />
//                 <br />
//                 <label className="col-2">Category Section:</label>
//                 <input
//                   className="col-5"
//                   type="text"
//                   name="cat_section"
//                   value={formData.cat_section}
//                   onChange={handleInputChange}
//                   required
//                 />
//                 <br />
//                 <label>Category image</label>
//                 <input type="file" name="photo" onChange={onFileChange} />
//                 <br /> 
//                 <input
//                   type="submit"
//                   className="btn btn-outline-secondary"
//                   value="Add"
//                   name="addnewuser"
//                 />
//               </form>
//             </div>
//           </div>
//         )}

//         <div className="table-responsive">
//           <table className="table table-striped">
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Name</th>
//                 <th>Cat_Section</th>
           
//               </tr>
//             </thead>
//             <tbody>
//               {catData.map((cat) => (
//                 // <tr><img src=""></img></tr>
//                 <tr key={cat.id}>
           
//                   <td>{cat.id}</td>
//                   <td>{cat.name}</td>
//                   <td>{cat.cat_section}</td>
               
                 
//                   <td>
//                     <Link to={`/admin/category/edit/${cat.id}`}>
                    
//                       <button className="btn btn-outline-primary">Edit</button>
//                     </Link>
//                   </td>
//                   <td>
//                     <Link to={`/admin/category/delete/${cat.id}`}>
//                       <button className="btn btn-outline-danger">Delete</button>
//                     </Link>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Category;




import { useState , useEffect } from "react";
import axios from "axios";
import { useNavigate , Link, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../admincomp/Header';
import Sidebar from '../admincomp/Sidebar';
function AdminCategory (){
    const [selectedFile, setSelectedFile] = useState(null);
    const [inputValue, setInputValue] = useState('');
    const [data, setData] = useState([]);
    const [showAddForm, setShowAddForm] = useState(false);
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };
    const onFileChange = (event) => {
      setSelectedFile(event.target.files[0]);
    };
  
      const toggleAddForm = () => {
    setShowAddForm(!showAddForm);
  };
    const onInputChange = (event) => {
      setInputValue(event.target.value);
    };
    useEffect(() => {
        axios.get("http://localhost/projectreact/src/DB/category/catget.php")
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
        formData.append('image', selectedFile);
        formData.append('text', inputValue);
  
        axios.post('http://localhost/projectreact/src/DB/category/catadd.php', formData)
          .then((response) => {
            console.log('File uploaded:', response.data);
            window.location.reload();
          });
      } else {
        console.log('No file selected.');
      }
    };
    return(
        <>
   <div className="grid-container">
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />

<div className="users-data-r">
      <div className="user-data m-b-30 m-3">
        <div className="row justify-content-between mb-3">
          <div className="col-lg-6">
            <h3 className="title-3">
              <i className="zmdi zmdi-account-calendar"></i> Jewelry Categories
            </h3>
          </div>
          <div className="col">
            <p style={{ textAlign: "left", color: "#888" }}>
              Total number of Categories: {data.length}
            </p>
          </div>
          <div className="col mb-4">
            <button
              className="btn btn-outline-secondary"
              onClick={toggleAddForm}
            >
              Add New Category
            </button>
          </div>
        </div>
           {showAddForm && (
            <div className="add-user-form">
            <h4>Add New Category</h4>
            <div id="adddiv">
              <form onSubmit={onFileUpload}>
                <label className="col-2">Category Name:</label>
                <input
                  className="col-5"
                  type="text"
                  name="name"
                  value={inputValue}
                  onChange={onInputChange}
                  required
                />
              
                <br />
                <label>Category image</label>
                <input type="file" name="photo" onChange={onFileChange} />
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
                <th>Name</th>
              
                <th>Category Image</th>
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
               
                  <td><img src={`/images/${item.image}`} alt="category_image"  style={{width:'50px', height:'50px'}} /></td>
                                          
               
                 
                  <td>
                    <Link to={`/admin/category/edit/${item.id}`}>
                    
                      <button className="btn btn-outline-primary">Edit</button>
                    </Link>
                  </td>
                  <td>
                    <Link to={`/admin/category/delete/${item.id}`}>
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
        </>
    )
}
export default AdminCategory;


