import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historial: string[] = [];

  get historial() {
    return [...this._historial];
  }

  buscarGifs( query: string ) {

    if ( !this._historial.includes( query )) {
      query = query.trim().toLocaleLowerCase();
      this._historial.unshift( query );
      this._historial = this._historial.splice(0, 10)
    }

    console.log(this._historial)

  }

}
