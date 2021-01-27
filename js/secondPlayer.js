let QuickAttackP2 = document.getElementById("QuickAttackP2");
let SlowAttackP2 = document.getElementById("SlowAttackP2");
let HealP2 = document.getElementById("HealP2");

let manaP2 = 100;

function reduceLifeP2(min, max, reduceMana){
    let random = Math.floor((Math.random() * (max - min) + min));
    lifeP1 -= random;

    manaP2 -= reduceMana;
    showManaP2.textContent = manaP2 + " %";
    showLifeP1.textContent = lifeP1 + " %";

    checkLifeP2();
    verifyManaP2();
    nextPlayerP2();
}

function verifyManaP2(){
    if(manaP2 <= 9){
        SlowAttackP2.disabled = true;
    }
}

function quickAttackP2(){
    reduceLifeP2(6, 12, 0);
}

function slowAttackP2(){
    reduceLifeP2(4, 15, 10);
}

function getHealP2(){
    let min = 7;
    let max = 10;
    let random = Math.floor((Math.random() * (max - min) + min));
    lifeP2 += random;
    manaP2 -=10;
    showManaP2.textContent = manaP2 + " %";
    showLifeP2.textContent = lifeP2 + " %";
    nextPlayerP2();
}

function nextPlayerP2(){
    firstTitle.textContent = "Au tour du joueur 1"
    QuickAttackP2.disabled = true;
    SlowAttackP2.disabled = true;
    HealP2.disabled = true;

    QuickAttackP1.disabled = false;
    SlowAttackP1.disabled = false;
    HealP1.disabled = false;

    if(lifeP2 <= 25){
        Execution.disabled = false;
    }
}

function checkLifeP2(){
    if(lifeP1 <= 75){
        showLifeP1.style.background = "orange"
        HealP1.disabled = false;
    }
    if(lifeP1 <= 25){
        showLifeP1.style.background = "red"
    }
    if(lifeP1 <= 0){
        result.textContent = "Le joueur 2 a gagné.";
        QuickAttackP2.disabled = true;
        SlowAttackP2.disabled = true;
        HealP2.disabled = true;
        QuickAttackP1.disabled = true;
        SlowAttackP1.disabled = true;
        HealP1.disabled = true;
        showLifeP1.textContent = " 0 %"
}
}