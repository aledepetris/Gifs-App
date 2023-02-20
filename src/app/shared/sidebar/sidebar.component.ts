import { Component, OnInit } from '@angular/core';
import { Gif } from 'src/app/gifs/interfaces/gifs.interface';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  constructor( private gifsService: GifsService ) { }

  get historial() {
    return this.gifsService.historial
  }

  buscar ( item : string) {
    this.gifsService.buscarGifs( item )
  }

  ngOnInit(): void {
  }

}
