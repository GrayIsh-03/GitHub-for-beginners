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
	alert('Learn to count');
} */

/*
function CheckAge(Cond){
	let age=prompt('Enter how old are you','')
return (age>18) ? true : confirm('Did the parents allow it?');
}
alert(CheckAge()); */

function CheckAge(Cond){
	let age=prompt('Enter how old are you','')
return (age>18) || confirm('Did the parents allow it?');
}
alert(CheckAge());