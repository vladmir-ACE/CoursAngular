import { Injectable } from '@angular/core';
import { Produit } from '../model/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  produits:Array<Produit>=[];


  getProduit(){

    let produit1 =new Produit();
    produit1.id=1;
    produit1.image="../../assets/images/p1.png";
    produit1.libelle="Atana";
    produit1.prix=1000;
    produit1.isDispo=false

    this.produits.push(produit1);

    let produit2 =new Produit();
    produit2.id=2;
    produit2.image="../../assets/images/p2.png";
    produit2.libelle="Tchakpa";
    produit2.prix=2000;
    produit2.isDispo=true;
    this.produits.push(produit2);


    let produit3 =new Produit();
    produit3.id=3;
    produit3.image="../../assets/images/p3.png";
    produit3.libelle="Losso";
    produit3.prix=3000;
    produit3.isDispo=false;
    this.produits.push(produit3);

   return this.produits;



  }

}
