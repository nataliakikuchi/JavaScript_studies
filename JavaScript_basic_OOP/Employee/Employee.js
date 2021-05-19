export class Employee {
    constructor(name, salary, cpf) {
        this._name;
        this._salary;
        this._cpf;

        this._bonus = 1;
				this._password;
    }

		authentic(password) {
			return password == this._password;
		}

		registerPassword(password) {
			this._password = password;
		}
}