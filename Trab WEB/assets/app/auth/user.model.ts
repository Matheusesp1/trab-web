export class User {
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
    sexo?: string;

    constructor(email: string, password: string, firstName?: string, lastName?: string, sexo?: string){
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.sexo = sexo;
    }
}