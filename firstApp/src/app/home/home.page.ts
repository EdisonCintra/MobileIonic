import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router : Router) {}

  abrirFormulario(){
    this.router.navigate(['/form01'])
  }

  verAlunosCadastrados(){
    this.router.navigate(['/list01'])
  }

}
