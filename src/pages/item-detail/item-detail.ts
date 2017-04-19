import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';

import { Items } from '../../providers/providers';

import { ProdutoService} from '../../providers/produto-service';

@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {
  item: any;
  produto: any;
  loading: any;

  constructor(public navCtrl: NavController, navParams: NavParams, items: Items, public toastController:ToastController,public produtoService: ProdutoService, public loadingController:LoadingController) {
    this.loading = this.loadingController.create({
      content: '<ion-spinner></ion-spinner>'
    });

    this.item = navParams.get('item');


  }

  ionViewDidLoad(){
    this.loading.present();
    this.produtoService.detalharProduto(this.item.codigoProduto).subscribe(
                data => {
                    this.produto = data;
                    this.item.profilePic = 'assets/img/speakers/foto-prato.jpeg';
                },
                err => {
                    console.log(err);
                },
                () => {
                this.loading.dismiss();
                console.log('Produto :'+this.produto.codigoProduto +'-'+ this.produto.nomeProduto+' carregado');
                }
            );
  }



  testePedido(){
      let toast = this.toastController.create({
      message: 'Já enviamos seu pedido para a cozinha, agora é só aguardar que em alguns instantes você tem a confirmação',
      duration: 51111000,
      position: 'middle',
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

}
