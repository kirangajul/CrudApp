import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CollegeModule } from './module/college/college.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CollegeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
