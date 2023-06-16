let dice = [0, 0, 0, 0, 0];




document.getElementById("klik").onclick = function () { rollDices() };

function updateDiceOnScreen() {
    document.getElementById("dice-1").innerText = dice[0]
    document.getElementById("dice-2").innerText = dice[1];
    document.getElementById("dice-3").innerText = dice[2];
    document.getElementById("dice-4").innerText = dice[3];
    document.getElementById("dice-5").innerText = dice[4];
    document.getElementById("ones").innerText = calculateScoreForNumber(1);
    document.getElementById("twos").innerText = calculateScoreForNumber(2);
    document.getElementById("threes").innerText = calculateScoreForNumber(3);
    document.getElementById("fours").innerText = calculateScoreForNumber(4);
    document.getElementById("fives").innerText = calculateScoreForNumber(5);
    document.getElementById("sixes").innerText = calculateScoreForNumber(6);
    document.getElementById("chance").innerText = calculateScoreForChance();
    document.getElementById("fullhouse").innerText = calculateScoreForFullHouse();
    document.getElementById("threeofakind").innerText = calculateScoreForThreeOfAKind(dice);
    document.getElementById("fourofakind").innerText = calculateScoreForFourOfAKind(dice);
    document.getElementById("smallstraight").innerText = calculateScoreForSmallStraight(dice);
    document.getElementById("largestraight").innerText = calculateScoreForLargeStraight(dice);
    document.getElementById("yahtzee").innerText = calculateScoreForYahtzee(dice);

}

function rollDices() {
    dice = randomDices();
    updateDiceOnScreen();
}




function calculateScoreForNumber(num) {
    return num * countNumber(num);
}


function countNumber(num) {
    let result = 0;
    for (let index = 0; index < dice.length; index++) {
        if (dice[index] === num) {
            result++;
        }
    }
    return result;
}

function calculateScoreForChance() {
    let result = 0;
    for (let index = 0; index < dice.length; index++) {
        result = result + dice[index];
    }
    return result;
}

function calculateScoreForFullHouse() {
    if (calculateScoreForTwoPair(dice) == true && calculateScoreForThreeOfAKindFullHouse(dice) == true) {
        return 25;

    } else {

        return 0;
    }
}

function calculateScoreForTwoPair(diceValues) {
    const count = {};
    for (const value of diceValues) {
        count[value] = (count[value] || 0) + 1;
    }

    for (const value in count) {
        if (count[value] == 2) {
            return true;
        }


    }
    return false;
}
function calculateScoreForThreeOfAKindFullHouse(diceValues) {
    const count = {};
    for (const value of diceValues) {
        count[value] = (count[value] || 0) + 1;
    }

    for (const value in count) {
        if (count[value] == 3) {
            return true;
        }



    }
    return false;

}

function calculateScoreForThreeOfAKind(diceValues) {
    const count = {};
    for (const value of diceValues) {
        count[value] = (count[value] || 0) + 1;
    }

    for (const value in count) {
        if (count[value] >= 3) {
            return calculateScoreForChance();
        }
    }

    return 0;
}

function calculateScoreForFourOfAKind(diceValues) {
    const count = {};
    for (const value of diceValues) {
        count[value] = (count[value] || 0) + 1;
    }

    for (const value in count) {
        if (count[value] >= 4) {
            return calculateScoreForChance();
        }
    }

    return 0;
}

function calculateScoreForSmallStraight(diceValues) {
    if (diceValues.includes(1) && diceValues.includes(2) && diceValues.includes(3) && diceValues.includes(4)) {
        return 30;
    }


    if (diceValues.includes(2) && diceValues.includes(3) && diceValues.includes(4) && diceValues.includes(5)) {
        return 30;
    }


    if (diceValues.includes(3) && diceValues.includes(4) && diceValues.includes(5) && diceValues.includes(6)) {
        return 30;
    }

    return 0;
}

function calculateScoreForLargeStraight(diceValues) {
    if (diceValues.includes(1) && diceValues.includes(2) && diceValues.includes(3) && diceValues.includes(4) && diceValues.includes(5)) {
        return 40;
    }


    if (diceValues.includes(2) && diceValues.includes(3) && diceValues.includes(4) && diceValues.includes(5) && diceValues.includes(6)) {
        return 40;
    }

    return 0;
}



function calculateScoreForYahtzee(diceValues) {
    const count = {};
    for (const value of diceValues) {
        count[value] = (count[value] || 0) + 1;
    }

    for (const value in count) {
        if (count[value] >= 5) {
            return 50;
        }
    }

    return 0;
}



function randomDices() {
    let dice = [];
    for (let index = 0; index < 5; index++) {
        dice.push(Math.floor(Math.random() * 6) + 1);
    }
    return dice;
}