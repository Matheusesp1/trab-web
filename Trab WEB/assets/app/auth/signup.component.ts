import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, NgForm } from "@angular/forms";
import { User } from "./user.model";
import { UserService } from './auth.services';

@Component({
    selector: 'app-signup',
    templateUrl: './signup-component.html'
})
export class SignupComponent implements OnInit{
    myForm: FormGroup;

    constructor (private userService: UserService){ }

    ngOnInit(){
        this.myForm = new FormGroup({
            firstNameTS: new FormControl(null, Validators.required),
            lastNameTS: new FormControl(null, Validators.required),
            emailTS: new FormControl(null, [
                Validators.required,
                Validators.pattern("[a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9\-\_\.]+")
            ]),
            passwordTS: new FormControl(null, Validators.required),
            sexoTS: new FormControl(null, Validators.required)
        });
    }

    onSubmit(){
        const userAux = new User(this.myForm.value.emailTS , this.myForm.value.passwordTS,
        this.myForm.value.firstNameTS, this.myForm.value.lastNameTS, this.myForm.value.sexoTS);
       
            this.userService.addUser(userAux)
                .subscribe(
                    dadosSucesso => console.log(dadosSucesso),
                    dadosErro => console.log(dadosErro)
                );
        console.log(this.myForm);
        this.myForm.reset();
    }

}