<?php
$name = $_POST['name'];
$email = $_POST['name'];
$phone = $_POST['number'];
$program = $_POST['Program'];
$consulation = $_POST['Consulation'];
$program = $_POST['Program'];
$coment = $_POST['GroupConsulation'];

$to = "psiolawebsite@gmail.com";
$date = date("d.m.Y");
$time = date("h:i");
$from = $email;
$subject = "Заявка c сайта";


$msg = "
    Имя: $name /n
    Номер: $phone /n
    Индивидуальные консультации: $consulation /n
    Обучающая программа: $program /n
    Групповая терапия: $coment /n
    Номер: $phone";

 if(mail($to, $subject, $msg, "From: $from ")) {
		header('location: index.html');
	} 
	

?>