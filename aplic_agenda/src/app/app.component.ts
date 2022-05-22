import { Component } from '@angular/core';
import { cadastro } from './cadastro';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aplic_agenda';
  lista_cadastros = cadastro
}
