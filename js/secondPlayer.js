let QuickAttackP2 = document.getElementById("QuickAttackP2");
let SlowAttackP2 = document.getElementById("SlowAttackP2");
let HealP2 = document.getElementById("HealP2");
let SkipP2 = document.getElementById("SkipP2");

let manaP2 = 100;

function displayPlayer2(){
    showManaP2.textContent = manaP2 + " %";
    showLifeP1.textContent = lifeP1 + " %";
}

function reduceLifeP2(min, max, reduceMana){
    let random = Math.floor((Math.random() * (max - min) + min));
    lifeP1 -= random;
    manaP2 -= reduceMana;

    displayPlayer2();
    checkLifeP2();
    verifyManaP2();
    nextPlayerP2();
}

function verifyManaP2(){
    if(manaP2 <= 9){
        SlowAttackP2.disabled = true;
        HealP2.disabled = true;
    }
}

function quickAttackP2(){
    reduceLifeP2(9, 12, 0);
}

function slowAttackP2(){
    reduceLifeP2(12, 20, 10);
}

function getHealP2(){
    let min = 15;
    let max = 25;
    let random = Math.floor((Math.random() * (max - min) + min));
    lifeP2 += random;
    manaP2 -=20;
    showManaP2.textContent = manaP2 + " %";
    showLifeP2.textContent = lifeP2 + " %";
    nextPlayerP2();
    checkLifeP2();
    verifyManaP2();
}

function skipP2(){
    disableButtonP2();
    enableButtonP1();
    Execution.disabled = true;
    SkipP1.disabled = false;
    firstTitle.textContent = "Au tour du joueur 1"
}

function nextPlayerP2(){
    firstTitle.textContent = "Au tour du joueur 1"
    disableButtonP2();
    enableButtonP1();

    if(lifeP2 <= 25){
        Execution.disabled = false;
    }
}

function checkLifeP2(){
    if(lifeP2 <= 100 && lifeP2 >= 76){
        showLifeP2.style.background = "greenyellow"
    }
    
    if(lifeP1 <= 75){
        showLifeP1.style.background = "orange"
        HealP1.disabled = false;
    }
    if(lifeP1 <= 25){
        showLifeP1.style.background = "red"
    }
    if(lifeP1 <= 0){
        result.textContent = "Le joueur 2 a gagné.";
        disableButtonP1();
        disableButtonP2();
        showLifeP1.textContent = " 0 %"
    }
}

function disableButtonP2(){
    QuickAttackP2.disabled = true;
    SlowAttackP2.disabled = true;
    HealP2.disabled = true;
    SkipP2.disabled = true;
}

function enableButtonP2(){
    QuickAttackP2.disabled = false;
    SlowAttackP2.disabled = false;
    HealP2.disabled = false;
    SkipP2.disabled = false;

    if(manaP2 <= 19 && manaP2 >=10){
        HealP2.disabled = true;
    }else if(manaP2 <= 9){
        HealP2.disabled = true;
        SlowAttackP2.disabled = true;
    }
}