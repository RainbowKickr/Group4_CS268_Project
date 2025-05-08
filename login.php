<?php
session_start();

$servername = "localhost";
$dbusername = "root";
$dbpassword = "";
$dbname = "minecraft_webpage";


$conn = new mysqli($servername, $dbusername, $dbpassword, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


$username = $_POST['username'];
$password = $_POST['password'];

//Lookup user
$sql = "SELECT * FROM users WHERE username = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $username);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 1) {
    $row = $result->fetch_assoc();
    //Check password
    if (password_verify($password, $row['password'])) {
        $_SESSION['username'] = $username;
        header("Location: homepage.html");
        exit();
    } else {
        echo "Invalid password.";
    }
} else {
    echo "No user found.";
}

$conn->close();
?>
