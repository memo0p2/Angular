import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMsgDirective } from './directivas/error-msg.directive';



@NgModule({
  declarations: [
    ErrorMsgDirective
  ],
  exports:[
    ErrorMsgDirective
  ]
})
export class SharedModule { }
