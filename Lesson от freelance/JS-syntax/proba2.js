/*
let calculator = {
		readF () {
		this.x = +prompt('Enter the first value','');
		this.y = +prompt('Enter the second value','');
	},
		sumF () {
		return sum = this.x + this.y;
	},
		mulF () {
		return mul = this.x * this.y;
		}
};
calculator.readF();
alert(calculator.sumF());
alert(calculator.mulF());  */

function User(name) {
	this.name = name;
	this.admin = false;
}
let user = new User('Jon');
user = new User('Masha');