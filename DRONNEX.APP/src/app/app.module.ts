import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FlashModule } from "./flash/flash.module";
import { PrintModule } from "./print/print.module";
import { DarkModeService } from "./sharing/services/dark-mode.service";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
    ],
    imports: [
        BrowserModule,
        FlashModule,
        PrintModule,
        DarkModeService,
        CommonModule,
        FormsModule
    ],
    providers: [],
    bootstrap: []
})
export class AppModule { }