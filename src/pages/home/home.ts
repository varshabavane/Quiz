import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  counter = 0;
  isDisable;

  constructor(public navCtrl: NavController) {}

  ansChck(ans) {
    console.log('checked value ' + ans)
    
    if (ans === 1) {
      this.counter = this.counter + 1;
      
    } else {
      this.counter = this.counter;
    }
  }

  disableQuest(){
    this.isDisable = true;
  }

  submit(){
    alert("score: " + this.counter +" / 10")
  }
}