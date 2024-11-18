<?php
    $email = htmlspecialchars($_POST['email_address']);
    $name = htmlspecialchars($_POST['name']);
    $phone = htmlspecialchars($_POST['phone']);

    echo "You have submitted the form successfully.<br>";
    echo "Email: " . $email . "<br>";
    echo "Name: " . $name . "<br>";
    echo "Phone: " . $phone;
?>