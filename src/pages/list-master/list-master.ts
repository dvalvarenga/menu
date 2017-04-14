import { Component } from '@angular/core';
import { NavController, ModalController, NavParams,  LoadingController  } from 'ionic-angular';

import { ItemDetailPage } from '../item-detail/item-detail';
import { ItemCreatePage } from '../item-create/item-create';

import { Items } from '../../providers/providers';
import { Item } from '../../models/item';

import { ProdutoService} from '../../providers/produto-service';

@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  currentItems: Item[];
  codigoCardapio: any;
  loading: any;
  selecao: any;

  constructor(public navCtrl: NavController, public items: Items, public modalCtrl: ModalController,public produtoService: ProdutoService, public navParams: NavParams, public loadingController:LoadingController ) {
    this.selecao="1";
    this.currentItems = this.items.query();
    this.codigoCardapio = navParams.get("codigoCardapio");
    this.loading = this.loadingController.create({
      content: '<ion-spinner name="dots"></ion-spinner>'
    });
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
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
  addItem() {
    let addModal = this.modalCtrl.create(ItemCreatePage);
    addModal.onDidDismiss(item => {
      if (item) {
        this.items.add(item);
      }
    })
    addModal.present();
  }

  /**
   * Delete an item from the list of items.
   */
  deleteItem(item) {
    this.items.delete(item);
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
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
              //  this.loading.dismiss();
            },
            () => {
              console.log('Produtos recarregados para o cardápio: '+codigoSelecionado);
            //  this.loading.dismiss();
            }
        );
  }



}
