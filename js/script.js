(function(){
	'use strict'
		var b = prompt("Введите логин", "?");
		if (b == "Админ") {
			var p = prompt("Введите пароль", "?");
			if (p == "Черный Властелин") {
				alert("Добро пожаловать!");
			} else if (p == null) {
				alert("Вход отменен");
			} else {
				alert("Пароль не верен");
			}
		} else if (b == null) {
			alert("Вход отменен");
		}
		else { 
			alert("Я Вас не знаю");
		}
})()