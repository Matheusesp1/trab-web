import { Component, OnInit } from "@angular/core";
import { Message } from "./message.model";
import { MessageService } from "./message.services";

@Component({
    selector: 'app-message-list',
    template: `
    <div class="col-md-8 col-md-offset-2">
        <app-message [messageVarClasse] = 'msg'
            *ngFor = 'let msg of messageS' >
        </app-message>
    </div>
    `,
    //providers: [MessageService]
    //(editClicked_MessageMetodoClasse) = 'msg.content = $event' fica na linha 10
})

export class MessageListComponent implements OnInit{
    messageS: Message[] = [
        new Message("Texto 1-LIST-Comp", "Ser humano 1-LIST-Comp"),
        new Message("Texto 2-LIST-Comp", "Ser humano 2-LIST-Comp"),
        new Message("Texto 3-LIST-Comp", "Ser humano 3-LIST-Comp")
    ];
    constructor (private messageService: MessageService){ }

    ngOnInit(): void {
        this.messageService.getMessages()
            .subscribe(
                ( dadosSucesso: Message[] ) => {
                    this.messageS = dadosSucesso;
                    console.log(dadosSucesso)
                },
                dadosErro => console.log(dadosErro)
            );
    }
}