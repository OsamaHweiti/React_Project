import React, { useEffect } from "react";
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function Deletepro() {
    const { id } = useParams();
    const navigate = useNavigate();
    console.log('the id: ' + id);
    useEffect(() => {
        const url = `http://localhost/React_Project/src/DB/products/prodelete.php?id=${id}`;



        axios.delete(url)
            .then(response => {
                console.log("prod deleted:", response.data);
                navigate('/admin/product');

            })
            .catch(error => {
                console.error("Error:", error);
            });
    }, [id, navigate]);

    return (
        <div>
            Deleting User...
        </div>
    );
}

  
export default Deletepro;