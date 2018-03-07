import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LinkImageComponent } from './components/link-image/link-image.component';
import { LogoService } from './services/logo.service';


@NgModule({
  declarations: [
    AppComponent,
    LinkImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    LogoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
