import { Injectable } from '@angular/core';
import { DadosFormulario } from '../models/dados-formulario.interface'; // Importe a interface

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  private dadosCadastrados: DadosFormulario[] = [];

  constructor() { }

  public adicionarDados(dados: DadosFormulario){
    
    this.dadosCadastrados.push({...dados});
    console.log("add dados serviço2: "+JSON.stringify(this.dadosCadastrados))  
    
  }

  public visualizarDados(){
    console.log("visualizar dados serviço: "+JSON.stringify(this.dadosCadastrados))
    return this.dadosCadastrados;
    
  }

}
