<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header("Content-type: application/json");

require_once './config.php';


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"));


    $firstName = $data->firstName;
    $lastName = $data->lastName;
    $email = $data->email;
    $password = password_hash($data->password, PASSWORD_DEFAULT);
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