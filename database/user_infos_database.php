<?php
include('connection_database.php');

$addUser = $bdd->prepare('INSERT INTO player_infos(firstPlayer,secondPlayer) VALUES(:firstPlayer, :secondPlayer)');
$addUser->bindParam(':firstPlayer', $_POST['firstPlayer']);
$addUser->bindParam(':secondPlayer', $_POST['secondPlayer']);
$addUser->execute();
?>