import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module'

// Imports from loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }        from './app.component';
import { TitleComponent }      from './title.component';
import { ContactModule }       from './contact/contact.module';
import { DashboardComponent }  from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent }     from './heroes.component';
import { HeroService }         from './hero.service';
import { HeroSearchComponent } from './hero-search.component';
import { UserService }         from './user.service';
import './rxjs-extensions';

import { HighlightDirective } from './highlight.directive';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    ContactModule
  ],
  declarations: [ 
    AppComponent,
    TitleComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent,
    HighlightDirective
  ],
  providers: [ 
    HeroService,
    UserService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
