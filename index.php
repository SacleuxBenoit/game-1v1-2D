<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/style.css">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h1>Accueil</h1>

<form action="./Game/game.php" method="POST">

    <div>
        <h2>Player 1</h2>
        <label for="firstPlayer">Pseudo : </label>
        <input type="text" id="firstPlayer" name="firstPlayer">
    </div>

    <div>
        <h2>Player 2</h2>
        <label for="secondPlayer">Pseudo : </label>
        <input type="text" id="secondPlayer" name="secondPlayer">
    </div>

    <input type="submit" value="Submit">

</form>


    <script src="js/script.js"></script>
</body>
</html>