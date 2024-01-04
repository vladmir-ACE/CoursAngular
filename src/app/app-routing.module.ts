import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProduitComponent } from './main/produit/produit.component';
import { HomeBodyComponent } from './home-body/home-body.component';

const routes: Routes = [
   { path: '', component: HomeBodyComponent },
   { path: 'acceuil', component: HomeBodyComponent },
   { path: 'produit', component: ProduitComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
