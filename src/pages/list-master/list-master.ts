import { Component } from '@angular/core';
import { NavController, ModalController, NavParams,  LoadingController  } from 'ionic-angular';

import { ItemDetailPage } from '../item-detail/item-detail';

import { ProdutoService} from '../../providers/produto-service';

@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  currentItems: any[];
  codigoCardapio: any;
  tituloCardapio : any;
  loading: any;
  selecao: any;

  constructor(public navCtrl: NavController,  public modalCtrl: ModalController,public produtoService: ProdutoService, public navParams: NavParams, public loadingController:LoadingController ) {
    //this.selecao="false";
    this.codigoCardapio = navParams.get("codigoCardapio");
    this.tituloCardapio = navParams.get("tituloCardapio");
    this.loading = this.loadingController.create({
    spinner: 'hide',
    content: '<div class="overlay-background-loading"><img width="84px" src="assets/img/cooking.gif" /><br><p>Carregando</p></div>'
    });
    this.loadItens();
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {

  }

  loadItens(){
    this.loading.present();
    this.produtoService.buscarProdutosCardapio(this.codigoCardapio).subscribe(
              data => {
                  this.currentItems = data;
              },
              err => {
                  console.log(err);
                  this.loading.dismiss();
              },
              () => {
                console.log('Produtos carregados para o cardápio: '+this.codigoCardapio);
                this.loading.dismiss();
              }
          );
  }


  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
//  addItem() {
//    let addModal = this.modalCtrl.create(ItemCreatePage);
//    addModal.onDidDismiss(item => {
//      if (item) {
//        this.items.add(item);
//      }
//    })
//    addModal.present();
//  }

  /**
   * Delete an item from the list of items.
   */
//  deleteItem(item) {
//    this.items.delete(item);
//  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item) {
    this.navCtrl.push(ItemDetailPage, {
      item: item
    });
  }

  atualizar(codigoSelecionado){
    //this.loading.present();
    this.produtoService.buscarProdutosCardapio(codigoSelecionado).subscribe(
            data => {
                this.currentItems = data;
            },
            err => {
                console.log(err);
      //        this.loading.dismiss();
            },
            () => {
              console.log('Produtos recarregados para o cardápio: '+codigoSelecionado);
        //      this.loading.dismiss();
            }
        );
  }



}
