import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
})
export class ResultadosComponent {

  get resultados() {
    return this.gifService.resultados;
  }

  get ultimoBuscado() : string {
    return this.gifService.historial[0];
  }

  constructor ( private gifService: GifsService) {}

}
