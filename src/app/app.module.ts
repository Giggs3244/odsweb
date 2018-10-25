import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { APP_ROUTER } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PersonComponent } from './components/person/person.component';

import { MatToolbarModule, MatButtonModule, MatInputModule , MatSelectModule, MatDatepickerModule, NativeDateAdapter, MatNativeDateModule, MatCheckboxModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTER,
    MatToolbarModule,
    MatButtonModule, 
    MatInputModule,
    MatSelectModule, 
    BrowserAnimationsModule,
    MatDatepickerModule, 
    MatNativeDateModule, 
    FormsModule,
    MatCheckboxModule
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
