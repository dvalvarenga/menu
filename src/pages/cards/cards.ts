import { Component } from '@angular/core';
import { NavController , ModalController, NavParams, LoadingController } from 'ionic-angular';
//import { ContentPage } from '../content/content';
import { ComandaPage } from '../comanda/comanda';
import { ListMasterPage } from '../list-master/list-master';
import { CardapioService} from '../../providers/cardapio-service';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html'

})

export class CardsPage {
    nomeEstabelecimento: any;
     cards: any;
     codigoMesa : any;
     loading: any;

    constructor(public navCtrl: NavController,public cardapioService: CardapioService,public modalCtrl: ModalController,public http: Http, public navParams: NavParams,public loadingController:LoadingController) {
      this.codigoMesa = navParams.get("codigoMesa");
      this.nomeEstabelecimento = navParams.get("nomeEstabelecimento");
      alert(this.nomeEstabelecimento);
      this.loading = this.loadingController.create({
        content: '<ion-spinner name="dots"></ion-spinner>'
      });
    }

     ionViewDidLoad() {
              this.loading.present();
            this.cardapioService.buscarCardapiosDia(this.codigoMesa).subscribe(
                data => {
                    this.cards = data;
                },
                err => {
                    console.log(err);
                    this.loading.dismiss();
                },
                () => {
                  this.loading.dismiss();
                  console.log('Cardápios carregados para a mesa : '+this.codigoMesa);
                }
            );




        // return new Promise(resolve => {
        //       this.http.get('http://192.168.0.15:8080/teste/rest/cardapioService/listaCardapiosDia/1')
        //         .map(res => res.json())
        //         .subscribe(data => {
        //           this.cards = data;
        //           alert(JSON.stringify(this.cards));
        //           // this.nomeEstabelecimento = data.estabelecimento.nomeEstabelecimento;
        //           // this.numeroMesa = data.numeroMesa;
        //           // resolve(this.data);
        //         });
        //     });
     }

    //  loadTest(){
    //     this.estabelecimentoService.load()
    //     .then(data => {
    //       alert(JSON.stringify(data));
    //       //this.people = data;
    //     });
    //   }



    /**
   * Navigate to the profile page for this item.
   */
  // openProfile() {
  //   this.loadTest();
    //this.navCtrl.push(ContentPage);
  // }

   openComanda() {
    this.navCtrl.push(ComandaPage);
  }

  openCardapio(codigoCardapio,tituloCardapio){
    this.navCtrl.push(ListMasterPage, {codigoCardapio : codigoCardapio, tituloCardapio: tituloCardapio }, {
      animate: true,
      direction: 'forward'
    });
  }

}
