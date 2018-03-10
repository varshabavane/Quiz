import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';



@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {

  result;
  counter;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultPage');
  }

  submit(){
    "score: " + this.counter +" / 10";
  }



}  


