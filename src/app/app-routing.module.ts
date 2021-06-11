import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContacmeComponent } from './contacme/contacme.component';
import { HomeComponent } from './home/home.component';
import { PortofolioComponent } from './portofolio/portofolio.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'potofolio', component: PortofolioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContacmeComponent },
  { path: '**', redirectTo: '/home', pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
