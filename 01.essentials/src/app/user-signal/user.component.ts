import { Component, computed, input, output } from "@angular/core";
import { User } from "../../utils/types";

@Component({
    selector: 'app-user',
    standalone: true,
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserSignalComponent {
    user = input.required<User>();
    avatarSrc = computed(() => `assets/users/${this.user().avatar}`);
    select = output<string>();

    onSelect() {
        this.select.emit(this.user().id);
    }
}