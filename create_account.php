<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "minecraft_guide";

$conn = new mysqli($servername, $username, $password, $dbname);

if($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$user = trim($_POST['username']);
$pass = $_POST['password'];
$confirm = $_POST['confirm_password'];

if($pass !== $confirm) {
    die("Passwords do not match. <a href='create_account.html'> Try again</a>");
}

$hash = password_hash($pass, PASSWORD_DEFAULT);

$stmt = $conn->prepare("INSERT INTO users (username, password) VALUES (?, ?)");
$stmt->bind_param("ss", $user, $hash);

if($stmt->execute()) {
    echo "Account created successfully! <a href='login.html'>Go to Login</a>";
}else{
    echo "Error: " . $stmt->error. "<br><a href='create_account.html'>Try Again</a>";
}

$stmt->close();
?>