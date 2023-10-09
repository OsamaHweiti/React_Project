

import { useParams, useNavigate } from 'react-router-dom';
import { useState } from "react";
import axios from 'axios';
import Header from '../admincomp/Header';
import Sidebar from '../admincomp/Sidebar';
function EditCatForm(){

    const {id} = useParams();
    const [selectedFile, setSelectedFile] = useState(null);
    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate();
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };
    const onFileChange = (event) => {
      setSelectedFile(event.target.files[0]);
    };
  
    const onInputChange = (event) => {
      setInputValue(event.target.value);
    };

    const onFileUpload = (e) => {
        e.preventDefault();
      if (selectedFile) {
        const formData = new FormData();
        formData.append('image', selectedFile);
        formData.append('text', inputValue);
        axios.post(`http://localhost/projectreact/src/DB/category/catedit.php?id=${id}`, formData)
          .then((response) => {
            console.log('File uploaded:', response.data);
            navigate('/admin/category');
          });
      } else {
        console.log('No file selected.');
      }
    };
    
  return (
    <div className="grid-container">
    <Header OpenSidebar={OpenSidebar} />
    <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
    <div id="editdiv"  className='m-5'>
     <div className="add-user-form">
            <h4>Edit Category</h4>
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
                  name="Edit"
                />
              </form>
            </div>
          </div>
          
     
    </div>
    </div>
  );
}

export default EditCatForm;
