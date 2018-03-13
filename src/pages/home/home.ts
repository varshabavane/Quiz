import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { ResultPage } from "../result/result";
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  counter = 0;
  // isDisable: boolean = false;
  

  constructor(public navCtrl: NavController) {}

  ionViewWillEnter(){
    this.counter = 0;
  }

  ansChck(a) {
    console.log("checked value " + a);
    this.counter += a
  }

  disableQuest(event:any) {
    console.log(event)
    let a = event
    a.classList.add('item-disabled');
    // console.log(a.parentElement)
    
    
  }

  submit() {
     alert("score: " + this.counter + " / 10");
    this.navCtrl.push(ResultPage, {marks:this.counter}); 
  }
}
