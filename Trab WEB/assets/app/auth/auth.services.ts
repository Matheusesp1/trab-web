import { User } from "./user.model"
import { Injectable, EventEmitter } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from 'rxjs';

@Injectable()
export class UserService{
    private userService: User[] = [];
    
    constructor(private http: Http) { }

    addUser(user: User){
        console.log(this.userService);
        const bodyReq = JSON.stringify(user);
        
        const myHeaders = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/autenticacao/signup', bodyReq, {headers: myHeaders})
            .map((responseRecebida: Response) => {
                const aux = responseRecebida.json();
                 const newObjUser = new User(aux.objUserSave.email, aux.objUserSave.password,
                    aux.objUserSave.firstName, aux.objUserSave.lastName, aux.objUserSave.sexo);
                this.userService.push(newObjUser);
                return newObjUser;
            })
            .catch((errorRecebido: Response) => Observable.throw(errorRecebido.json()));
    }
}