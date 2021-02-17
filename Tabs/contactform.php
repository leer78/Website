<?php

if (isset($_POST['submit'])){
    echo "My first PHP script!";
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $mailFrom = $_POST['mail'];
    $message = $_POST['message'];

    $emailTo = "email2074@gmail.com";
    $headers = "From: ";
    $txt = "bruh";
    /*$txt = "You have recieved an e-mail from ".$name."\n\n".$message;*/
    if(mail($emailTo, $subject, $txt, $headers)){
        echo "<h1>Sent Successfully! Thank you!</h1>";
    }
    header("contact.html");
}
?>