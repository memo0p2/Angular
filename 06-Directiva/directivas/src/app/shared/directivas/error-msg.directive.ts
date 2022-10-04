import { Directive } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective {

  constructor() {
    console.log("Constructor directive")
  }

}
