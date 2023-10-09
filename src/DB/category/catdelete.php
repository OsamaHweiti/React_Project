

<?php 

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header("Content-type: application/json");
//  $id = $_GET['id'];
//  echo $id;
require '../config.php';
if (isset($_GET['id'])) {
    // $data = json_decode(file_get_contents("php://input"), true);
    $id = $_GET['id'];
    echo $id;
    
 
    error_log("Received ID: " . $id);

    $sql = 'DELETE FROM category WHERE id = :id';
    
    $statement = $conn->prepare($sql);
    // $statement->bindParam(':id', $id, PDO::PARAM_INT);
    $statement->bindParam(':id', $id);

    if ($statement->execute()) {
        echo json_encode(array('message' => 'Category Deleted successfully '));
    } else {
      
        error_log("Error deleting category: " . json_encode($statement->errorInfo()));
    }
}
?>