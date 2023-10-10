<?php


require_once './config.php';


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"));


    $firstName = $data->firstName;
    $lastName = $data->lastName;
    $email = $data->email;
    $password = $data->password;
    $Address = $data->address;
    $phone = $data->phoneNumber;
    $type = 0;



    $stmt = $conn->prepare("INSERT INTO users (firstname, lastname, email, password, address, phone, type)
                           VALUES (?, ?, ?, ?, ?, ?, ?)");
    $stmt->execute([$firstName, $lastName, $email, $password, $Address, $phone, $type]);


    if ($stmt->rowCount() > 0) {

        echo json_encode(['message' => 'Registration successful']);
    } else {

        echo json_encode(['message' => 'Registration failed']);
    }
} else {
    // Invalid request method
    echo json_encode(['message' => 'Invalid request method']);
}