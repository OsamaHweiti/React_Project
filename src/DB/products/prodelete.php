<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header("Content-type: application/json");

require '../config.php';

if (isset($_GET['id'])) {
    $id = $_GET['id'];

    try {
        $sql = 'DELETE FROM products WHERE id = :id';
        $statement = $conn->prepare($sql);
        $statement->bindParam(':id', $id, PDO::PARAM_INT);

        if ($statement->execute()) {
            echo json_encode(array('message' => 'Product deleted successfully'));
        } else {
            http_response_code(500); // Set a 500 Internal Server Error status code
            echo json_encode(array('error' => 'Unable to delete product'));
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
