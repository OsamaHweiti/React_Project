<?php 
   header('Access-Control-Allow-Origin: *');
   header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
   header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
   header("Content-type: application/json");
$db = 'mysql:host=localhost;dbname=Jewelry'; 
$username = "root";
$password = "";

try {
    $conn = new PDO($db, $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
} catch (PDOException $e) {
    "Connection failed: " . $e->getMessage();
}
?>