import { Component, NgModule } from '@angular/core';
import { Message } from './Messages/message.model';
import { MessageService } from './messages/message.services';
import { UserService } from './auth/auth.services';
@Component({
    selector: 'my-app',
    providers: [MessageService,UserService],
    templateUrl: './app.component.html',
    styles: [`
        .author {
            display: inline-block;
            font-style: italic;
            font-size: 12px;
            width: 80%;
        }
        .config {
            display: inline-block;
            text-align: right;
            font-size: 12px;
            width: 19%;
        }
    `]
})

export class AppComponent {
    mostrarElemento: boolean = true;
    onMudaMostrarElemento(){
        this.mostrarElemento = !this.mostrarElemento;
    }

    messageBinding: Message = new Message('Que fome', 'Ser humano 1');
    messageBindingAlias: Message = new Message('Que sono', 'Ser humano 2');

};