import { Directive, effect, inject, Input, TemplateRef, ViewContainerRef } from "@angular/core";
import { Permission } from "./auth.model";
import { AuthService } from "./auth.service";

@Directive({
    selector: '[appAuth]',
    standalone: true
})
export default class AuthDirective {

    private authService = inject(AuthService);
    private templateRef = inject(TemplateRef);
    private viewContainerRef = inject(ViewContainerRef);

    @Input({required: true, alias: 'appAuth'}) userType! : Permission;

    constructor() {
        effect(() => {
            if (this.authService.activePermission() === this.userType) 
                this.viewContainerRef.createEmbeddedView(this.templateRef);
            else
                this.viewContainerRef.clear();
        });
    }


}