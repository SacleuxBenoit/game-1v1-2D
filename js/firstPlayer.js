let QuickAttackP1 = document.getElementById("QuickAttackP1");
let SlowAttackP1 = document.getElementById("SlowAttackP1");
let HealP1 = document.getElementById("HealP1");
let SkipP1 = document.getElementById("SkipP1");

let manaP1 = 100;

function displayPlayer1(){
    showManaP1.textContent = manaP1 + " %";
    showLifeP2.textContent = lifeP2 + " %";
}
function reduceLifeP1(min, max, reduceMana){
    let random = Math.floor((Math.random() * (max - min) + min));
    lifeP2 -= random;
    manaP1 -= reduceMana;

    displayPlayer1();
    checkLifeP1();
    verifyManaP1();
    nextPlayerP1();
}

function verifyManaP1(){
    if(manaP1 <= 9){
        SlowAttackP1.disabled = true;
        HealP1.disabled = true;
    }
}

function quickAttackP1(){
    reduceLifeP1(9, 12, 0);
}

function slowAttackP1(){
    reduceLifeP1(12, 20, 10);
}

function getHealP1(){
    let min = 15;
    let max = 25;
    let random = Math.floor((Math.random() * (max - min) + min));
    lifeP1 += random;
    manaP1 -=20;
    showManaP1.textContent = manaP1 + " %";
    showLifeP1.textContent = lifeP1 + " %";
    checkLifeP1();
    verifyManaP1();
    nextPlayerP1();
}

function skipP1(){
    disableButtonP1();
    enableButtonP2();
    firstTitle.textContent = "Au tour du joueur 2"
}

function nextPlayerP1(){
    firstTitle.textContent = "Au tour du joueur 2"
    disableButtonP1();
    enableButtonP2();

    if(lifeP2 <= 0){
        firstTitle.textContent = "Le joueur 1 a gagné.";
        disableButtonP1();
        disableButtonP2();
        showLifeP2.textContent = " 0 %"
    }
}

function checkLifeP1(){
    if(lifeP1 <= 100 && lifeP1 >= 76){
        showLifeP1.style.background = "greenyellow"
    }

    if(lifeP2 <= 75 && lifeP2 >= 26){
        showLifeP2.style.background = "orange"
        HealP2.disabled = false;
    }
    else if(lifeP2 <= 25 && lifeP2 >= 1){
        showLifeP2.style.background = "red"
    }
}

function disableButtonP1(){
    QuickAttackP1.disabled = true;
    SlowAttackP1.disabled = true;
    HealP1.disabled = true;
    SkipP1.disabled = true;
}

function enableButtonP1(){
    QuickAttackP1.disabled = false;
    SlowAttackP1.disabled = false;
    HealP1.disabled = false;
    SkipP1.disableButtonP1 = false;
}