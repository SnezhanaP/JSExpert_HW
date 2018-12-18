(function run() {
    var total = 0,
    	totalDices = "",
    	totalResult = "",
    	postfix = "<br>",
    	double = "Выпал дубль. Число ",
    	difference = "Большой разброс между костями. Разница составляет ",
    	firstDice = "Первая кость: ",
    	secondDice  = "  Вторая кость: ",
    	divResult = "end";

    getRndNumber = () => Math.floor((Math.random() * 6) + 1);
    setResult = (string, divId = "result") => divId === "result" ? totalDices += string : totalResult += string
    showDices = () => setResult (firstDice + first + secondDice + second + postfix);
    isBigDifference = () => {
    	if ((first < 3 && second > 4) || (second < 3 && first > 4)) {
    		setResult (difference + Math.abs(second - first) + postfix)
    	};
    };
    isNumbersEqual = () => {
    	if (first === second) {
    		setResult (double + first + postfix)
    	};
    };
    countTotal = () => total += first + second;
    saveTotal = () => total > 100 ? setResult ("Победа, вы набрали " + total + " очков", divResult) : setResult ("Вы проиграли, у вас " + total + " очков", divResult);
    function printResult() {
    	document.getElementById("result").innerHTML = totalDices;
    	document.getElementById(divResult).innerHTML = totalResult;
    }
   
    for (var i = 0; i < 15; i++) {
		var first = getRndNumber(),
			second = getRndNumber();
		if (i === 8 || i === 13) {
			continue;
		};
		showDices();
		isBigDifference();
		isNumbersEqual();
		countTotal();
	}

	saveTotal();
	printResult();
})();