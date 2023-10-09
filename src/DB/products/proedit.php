<?php
require '../config.php';

if (isset($_FILES["image"]) && isset($_FILES["image"]["error"])) {
    $file = $_FILES["image"];
    $id = $_GET['id'];
    if ($file["error"] === UPLOAD_ERR_OK) {
        $uploadDirectory = '../../../public/images/';

        $uniqueFilename = $file["name"];

        $targetFilePath = $uploadDirectory . $uniqueFilename;

        if (move_uploaded_file($file["tmp_name"], $targetFilePath)) {
            echo "File uploaded successfully. Stored as: " . $uniqueFilename;

            $stmt = $conn->prepare("UPDATE products SET name = :name, image = :image , description=:description,price=:price , category_id=:category_id WHERE id = :id");

            $stmt->bindParam(':name', $name);
            $stmt->bindParam(':description', $description);
            $stmt->bindParam(':price', $price);
            $stmt->bindParam(':category_id', $category_id);
            $stmt->bindParam(':image', $uniqueFilename);
            $name = $_POST['name'];
            $description = $_POST['description'];
            $price = $_POST['price'];
            $category_id = $_POST['category_id']; 
            $stmt->bindParam(':id', $id);

                if ($stmt->execute()) {
                echo "Data updated successfully.";
            } else {
                echo "Error updating data  the database.";
            }
        } else {
            echo "Sorry, there was an error uploading your file.";
        }
    } else {
        echo "Upload error. Error code: " . $file["error"];
    }
} else {
    echo "No file uploaded.";
}
?>
