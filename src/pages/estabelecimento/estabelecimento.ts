import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CardsPage } from '../cards/cards';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Estabelecimento page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-estabelecimento',
  templateUrl: 'estabelecimento.html'
})
export class EstabelecimentoPage {
  nomeEstabelecimento: any;
  numeroMesa: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EstabelecimentoPage');
     return new Promise(resolve => {
      this.http.get('http://192.168.0.15:8080/teste/rest/mesaService/getMesa/1')
        .map(res => res.json())
        .subscribe(data => {
          // alert(JSON.stringify(data));
          this.nomeEstabelecimento = data.estabelecimento.nomeEstabelecimento;
          this.numeroMesa = data.numeroMesa;
          // resolve(this.data);
        });
    });
  }

  abrirCardapioDia(){
    this.navCtrl.setRoot(CardsPage, {}, {
            animate: true,
            direction: 'forward'
          });
  }

}
