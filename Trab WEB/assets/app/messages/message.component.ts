import {Component, Input, Output, EventEmitter} from '@angular/core';
import { Message } from './message.model';
import { MessageService } from './message.services'

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
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
export class MessageComponent{
    color = 'lightYellow';
    colorFooter = 'lightGrey';
    tam = 12;
    onMudaStyle(){
        this.color = 'gold';
        this.tam = 16;
    };

    @Input() messageVarClasse : Message = new Message("","");
    @Input("inputMessage") messageVarClasseAlias : Message = new Message("","");
    @Output() editClicked_MessageMetodoClasse = new EventEmitter<string>();
    @Output("outputMessage") editClicked_MessageMetodoClasseAlias = new EventEmitter<string>();
    onEdit(){
        this.editClicked_MessageMetodoClasse.emit('Te editei otário 1');
        this.editClicked_MessageMetodoClasseAlias.emit('Te editei otário 2');
    }
    constructor(private messageServiceObj: MessageService){ }
    onDeleteService(){
        this.messageServiceObj.deleteMessage(this.messageVarClasse)
            .subscribe(
                dadosSucesso => console.log(dadosSucesso),
                dadosErro => console.log(dadosErro)
            );
    }
    onEditService(){
        this.messageServiceObj.editMessage(this.messageVarClasse);
    }
}