<?php
include('connection_database.php');

if(!empty($_POST['firstPlayer']) && !empty($_POST['secondPlayer'])){
    $addUser = $bdd->prepare('INSERT INTO player_infos(firstPlayer,secondPlayer) VALUES(:firstPlayer, :secondPlayer)');
    $addUser->bindParam(':firstPlayer', $_POST['firstPlayer']);
    $addUser->bindParam(':secondPlayer', $_POST['secondPlayer']);
    $addUser->execute();
}else{
    header('Location: ../index.php');
}

?>