import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FlashModule } from "./flash/flash.module";
import { PrintModule } from "./print/print.module";
import { DarkModeService } from "./sharing/services/dark-mode.service";

@NgModule({
    declarations: [
    ],
    imports: [
        BrowserModule,
        FlashModule,
        PrintModule,
        DarkModeService
    ],
    providers: [],
    bootstrap: []
})
export class AppModule { }