let showLifeP1 = document.getElementById("showLifeP1");
let showLifeP2 = document.getElementById("showLifeP2");

let showManaP1 = document.getElementById("showManaP1");
let showManaP2 = document.getElementById("showManaP2");

let firstTitle = document.getElementById('firstTitle');

let lifeP1 = 100;
let lifeP2 = 100;

function displayText(){
    firstTitle.textContent = "Le joueur 1 commence.";
    displayP1();
    displayP2();
}

function displayP1(){
    showLifeP1.textContent = lifeP1 + " %";
    showManaP1.textContent = 100 + " %";
}

function displayP2(){
    showLifeP2.textContent = lifeP2 + " %";
    showManaP2.textContent = 100 + " %";
}

displayText();

function resetP1(){
    lifeP2 = 100;
    manaP2 = 100;

    QuickAttackP1.disabled = false;
    SlowAttackP1.disabled = false;
    HealP1.disabled = true;

    showManaP2.textContent = manaP2 + " %";
    showLifeP2.textContent = lifeP2 + " %";
    showLifeP2.style.background = "greenyellow";

}

function resetP2(){
    lifeP1 = 100;
    manaP1 = 100;

    disableButtonP2();

    showManaP1.textContent = manaP1 + " %";
    showLifeP1.textContent = lifeP1 + " %";
    showLifeP1.style.background = "greenyellow"
}

function reset(){
    resetP1();
    resetP2();
    displayText();
}