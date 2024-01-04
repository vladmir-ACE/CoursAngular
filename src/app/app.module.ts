import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { HomeBodyComponent } from './home-body/home-body.component';
import { FooterComponent } from './footer/footer.component';
import { WhysectionComponent } from './whysection/whysection.component';
import { ArrivalsectionComponent } from './arrivalsection/arrivalsection.component';
import { ProductsectionComponent } from './productsection/productsection.component';
import { SubscribesectionComponent } from './subscribesection/subscribesection.component';
import { ClientsectionComponent } from './clientsection/clientsection.component';
import { HeaderComponent } from './header/header.component';
import { SlidersectionComponent } from './slidersection/slidersection.component';
import { FormsModule } from '@angular/forms';
import { ProduitService } from './services/produit.service';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ProduitComponent } from './main/produit/produit.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    HomeBodyComponent,
    FooterComponent,
    WhysectionComponent,
    ArrivalsectionComponent,
    ProductsectionComponent,
    SubscribesectionComponent,
    ClientsectionComponent,
    HeaderComponent,
    SlidersectionComponent,
    AcceuilComponent,
    ProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    ProduitService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
