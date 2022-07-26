import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorPaiesComponent } from './pages/por-paies/por-paies.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PaisTableComponent } from './components/pais-table/pais-table.component';
import { PaisInputComponent } from './components/pais-input/pais-input.component';
import { InfoComponent } from './pages/info/info.component';



@NgModule({
  declarations: [
    PorCapitalComponent,
    PorPaiesComponent,
    PorRegionComponent,
    VerPaisComponent,
    PaisTableComponent,
    PaisInputComponent,
    InfoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    PorCapitalComponent,
    PorPaiesComponent,
    PorRegionComponent,
    VerPaisComponent,
    InfoComponent
  ],
})
export class PaisModule { }
