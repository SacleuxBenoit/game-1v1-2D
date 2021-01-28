let QuickAttackP1 = document.getElementById("QuickAttackP1");
let SlowAttackP1 = document.getElementById("SlowAttackP1");
let Execution = document.getElementById("Execution");
let HealP1 = document.getElementById("HealP1");

let manaP1 = 100;

function reduceLifeP1(min, max, reduceMana){
    let random = Math.floor((Math.random() * (max - min) + min));
    lifeP2 -= random;
    manaP1 -= reduceMana;

    showManaP1.textContent = manaP1 + " %";
    showLifeP2.textContent = lifeP2 + " %";

    checkLifeP1();
    verifyManaP1();
    nextPlayerP1();
}

function verifyManaP1(){
    if(manaP1 <= 9){
        Execution.disabled = true;
        SlowAttackP1.disabled = true;
    }
}

function quickAttackP1(){
    reduceLifeP1(6, 12, 0);
}

function slowAttackP1(){
    reduceLifeP1(40, 70, 10);
}

function exec(){
    reduceLifeP1(25,25, 20)
}

function getHealP1(){
    let min = 7;
    let max = 10;
    let random = Math.floor((Math.random() * (max - min) + min));
    lifeP1 += random;
    manaP1 -=10;
    showManaP1.textContent = manaP1 + " %";
    showLifeP1.textContent = lifeP1 + " %";
    nextPlayerP1();
    checkLifeP1();
}

function nextPlayerP1(){
    firstTitle.textContent = "Au tour du joueur 2"
    QuickAttackP1.disabled = true;
    SlowAttackP1.disabled = true;
    HealP1.disabled = true;
    Execution.disabled = true;

    QuickAttackP2.disabled = false;
    SlowAttackP2.disabled = false;
    HealP2.disabled = false;

    if(lifeP2 <= 0){
        result.textContent = "Le joueur 1 a gagné.";
        QuickAttackP1.disabled = true;
        SlowAttackP1.disabled = true;
        HealP1.disabled = true;
        QuickAttackP2.disabled = true;
        SlowAttackP2.disabled = true;
        HealP2.disabled = true;
        Execution.disabled = true;
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