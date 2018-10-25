import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { APP_ROUTER } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PersonComponent } from './components/person/person.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { MatToolbarModule, MatButtonModule, MatInputModule , MatSelectModule, MatDatepickerModule, NativeDateAdapter, MatNativeDateModule, MatDividerModule } from '@angular/material';
import { VotesService } from './services/votes.service';


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
    NgxChartsModule,
    HttpClientModule,
    MatDividerModule
  ],
  providers: [MatDatepickerModule, VotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
