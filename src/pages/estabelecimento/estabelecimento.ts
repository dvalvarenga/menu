import { Component } from '@angular/core';
import { NavController, NavParams , LoadingController } from 'ionic-angular';
import { CardsPage } from '../cards/cards';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


import { MesaService} from '../../providers/mesa-service';

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

  item: any;
  mesa: any;
  loading: any;
  imagemFundo: any;
  erro : any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http , public loadingController:LoadingController,public mesaService: MesaService) {
  this.imagemFundo = '../assets/img/background-blur.jpg';
    this.loading = this.loadingController.create({
      content: '<ion-spinner name="dots"></ion-spinner>'
    });

    this.item = navParams.get('item');
  }

  ionViewDidLoad() {
        this.loading.present();
        //this.mesaService.identificarMesa(this.item.codigoMesa).subscribe(
        this.mesaService.identificarMesa(1).subscribe(
              data => {
                  this.imagemFundo = "url('../assets/img/background-1.jpg')";
                  this.mesa = data;
              },
              err => {
                this.loading.dismiss();
                this.erro = "Não foi possível identificar sua mesa.Você está sem conexão com a internet ? =(";
                console.log(err);
              },
              () => {
                this.loading.dismiss();
              }
          );
  }

  abrirCardapioDia(codigoMesa){
      this.navCtrl.setRoot(CardsPage, {codigoMesa : codigoMesa}, {
        animate: true,
        direction: 'forward'
      });
  }

}
