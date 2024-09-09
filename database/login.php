<?php
include 'database/db.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $idNumber = $_POST['idNumber'];
    $password = $_POST['password'];
    $userType = $_POST['userType']; // New field for user type

    // Prepare SQL statement to prevent SQL injection
    $stmt = $conn->prepare("SELECT password_hash FROM Users WHERE id_number = ? AND user_type = ?");
    $stmt->bind_param("ss", $idNumber, $userType);
    $stmt->execute();
    $stmt->store_result();

    // Check if the user exists
    if ($stmt->num_rows > 0) {
        $stmt->bind_result($passwordHash);
        $stmt->fetch();

        // Verify the password
        if (password_verify($password, $passwordHash)) {
            echo "Login successful!";
            // Start session and store user data if necessary
        } else {
            echo "Invalid credentials.";
        }
    } else {
        echo "No user found with that ID number and user type.";
    }

    $stmt->close();
    $conn->close();
}
?>
