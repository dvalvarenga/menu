import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
  
export class ProdutoService {  
    static get parameters() {
        return [[Http]];
    }
  
    constructor(private http:Http) {
         
    }
  
    buscarProdutosCardapio(codigoCardapio) {
        var url = 'http://192.168.0.15:8080/teste/rest/produtoService/listaProdutosCardapio/'+codigoCardapio;
        var response = this.http.get(url).map(res => res.json()); 
        return response;
    }

    detalharProduto(codigoProduto){
         var url = 'http://192.168.0.15:8080/teste/rest/produtoService/getProduto/'+codigoProduto;
        var response = this.http.get(url).map(res => res.json());
        return response;
    }
}