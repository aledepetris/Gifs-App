import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey    : string = '1AabxaL9DczIfTIfmzb6Lmv0jms71FBs';
  private _historial: string[] = [];

  // TODO: Cambiar el tipo de datos.
  public resultados : any[] = [];

  get historial() {
    return [...this._historial];
  }

  constructor ( private http: HttpClient ) { }

  buscarGifs( query: string ) {

    query = query.trim().toLocaleLowerCase();

    const index = this._historial.indexOf(query);
    if (index !== -1) {
      this._historial.splice(index, 1);
    }

    this._historial.unshift( query );
    this._historial = this._historial.splice(0, 10);

    this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=1AabxaL9DczIfTIfmzb6Lmv0jms71FBs&q=${query}&limit=25&offset=0&rating=g&lang=en`)
      .subscribe( (response:any) => {
        console.log( response.data );
        this.resultados = response.data;
      } )

  }

}
