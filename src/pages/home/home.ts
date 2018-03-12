import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { ResultPage } from "../result/result";
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  counter = 0;
  isDisable;
  ans = [21,22,23,24,25,26,27,28,29,30]

  constructor(public navCtrl: NavController) {}

  ansChck(ans) {
    console.log("checked value " + ans);

    if (ans === 1) {
      this.counter = this.counter + 1;
    } else {
      this.counter = this.counter;
    }
  }

  disableQuest() {
    this.isDisable = true;
  }

  submit() {
    // alert("score: " + this.counter + " / 10");
    this.navCtrl.push(ResultPage, {marks:this.counter}); 
  }
}
