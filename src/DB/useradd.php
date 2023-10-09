<?php
require './config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);


    if (isset($data['fname'], $data['lname'], $data['email'], $data['phone'], $data['password'], $data['address'], $data['type'])) {
        $Fname = $data['fname'];
        $Lname = $data['lname'];
        $password = $data['password'];
        $email = $data['email'];
        $phone = $data['phone'];
        $type = $data['type'];
        $address = $data['address'];

        $stmt = $conn->prepare("INSERT INTO users (firstname, lastname, email, password, type, address , phone) VALUES (:Fname, :Lname, :email, :password, :type, :address , :phone)");

        $stmt->bindParam(':Fname', $Fname);
        $stmt->bindParam(':Lname', $Lname);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':password', $password);
        $stmt->bindParam(':type', $type);
        $stmt->bindParam(':phone', $phone);
        $stmt->bindParam(':address', $address);

      
        if ($stmt->execute()) {
            echo json_encode(array('message' => 'User added successfully'));
        } else {
            echo json_encode(array('error' => 'Error adding user'));
        }
    } else {
        echo json_encode(array('error' => 'Missing required fields'));
    }
} else {
    echo json_encode(array('error' => 'Invalid request method'));
}
?>