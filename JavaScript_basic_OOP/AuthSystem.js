export class AuthSystem {
    static login(employee, password) {
        return employee.password == password;
    }
}