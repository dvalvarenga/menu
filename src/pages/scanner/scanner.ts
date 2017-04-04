import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
// import { BarcodeScanner } from 'ionic-native';
import { MainPage } from '../../pages/pages';

/*
  Generated class for the Scanner page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-scanner',
  templateUrl: 'scanner.html'
})
export class ScannerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
      // BarcodeScanner.scan().then((barcodeData) => {
          // alert(JSON.stringify(barcodeData.text));
          // this.navCtrl.setRoot(MainPage, {barcodeData}, {
          this.navCtrl.setRoot(MainPage, {}, {
            animate: true,
            direction: 'forward'
          });
      // }, (err) => {
          // An error occurred
      // });
  }

}
