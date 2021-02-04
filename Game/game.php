<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/style.css">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>

    <h1 id="firstTitle"></h1>

    <div id="player1">
        <p id="pseudoP1"> <?php echo $_POST['firstPlayer'] ?></p>
        <p class="life" id="showLifeP1"></p>
        <p class="mana" id="showManaP1"></p>
        <button onclick="quickAttackP1()" id="QuickAttackP1">Attaque rapide</button>
        <button onclick="slowAttackP1()" id="SlowAttackP1">Attaque lente</button>
        <button onclick="getHealP1()" id="HealP1" disabled>Heal</button>
        <button onclick="exec()" id="Execution" disabled>Execution</button>
        <button onclick="skipP1()">Skip</button>
    </div>

    <div id="player2">
        <p id="pseudoP2"> <?php echo $_POST['secondPlayer'] ?> </p>
        <p class="life" id="showLifeP2"></p>
        <p class="mana" id="showManaP2"></p>
        <button onclick="quickAttackP2()" id="QuickAttackP2" disabled>Attaque rapide</button>
        <button onclick="slowAttackP2()" id="SlowAttackP2" disabled>Attaque lente</button>
        <button onclick="getHealP2()" id="HealP2" disabled>Heal</button>
        <button onclick="skipP2()">Skip</button>
    </div>

    <div>
        <p id="result"></p>
    </div>
    <div>
        <button onclick="reset()">Reset</button>
    </div>

    <script src="../js/script.js"></script>
    <script src="../js/firstPlayer.js"></script>
    <script src="../js/secondPlayer.js"></script>
</body>
</html>