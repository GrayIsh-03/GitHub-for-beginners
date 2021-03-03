/* let name = prompt('Введите Ваше имя', '');
alert(`${name} Добро пожаловать`);

let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);
alert(+a + +b); 
преобразование строки в число, c помощью унарного оператора + 
из 12 получим 3 при сложении. 
*/

/* let nameJS = prompt('Какое официальное название JS', '');
let message = (nameJS == "ECMAScript") ? 'Правильно':
(nameJS == 'ECMAscript') ? 'Правильно':
(nameJS == 'EcmaScript') ? 'Правильно':
'Не знаете? ECMAScript';	
alert(message); 
С помощью условного оператора ? создаем несколько условий
без использования else.
*/

/* let nameJS = prompt('Какое официальное название JS', '');
if (nameJS == 'ECMAScript') {
	alert('Правильно!');}
	else {
		alert("Не знаете? ECMAScript.");
	} 
	*/

	/* let randNUM = prompt('Введите число', '');
	let rid = (randNUM == 0) ? '0':
	(randNUM > 0) ? '1':
	(randNUM < 0) ? '-1':
	'Введите целое число'
	alert(rid);
	*/

/*let randNUM = prompt('Введите число', 0);
if (randNUM > 0) {
	alert(1);
} else if (randNUM < 0) {
	alert(-1);
} else {
	alert(0);
}
*/

/* let result;
let a = -12;
let b = prompt('Введите число', '');
result = (a + +b > 4) ? 'Много': 'Malo';
alert(result);
*/

/* let message;
let login = prompt('Enter login', '');
message = (login == 'Sotrudnik') ? 'Hi' :
(login == 'Director') ? 'Hello' :
(login == '') ? 'No login' :
'';
alert(message);
*/

/* let age;
age = prompt('enter number', '');
if (age >= 14 && age <= 90) {
	alert(true);
} else {
	alert(false);
} проверка числа, входящего в диапозон от 14 до 90
*/
/* let age;
age = prompt('enter number', '');
if (age <= 14 || age >= 90) {
	alert(true);
} else {
	alert(false);
} проверка числа, не входящего в диапозон от 14 до 90
*/

/* let admin = prompt('who is there?', '');
let password;

if (admin == 'admin') {

password = prompt('enter to password', '');

if (password == 'I am chief') {
	alert('Hello');
} else if (password == '' || password == null) {
	alert('Otmena');
} else {
	alert('invalid password');
}

} else if (admin == '' || admin == null) {
		alert(' Otmena');
	} else {
		alert('i don,t know you');
	} Ввод логина, если верно ввод пароля, делаем с использоанием
	вложенного условия  if, else if
	*/
/*
let pass;
let login = prompt ('login please', '');
(login == null || login == '') ? alert ('Canceled by user') :
(login != 'Admin') ? alert ('Unknown user') :
(pass = prompt ('password', '')) && (pass == 'Main') ? alert ('Hello') :
(pass == null || pass == '') ? alert ('Canceled') :
alert ('Wrong password'); */

/*
let range=20;
let checkCond;
nextPrime:
for (checkCond=2;checkCond<=range;checkCond++){

	for (let divider=2;divider<checkCond;divider++){
		if (checkCond%divider==0) continue nextPrime;
	}
alert(checkCond);
} */

/*
let browser;
browser=prompt('enter the browser used', '');
if (browser=="Edge") {
	alert('You`ve got the Edge!');
} else if (browser=='Chrome'
	||browser=='FireFox'
	||browser=='Safari'
	||browser=='Opera') {
	alert('Okay we support these browser too');
} else {
	alert('We hope that this page looks ok!');
} */

/*
let number=prompt('enter to number between zero and three','');
switch(number) {
	case '0':
	alert('You enter to number zero');
	break;
	case '1':
	alert('You enter to number one');
	break;
	case 2:
	alert('You enter to number two');
	break;
	case '3':
	alert('You enter to number three');
	break;
	default:
	alert('Learn to count'); Вводим число от 1 до 3, выполнится код соответствующий значению switch
} */

/*
function CheckAge(Cond){
	let age=prompt('Enter how old are you','')
return (age>18) ? true : confirm('Did the parents allow it?');
}
alert(CheckAge()); Проверка возраста, если больше 18 то возвращает
истину, если <= спрашивает разрешение родителей и возвращает значение*/

/*
function CheckAge(Cond){
	let age=prompt('Enter how old are you','')
return (age>18) || confirm('Did the parents allow it?');
}
alert(CheckAge()); Проверка возраста, если больше 18 то возвращает
истину, если <= спрашивает разрешение родителей и возвращает значение*/

/*
function getMinNumb (a,b){
return (a>b) ? b: a;
}
getMinNumb(2,5);
alert(getMinNumb(1,1)); Возвращает минимальное значение из двух чисел */

/*
function pow(x, n) {
  let result = x;
  for (let i = 1; i < n; i++) {
    result *= x;
  }
  return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
  alert(`Степень ${n} не поддерживается, используйте натуральное число`);
} else {
  alert( pow(x, n) );
} */

/*
let ask = confirm('Do you Agree?', '')
	 , reponse = (ask == true) ?
	 () => alert('You agreed') :
	 () => alert('You canceled the execution');
	 reponse(); */

	/* let user = {
	 	name: 'John',
	 };

	 user.surname = 'Smith';
	 user.name = 'Pete';
	 alert(user.surname);
	 delete user.name;
	 alert(user.name); */

	 /*
	let shedule = {};
	 function isEmpty(obj) {

	 	for (let key in shedule) {
	 		return false;
	 	}
	 	return true;

	 }

	 alert(isEmpty());
	 shedule.name = 'Foma';
	 alert(isEmpty());  Проверка на пустоту объекта*/

/*
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

function SumSalar(clear){
	sum = +salaries.John + +salaries.Ann + 
	+salaries.Pete;
	 for (clear in salaries) {
	 	return sum;
	}
	return 0; my first option

	let sum = 0;
	for (clear in salaries){
		sum += salaries[clear];
	}
	return sum;
}
alert(SumSalar());*/

/*
let menu = {
	wight: 400,
	height: 600,
	title: 'My menu',
};
function multiplyNumeric() {

	for (let key in menu) {
		if (typeof menu[key] == 'number') {
			menu[key] *= 2;
		}
	}

}

multiplyNumeric();

for (let key in menu) {
	alert(menu[key]);
} */
