import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the EstabelecimentoService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class EstabelecimentoService {
  data: any;

  constructor(public http: Http) {
    this.data = null;
    console.log('Hello EstabelecimentoService Provider');
  }

  load() {
    if (this.data) {
      return Promise.resolve(this.data);
    }
 
    return new Promise(resolve => {
      this.http.get('http://192.168.0.15:8080/teste/rest/service/todasEstabelecimentos')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

}
