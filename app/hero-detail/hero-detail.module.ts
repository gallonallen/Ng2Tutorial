//** Angular Modules **//
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

//** Hero Detail Imports **//
import { HeroDetailComponent } from './hero-detail.component';

//** Metadata **//
@NgModule ({
    imports:      [ CommonModule, FormsModule ],
    declarations: [ HeroDetailComponent ],
    exports:      [ HeroDetailComponent ],
    providers:    [ ]
})

//** Hero Detail Module **//
export class HeroDetailModule {}