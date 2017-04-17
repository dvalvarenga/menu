import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

export class MesaService {
    static get parameters() {
        return [[Http]];
    }

    constructor(private http:Http) {

    }

    identificarMesa(codigoMesa) {
        var url = 'http://45.79.95.61/menu/rest/mesaService/getMesa/'+codigoMesa;
        var response = this.http.get(url).map(res => res.json());
        return response;
    }
}
