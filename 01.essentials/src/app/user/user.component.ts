import { Component, EventEmitter, Input, Output } from "@angular/core";
import { User } from "../../utils/types";
import { CardComponent } from "../shared/card/card.component";

@Component({
    selector: 'app-user',
    imports: [CardComponent],
    standalone: true,
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent {
    @Input({required: true}) user! : User;
    @Input({required: true}) isSelected! : boolean;
    @Output() select = new EventEmitter<string>();

    get avatarSrc() {
        return `assets/users/${this.user.avatar}`
    }

    onSelect() {
        this.select.emit(this.user.id);
    }
}