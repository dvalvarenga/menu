import { Component } from '@angular/core';
import { NavController , ModalController } from 'ionic-angular';
//import { ContentPage } from '../content/content';
import { SettingsPage } from '../settings/settings';
import { ListMasterPage } from '../list-master/list-master';
import { CardapioService} from '../../providers/cardapio-service';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

 
@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html'
  
})

export class CardsPage {
  public estabelecimento: any;
 
    cards: any;
    constructor(public navCtrl: NavController,public cardapioService: CardapioService,public modalCtrl: ModalController,public http: Http) {
    }

     ionViewDidLoad() {

            this.cardapioService.buscarCardapiosDia(1).subscribe(
                data => {
                    this.cards = data;
                },
                err => {
                    console.log(err);
                }, 
                () => console.log('Movie Search Complete')
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

   openSettings() {
    this.navCtrl.push(SettingsPage);
  }

  openCardapio(){
    this.navCtrl.push(ListMasterPage);
  }
 
}

