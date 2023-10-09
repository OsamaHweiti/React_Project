<?php include './config.php' ?>

<?php
if (isset($_GET['id'])) {

    $id = $_GET['id'];
}
if (isset($_POST)) {

    $re = file_get_contents("php://input");
    $data = json_decode($re, true);
    $Fname = $data['fname'];
    $Lname = $data['lname'];
    $password = $data['password'];
    $email = $data['email'];
    $phone = $data['phone'];
    $type = $data['type'];
    $address = $data['address'];
} else {
    die('nothing to insert');
}

$stmt = $conn->prepare("UPDATE users SET firstname = :Fname, lastname = :Lname, email = :email, password = :password ,type = :type , address= :address  , phone =:phone WHERE id = :id");
$stmt->bindParam(':Fname', $Fname);
$stmt->bindParam(':Lname', $Lname);
$stmt->bindParam(':email', $email);
$stmt->bindParam(':password', $password);
$stmt->bindParam(':type', $type);
$stmt->bindParam(':address', $address);
$stmt->bindParam(':phone', $phone);
$stmt->bindParam(':id', $id);
$stmt->execute();
?>