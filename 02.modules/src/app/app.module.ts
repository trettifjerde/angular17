import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
// import { DatePipe } from "@angular/common";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { TasksModule } from "./tasks/tasks.module";
import { UserModule } from "./user/user.module";

@NgModule({
    bootstrap: [AppComponent],
    imports: [BrowserModule, TasksModule, UserModule], //DatePipe is included
    declarations: [AppComponent, HeaderComponent],
})
export class AppModule { }