<?php require '../config.php' ?>
<?php 
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header("Content-type: application/json");

if (isset($_GET['id'])) {
    $id = $_GET['id'];

    try {
        // Use a prepared statement to avoid SQL injection
        $query = "SELECT * FROM products WHERE id = :id";
        $stmt = $conn->prepare($query);
        $stmt->bindParam(':id', $id, PDO::PARAM_INT);
        $stmt->execute();
        
        // Fetch the product data
        $data = $stmt->fetch(PDO::FETCH_ASSOC);
        
        // Check if a product with the given ID exists
        if ($data) {
            echo json_encode($data);
        } else {
            http_response_code(404); // Set a 404 Not Found status code
            echo json_encode(array('error' => 'Product not found'));
        }

    } catch (PDOException $e) {
        http_response_code(500); // Set a 500 Internal Server Error status code
        echo json_encode(array('error' => 'Database error: ' . $e->getMessage()));
    }
} else {
    http_response_code(400); // Set a 400 Bad Request status code
    echo json_encode(array('error' => 'Missing product ID'));
}
?>
