import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-productsection',
  templateUrl: './productsection.component.html',
  styleUrls: ['./productsection.component.css']
})
export class ProductsectionComponent implements OnInit {
 
  produits:Array<Produit>=[];

  ngOnInit(): void {
      this.getProduit();
  }

  
  constructor(
    private produiService:ProduitService
  ){}

  getProduit(){
   this. produits= this.produiService.getProduit();

  }








}
