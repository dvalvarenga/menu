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
    spinner: 'hide',
    content: '<div class="overlay-background-loading"><img width="84px" src="assets/img/cooking.gif" /><br><p>Carregando</p></div>'
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

  atualizarValorProduto(codigoAdicional){
      for(let adicional of this.produto.adicionais) {
        if(adicional.codigoAdicional == codigoAdicional){
          if(adicional.checked == true){
            this.produto.valorProduto = this.produto.valorProduto + adicional.valorAdicional;
          }else{
            this.produto.valorProduto = this.produto.valorProduto - adicional.valorAdicional;
          }
        }
      }
  }



  incluirPedido(produto){
  //  produto.valorProduto = produto.valorProduto + 3.90;
  //  alert(JSON.stringify(produto));
      //let toast = this.toastController.create({
      //message: 'Já enviamos seu pedido para a cozinha, agora é só aguardar que em alguns instantes você tem a confirmação',
    //  duration: 51111000,
    //  position: 'middle',
    //});

    //toast.onDidDismiss(() => {
    //  console.log('Dismissed toast');
    //});

  //  toast.present();
  }

}
