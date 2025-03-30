import { NgModule } from "@angular/core";
import { PrintComponent } from "./print.component";
import { DetailedPrintComponent } from "./detailed-print/detailed-print.component";
@NgModule({
    imports: [
        
        // self
        
        PrintComponent,
        DetailedPrintComponent

        // service
        
        //FlashService
        
        
    ],
    declarations: [
        
    ],
    providers: [],
    bootstrap: []
})
export class PrintModule { }
