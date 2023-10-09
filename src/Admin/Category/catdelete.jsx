import React, { useEffect } from "react";
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function Deletecat() {
    const { id } = useParams();
    const navigate = useNavigate();
    console.log('the id: ' + id);
    useEffect(() => {
        const url = `http://localhost/projectreact/src/DB/category/catdelete.php?id=${id}`;



        axios.delete(url)
            .then(response => {
                console.log("category deleted:", response.data);
                navigate('/admin/category');

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

        // const url = `http://localhost/projectreact/src/DB/userdelete.php?id=${id}`;
export default Deletecat;