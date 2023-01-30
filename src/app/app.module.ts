import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ImagesComponent } from './images/images.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GiphyService } from './giphy.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ImagesComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, ReactiveFormsModule
  ],
  providers: [ GiphyService ],
  bootstrap: [AppComponent]
})
export class AppModule { }