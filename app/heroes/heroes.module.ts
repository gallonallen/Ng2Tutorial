// Angular Modules
import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';

// Heroes Imports
import { HeroesComponent } from './heroes.component';

// Metadata
@NgModule({
    imports: [ CommonModule ],
    declarations: [ HeroesComponent ],
    exports: [ HeroesComponent ],
    providers: [ ]
})

export class HeroesModule {}