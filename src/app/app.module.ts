import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ApproutingModule } from './approuting.module';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HeroesComponent } from './pages/heroes/heroes.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroeComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    ApproutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
