<?php

if(isset($_POST['data'])) {
	$array = $_POST['data'];
}

$pdo = new PDO('mysql:dbname=name;host=localhost', 'root', 'root', array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));

$requete = "INSERT INTO `session`(`list`) VALUES ('$array')";

$pdo->prepare($requete)->execute();


?>