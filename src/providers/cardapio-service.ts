import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

export class CardapioService {
    static get parameters() {
        return [[Http]];
    }

    constructor(private http:Http) {

    }

    buscarCardapiosDia(codigoEstabelecimento) {
        var url = 'http://45.79.95.61/menu/rest/cardapioService/listaCardapiosDia/'+codigoEstabelecimento;
        var response = this.http.get(url).map(res => res.json());
        return response;
    }
}
