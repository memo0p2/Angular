import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InfoComponent } from "./pais/pages/info/info.component";
import { PorCapitalComponent } from "./pais/pages/por-capital/por-capital.component";
import { PorPaiesComponent } from "./pais/pages/por-paies/por-paies.component";
import { PorRegionComponent } from "./pais/pages/por-region/por-region.component";
import { VerPaisComponent } from "./pais/pages/ver-pais/ver-pais.component";
const routes: Routes=[
    {
        path: '',
        component: PorPaiesComponent,
        pathMatch: 'full'
    },
    {
        path: 'region',
        component: PorRegionComponent
    },
    {
        path: 'capital',
        component: PorCapitalComponent
    },
    {
        path: 'pais/:id',
        component: VerPaisComponent
    },
    {
        path: 'info',
        component: InfoComponent
    },
    // {
    //     path: '**',
    //     redirectTo: ''
    // }
]

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{}