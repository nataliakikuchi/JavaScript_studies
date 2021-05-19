//Ser autenticável (valid) significa ter o método authentic.

export class AuthSystem {
    static login(valid, password) {
        if(AuthSystem.isValid(valid)) {
            return valid.authentic(password);
        }

        return false;
    }

		static isValid(valid) {
			return "authentic" in valid && valid.authentic instanceof Function;
		}
}

//Quando esse AuthSystem procura a chave authentic, procura por uma função, porque está executando essa função e para executá-la precisa ser do tipo função.

//Temos uma segunda verificação: se o authentic existe dentro de valid. Se valid.authentic é do tipo função, é uma instância de uma função, é um instanceof de função.