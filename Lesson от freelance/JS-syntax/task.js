'use strict';
/*							FIRST BLOCK
let name
  , admin;
 name = 'Jon';
 name = admin; // undefined
 name = 'Jon';
 admin = name;
 alert(admin);

 let ourPlanetName
   , currentUserName; // describe the variable in more detail

 function someCode(BIRTHDAY){
 	return 2021 - 1990;
 }
 const BIRTHDAY = '20.10.1990'; // The value is know before calculation
 const age = someCode(BIRTHDAY); // Calculated when the script is executed

 alert(`'Hello' + ${name}`); // 'Hello' + Jon
 alert(`${'Hello' + name}`); // HelloJon
 alert(`Hi, ${name}!`); // Hi, Jon!
 alert(`Result: ${(2+1/2)**2}`); // Result: 6.25

 alert(typeof null); // object - This is an officially recognized error
 alert(typeof (alert)); // function - there is no special type "function" in JavaScript, functions are of object type
 alert(typeof Math); // it is a built-in object that provides math operations and constants

let userName = prompt('Enter your name', '');
alert(userName);
*/


/*                   SECOND BLOCK
let value = Math;
alert(typeof value); // Type of object
value = String(value);
alert(typeof value); // Type of String
// Any type is explicitly converted to string

let type = (`${value} + NaN`); // [object Math] + NaN
alert(type);
type = value + NaN; // [object Math]NaN
alert(type);

let str = '23ZG';
let num = Number(str); // NaN
let bool = Boolean(str); // true

str = undefined;
num = Number(str); // NaN
bool = Boolean(str); // false

str = null;
num = Number(str); // 0
bool = Boolean(str); // false

str = '    ';
num = Number(str); // 0
bool = Boolean(str); // true
str = '';
bool = Boolean(str); // false
num = Number(str); // 0
str = '0';
bool = Boolean(str); // true

str = "123";
alert(typeof str); // string
num = Number(str); // becomes a number 123
alert(typeof num); // number
num += str; // 123123
num = Number(str);
num += 123; // 246 
*/

/*                  THIRD BLOCK

let counter = 9;
counter++; // ++counter;
// постф. и преф. форма при прим-нии к переменной 
// делают одно и тоже, разницы нет
alert(counter++); // = 10 в функ-ю alert возвр-тся старое знач
// alert(++counter) = 11 в функ-ю alert возвр-тся новое знач
alert(counter); // = 11 в сам counter записывается новое значение

let a = counter++;
alert(a); // = 11 в перем. а возвр-тся старое знач самого counter
// a = ++counter; = 12 сразу будет записано новое знач для перем. а
alert(counter); // = 12 в сам counter записывается новое значение

let f = "\t \n" - 2; // пробельные символы игнорируются \t \n
alert(f); // = -2
f = "\t 6\n" - 2; // = 4

let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);
alert(a + b); // 12
alert(+a + +b); // 3, можно сделать через +prompt


let i = 0;
while (++i < 5) alert( i ); // от 1 до 4

let i = 0;
while (i++ < 5) alert( i ); // от 1 до 5

for (let i = 0; i < 5; ++i) alert( i ); // от 0 до 4

for (let i = 0; i < 5; i++) alert( i ); // от 0 до 4
*/


/*                  FOURTH BLOCK
let nameJS = prompt('What is the "official" name for JavaScript?', '');
if (nameJS == 'ECMAScript') {
	alert('Right.');
} else {
	alert('Don,t you know? ECMAScript.');
}


let integer = +prompt('Enter the number', '');
if (integer > 0) {
	alert(1);
} else if (integer < 0) {
	alert(-1);
} else {
	alert(0);
}


let a = 1
  , b = 20
  , result;
result = (a + b < 4) ? 'few' : 'many';
alert(result);


let login = prompt('Enter your login', '')
  , message;
message = (login == 'Employee') ? 'Hi' :
(login == 'Director') ? 'Hello' :
(login == '') ? 'No login' :
'Action canceled';
alert(message);
*/


/*                  FIFTH BLOCK

let age = +prompt('Enter your age', '');

	if (age >= 14 && age <= 90) {
	alert(true);
	} else {
	alert(false);
	}

	if (age <= 14 || age >= 90) {
	alert(true);
	} else {
	alert(false);
	}

	if (!(age >= 14) || !(age <= 90)) {
	alert(true);
	} else {
	alert(false);
	}
	// if (!(age >= 14 && age <= 90)) - another variant of the condition
	


	let yourLog = prompt('Enter your login', '');

	if (yourLog == 'Admin') {


		let password = prompt('Enter your password', '');

		if (password == 'I,m is boss') {
			alert('Hello');
		} else if (password === null) {
			alert('Canceled');
		} else {
			alert('Invalid password');
		}


	} else if (yourLog == '' || yourLog === null) {
		alert('Canceled');
	} else {
		alert('I don,t you know');
	}


let height = 0;

alert(height || 100); // 100 returns the first true value
alert(height ?? 100); // 0 returns the first value defined
*/
	

/*                  SIXTH BLOCK
	for (let i = 0; i < 10; i++) {
  Вложенный if начиная с 0 проверяет условие, что взятый
  остаток от деления i на 2 тождественен 0 или нет. Если i
  делится на 2 без остатка, что характерно для чётных значений
  то условие принимает значение true и continue переходит на
  следующую итерацию, минуя alert(i). Если i делится на 2 с
  остатком, что характерно для нечётных значений, то условие
  принимает значение false и выполняется alert(i) и затем
  следующая итерация.
  
  if (i % 2 == 0) continue;
  alert(i); // 1, затем 3, 5, 7, 9

  Мы можем не использовать continue, завернув вычисления в
  блок if, увеличив вложенность фигурных скобок. Но если код
  внутри if более длинный, то это ухудшает читаемость, в 
  отличие от варианта с continue. if работает следующим образом
  если остаток от деления i на 2 равен 0, то 0 преобразуется
  в логическое значение false, если остаток от деления не равен
  0, что характерно для нечётных значений, то логическое
  значение станет true и выполнится alert.


  if (i % 2) {
    alert( i );
  }

}



outer:
for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`Значение на координатах (${i},${j})`, '');
    if(!input) break outer;
    В данном случае break разрывает внешний цикл с меткой
    outer: и передаёт управление за пределы цикла к alert.
    Без метки outer: break прервал бы только вложенный цикл.
  }

}

alert('Готово!'); 


// Print even values ​​from 2 to 10
for (let i = 2; i <= 10; i++) {
	// if ( !(i % 2) ) alert(i); first variant
	// if (i % 2 == 0) alert(i); second variant
	if (i % 2) continue;
	alert(i); // third variant
}

// replace for with while
for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}

let i = 0;
while (i < 3) {
	alert(`number ${i}!`);
	i++;
}

// 
let number;
do {
	number = prompt ('Enter the number greater than one hundred', '0');
} while (number <= 100 && number);

// display prime numbers in a range n
let n = 10;
outer: 
for (let i = 2; i <= n; i++) {

	for (let j = 2; j < i; j++) {
		if (i % j == 0) continue outer;
	}
	alert(i);


// rewrite the swith on the if else
let browser = prompt('Enter your browser', '');

if (browser === 'Edge') {
	alert('You,ve got the Edge');

} else if (browser === 'Chrome' 
	|| browser === 'Opera' 
	|| browser === 'Safari'
	|| browser === 'Firefox') {
	alert('Okey we support these browser too');

} else {
	alert('We hope that this page looks ok!');

}

const number = +prompt('Enter а number between 0 and 3', '');
switch(number) {
	case 0:
		alert('You entered the number 0');
		break;
	case 1:
		alert('You entered the number 1');
		break;
	case 2:
	case 3:
		alert('You entered the number 2, or maybe 3');
		break;
	default:
		alert('Undefined value');
}


function checkAge(age) {
	return (age > 18) || confirm(' Are parents allowed');
}
// (age > 18) ? true : confirm(' Are parents allowed'); 
checkAge(18);

function getMin(a, b) {
	// return (a < b) ? a : b;
	if (a < b) {
		return a;
} return b;
}
alert(getMin(2, 1)); */

function pow(x, n) {
		let result;
	for (let check = 0; check <= n; ++check) {
			result = x * x;
	}
	return result;
}
alert( pow (2, 3) );