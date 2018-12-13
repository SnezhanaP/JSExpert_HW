var total = 0;
var elemResult = document.getElementById("result");
for (var i = 0; i < 15; i++) {
	var first = Math.floor((Math.random() * 6) + 1);
	var second = Math.floor((Math.random() * 6) + 1);
	if (i == 8 || i == 13) {
		continue;
	}
	elemResult.innerHTML += "Первая кость: " + first + "  Вторая кость: " + second + " <br>";
	if (first == second) {
		elemResult.innerHTML += "Выпал дубль. Число " + first + " <br><br>";
	} else {
		if ((first < 3 && second > 4) || (second < 3 && first > 4)) {
			elemResult.innerHTML += "Большой разброс между костями. Разница составляет " + Math.abs(second - first) + " <br><br>"
		}
	}
	total += first + second;
}
total > 100 ? elemResult.innerHTML += "<br>Победа, вы набрали " + total + " очков" :  elemResult.innerHTML += "<br>Вы проиграли, у вас " + total + " очков"