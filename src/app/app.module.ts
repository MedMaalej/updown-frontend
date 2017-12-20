import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { VotingComponent } from './components/voting/voting.component';
import { VotingService } from './services/voting/voting.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    VotingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [VotingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
