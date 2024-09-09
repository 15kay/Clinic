<?php
$servername = "localhost";
$username = "id22051362_localhost";
$password = "Kgau123@M";
$dbname = "id22051362_dsitutoring";
$conn = new mysqli($servername, $username, $password, $dbname);
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

// Create a new connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Optionally, set the character set to UTF-8 for consistent encoding
$conn->set_charset("utf8");
?>