import { Directive, Input } from "@angular/core";

@Directive({
    selector: 'a[appSafeLink]',
    standalone: true,
    host: {
        '(click)': 'onConfirmLeave($event)'
    }
})
export default class SafeLinkDirective {

    @Input({required: true, alias: 'appSafeLink'}) fromParam: string = 'myApp';
    constructor() {}

    onConfirmLeave(e: MouseEvent) {
        const wantsToLeave = confirm('Follow the link to an external website?');

        if (wantsToLeave) {
            (e.currentTarget as HTMLAnchorElement).href = (e.currentTarget as HTMLAnchorElement).href + `?from=${this.fromParam}`;
            return
        }
        else {
            e.preventDefault();
        }
    }
}