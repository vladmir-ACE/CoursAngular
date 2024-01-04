import { Component, ElementRef, Renderer2 } from '@angular/core';


@Component({
  selector: 'app-whysection',
  templateUrl: './whysection.component.html',
  styleUrls: ['./whysection.component.css']
})
export class WhysectionComponent {


   text : String ="IT work";

   classe:String="col-md-4";
   
   constructor(private render:Renderer2, private el:ElementRef) {}
  changeBg(){
   this.text="mouseOver";
  }
  change2(){
    this.text="mouseout";
  }


  Bg(){
    this.classe=this.classe+" bg-primary";
    console.log("Click");
   
  }





}
