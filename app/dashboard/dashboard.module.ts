import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule }   from '../app-routing.module';

import { DashboardComponent } from './dashboard.component';
import { HeroSearchComponent } from './hero-search.component';

@NgModule ({
    imports:      [ CommonModule, AppRoutingModule ],
    declarations: [ DashboardComponent, HeroSearchComponent ],
    exports:      [ DashboardComponent ],
    providers:    [ ]
})

export class DashboardModule {}