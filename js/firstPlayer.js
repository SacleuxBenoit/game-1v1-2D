let QuickAttackP1 = document.getElementById("QuickAttackP1");
let SlowAttackP1 = document.getElementById("SlowAttackP1");
let Execution = document.getElementById("Execution");
let HealP1 = document.getElementById("HealP1");

let manaP1 = 100;

function reduceLifeP1(min, max, reduceMana){
    let random = Math.floor((Math.random() * (max - min) + min));
    let currentLifeP2 = lifeP2 -= random;
    manaP1 -= reduceMana;

    showManaP1.textContent = manaP1 + " %";
    showLifeP2.textContent = currentLifeP2 + " %";

    if(currentLifeP2 <= 75 && currentLifeP2 >= 26){
        showLifeP2.style.background = "orange"
        HealP2.disabled = false;
    }
    if(currentLifeP2 <= 25 && currentLifeP2 >= 1){
        showLifeP2.style.background = "red"
        Execution.disabled = false
    }
    if(currentLifeP2 <= 0){
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
    reduceLifeP1(1, 20, 10);
}

function exec(){
    reduceLifeP1(25,25, 20)
}

function healP1(){
    let min = 7;
    let max = 10;
    let random = Math.floor((Math.random() * (max - min) + min));
    let currentLifeP1 = lifeP1 += random;
    showLifeP1.textContent = currentLifeP1 + " %";

    if(currentLifeP1 >= 100){
        HealP1.disabled = true
    }
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
}