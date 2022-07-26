import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'guillermo';
  nombreUpper: string = 'GUILLERMO';
  nombreCompleto: string = 'GuIllERMO RamiREZ';

  fecha: Date = new Date(); // el día de hoy

}
