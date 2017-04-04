import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "Carla Alvarenga",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "Burt is a Bear.",
  };


  constructor(public http: Http) {
    let items = [
      {
         "name": "Batata frita",
         "profilePic": "assets/img/speakers/foto-prato.jpeg",
         "about": "Batata frita especial com queijo e bacon, e o nosso maravilhoso molho da casa.",
         "note" : "R$13,00"
       },
       {
         "name": "Batata frita especial",
         "profilePic": "assets/img/speakers/cheetah.jpg",
         "about": "Charlie is a Cheetah.",
         "note" : "R$16,00"
       },
       {
         "name": "Donald Duck",
         "profilePic": "assets/img/speakers/duck.jpg",
         "about": "Donald is a Duck.",
         "note" : "R$13,90"
       },
       {
         "name": "Eva Eagle",
         "profilePic": "assets/img/speakers/eagle.jpg",
         "about": "Eva is an Eagle.",
         "note" : "R$9,90"
       },
       {
         "name": "Ellie Elephant",
         "profilePic": "assets/img/speakers/elephant.jpg",
         "about": "Ellie is an Elephant.",
         "note" : "R$24,00"
       },
       {
         "name": "Molly Mouse",
         "profilePic": "assets/img/speakers/mouse.jpg",
         "about": "Molly is a Mouse.",
         "note" : "R$8,50"
       },
       {
         "name": "Paul Puppy",
         "profilePic": "assets/img/speakers/puppy.jpg",
         "about": "Paul is a Puppy.",
         "note" : "R$19,00"
       }
     ];

     for(let item of items) {
       this.items.push(new Item(item));
     }
  }

  query(params?: any) {
    if(!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for(let key in params) {
        let field = item[key];
        if(typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if(field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
