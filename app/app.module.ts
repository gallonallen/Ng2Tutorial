// Angular Modules
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

// Routing
import { AppRoutingModule } from './app-routing.module'

// Imports from loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

// Application Modules, services, etc
import { AppComponent }        from './app.component';
import { TitleComponent }      from './title.component';
import { ContactModule }       from './contact/contact.module';
import { DashboardModule }     from './dashboard/dashboard.module';
import { HeroDetailModule }    from './hero-detail/hero-detail.module';
import { HeroesComponent }     from './heroes.component';
import { HeroService }         from './hero.service';
import { UserService }         from './user.service';
import './rxjs-extensions';

import { HighlightDirective } from './highlight.directive';

// Metadata
@NgModule({
  imports: [ 
    BrowserModule, 
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    ContactModule,
    DashboardModule,
    HeroDetailModule
  ],
  declarations: [ 
    AppComponent,
    TitleComponent,
    HeroesComponent,
    HighlightDirective
  ],
  providers: [ 
    HeroService,
    UserService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
