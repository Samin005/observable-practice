import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NumberUpdatesComponent } from './number-updates/number-updates.component';
import { NumberDetailsComponent } from './number-updates/number-details/number-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NumberUpdatesComponent,
    NumberDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
