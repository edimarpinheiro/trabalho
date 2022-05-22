import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'buscar_cep';
constructor (private http: HttpClient){}
//Variaveis do form
Cep: string='';
// Variaves de retorno
endereco;
retorno={
  rua: '',
  cidade: '',
  estado: ''

}
//logradouro=rua, localidade=cidade, uf=estado
pesquisado=false;
espera= false;
pesquisa(){
  this.espera=true;
  this.Cep = this.Cep.replace(/\D/g,'');
  const url = 'http://viacep.com.br/ws/'
  + this.Cep+ '/json/';
  // while(true) teste=0;
  this.http.get(url).subscribe( (res) => {
    this.endereco=res;
    this.retorno.rua=this.endereco.logradouro;
    this.retorno.cidade=this.endereco.localidade;
    this.retorno.estado=this.endereco.uf;
    //console.log(this.endereco);
  });
  this.pesquisado=true;
  this.espera=false;
}
limpa(){
this.pesquisado=false;
this.espera=false;
this.cep="";
this.endereco="";
 this.retorno.rua="";
 this.retorno.cidade="";
 this.retorno.estado="";
} }

