<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header("Content-type: application/json");
require '../config.php';

if (isset($_GET['category_id']) && isset($_GET['id'])) {
    $category_id = $_GET['category_id'];
    $current_product_id = $_GET['id'];

    try {
        // Fetch similar products by category_id and exclude the current product by id
        $query = "SELECT * FROM products WHERE category_id = :category_id AND id != :id";
        $stmt = $conn->prepare($query);
        $stmt->bindParam(':category_id', $category_id, PDO::PARAM_INT);
        $stmt->bindParam(':id', $current_product_id, PDO::PARAM_INT);
        $stmt->execute();

        $data = $stmt->fetchAll(PDO::FETCH_ASSOC);

        echo json_encode($data);
    } catch (PDOException $e) {
        http_response_code(500); // Set a 500 Internal Server Error status code
        echo json_encode(array('error' => 'Database error: ' . $e->getMessage()));
    }
} else {
    http_response_code(400); // Set a 400 Bad Request status code
    echo json_encode(array('error' => 'Missing category_id or id'));
}
?>
