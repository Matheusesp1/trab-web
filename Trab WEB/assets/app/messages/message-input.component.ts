import { Component, OnInit } from "@angular/core";
import { MessageService } from "./message.services";
import { Message } from "./message.model";
import { NgForm } from "@angular/forms";

@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html'
})
export class MessageInputComponent implements OnInit{
    constructor (private messageService: MessageService){ }

    messageLoad: Message;

    ngOnInit(){
        this.messageService.messageIsEdit.subscribe(
            (message: Message) => this.messageLoad = message
        );
    }
    
    onSubmit(form: NgForm){
        if(this.messageLoad){
            //Editar
            this.messageLoad.content = form.value.myContentngForm;
            this.messageService.updateMessage(this.messageLoad)
                .subscribe(
                    dadosSucesso => console.log(dadosSucesso),
                    dadosErro => console.log(dadosErro)
                );
            this.messageLoad = null;
        }
        else{
            //Criar
            const messageAux = new Message(form.value.myContentngForm, 'GG');
            this.messageService.addMessage(messageAux)
                .subscribe(
                    dadosSucesso => console.log(dadosSucesso),
                    dadosErro => console.log(dadosErro)
                );
        }
        console.log(form);
        form.resetForm();
    }

    onClear(form: NgForm){
        this.messageLoad = null;
        form.resetForm();
    }
}