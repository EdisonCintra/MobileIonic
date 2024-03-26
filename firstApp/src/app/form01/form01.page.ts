import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form01',
  templateUrl: './form01.page.html',
  styleUrls: ['./form01.page.scss'],
})
export class Form01Page implements OnInit {


  contato = {
    nome: '',
    telefone: '',
    matricula: '',
    genero: '',
    bilingue: {
      linguagem: false
    },
    cursos: [] as string[]
  };

  constructor() { }

  salvar(form: NgForm) {
    if (form.valid) {
      console.log("Dados: ", this.contato);
    } else {
      console.log("Formulário inválido!");
    }
  }

  adicionarCurso(curso: string) {
    if (!this.contato.cursos.includes(curso)) {
      this.contato.cursos.push(curso);
    }
  }

  ngOnInit() {
  }

}
