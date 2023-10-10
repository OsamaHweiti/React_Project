<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-type: application/json");

require_once './config.php';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"));
    $email = $data->email;
    $password = $data->password;

    $stmt = $conn->prepare("SELECT * FROM users WHERE email = ?");
    $stmt->execute([$email]);

    $user = $stmt->fetch();
    if ($user['password'] == $password) {
        echo json_encode(['success' => true, 'message' => 'Login successful', 'UserId' => $user['id'], "is_admin" => $user["type"]]);
    } else {
        // Passwords do not match, login failed
        echo json_encode(['success' => false, 'message' => 'Login failed. Please check your credentials.']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid request method']);
}