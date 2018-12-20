let btn = document.getElementById("play"),
	player1 = document.getElementById("player1"),
	player2 = document.getElementById("player2"),
	winner = document.getElementById("result");
const firstResult = "камень",
	secondResult = "ножницы",
	thirdResult = "бумага",
	winnerText1 = "Выиграл первый игрок!",
	winnerText2 = "Выиграл второй игрок!",
	winnerText3 = "Ничья! Сыграйте еще раз.";

function getPlayerResult() {
    return Math.floor((Math.random() * 3) + 1);
}

function getNameById(player) {
	switch (player) {
		case 1:
			return firstResult;
			break;
		case 2:
			return secondResult;
			break;
		case 3:
			return thirdResult;
	}
}

function determineWinner(play1, play2) {
	if ((play1 === 1 && play2 === 2) || (play1 === 2 && play2 === 3) || (play1 === 3 && play2 === 1)) {
		return 1;
	} else if (play1 === play2) {
				return 3;
			} else {
					return 2;
				}
}

function printResult (print) {
	switch (print) {
		case 1:
			winner.innerHTML = winnerText1;
			break;
		case 2:
			winner.innerHTML = winnerText2;
			break;
		case 3:
			winner.innerHTML = winnerText3;
	}
}

function runGame() {
	let playerResult1 = getPlayerResult(),
		playerResult2 = getPlayerResult(),
		winnerNumber = determineWinner(playerResult1, playerResult2);

    player1.innerHTML = getNameById(playerResult1);
    player2.innerHTML = getNameById(playerResult2);

    printResult (winnerNumber);
    
}

btn.addEventListener("click", runGame);