import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

export class CardapioService {
    static get parameters() {
        return [[Http]];
    }

    constructor(private http:Http) {

    }

    buscarCardapiosDia(codigoEstabelecimento) {
        var url = 'http://localhost:8080/teste/rest/cardapioService/listaCardapiosDia/'+codigoEstabelecimento;
        var response = this.http.get(url).map(res => res.json());
        return response;
    }
}
