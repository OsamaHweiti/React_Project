<?php
require '../config.php';

if (isset($_FILES["image"])) {
    $file = $_FILES["image"];
  
    if ($file["error"] === UPLOAD_ERR_OK) {
        $uploadDirectory = '../../../public/images/';

  
        $uniqueFilename =  $file["name"];
  
        $targetFilePath = $uploadDirectory . $uniqueFilename;
  
        if (move_uploaded_file($file["tmp_name"], $targetFilePath)) {
            echo "File uploaded successfully. Stored as: " . $uniqueFilename;
  
            $stmt = $conn->prepare("INSERT INTO category (name, image) VALUES (:name, :image)");
            $stmt->bindParam(':name', $name);
            $stmt->bindParam(':image', $uniqueFilename);
            $name = $_POST['text'];
            if ($stmt->execute()) {
                echo "Data inserted into the database successfully.";
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
?>
