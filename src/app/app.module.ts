import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { PortofolioComponent } from './portofolio/portofolio.component';
import { AboutComponent } from './about/about.component';
import { ContacmeComponent } from './contacme/contacme.component';
import { FooterComponent } from './footer/footer.component';
import { CopyrightsComponent } from './copyrights/copyrights.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PortofolioComponent,
    AboutComponent,
    ContacmeComponent,
    FooterComponent,
    CopyrightsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
