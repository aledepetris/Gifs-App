import { query } from '@angular/animations';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey    : string = '1AabxaL9DczIfTIfmzb6Lmv0jms71FBs';
  private _historial: string[] = [];
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs'

  // TODO: Cambiar el tipo de datos.
  public resultados : Gif[] = [];

  get historial() {
    return [...this._historial];
  }

  constructor ( private http: HttpClient ) {

    this._historial = JSON.parse( localStorage.getItem('historial')!) || [];

    this.resultados = JSON.parse( localStorage.getItem('resultados')!) || [];


    // if (localStorage.getItem('historial')) {
    //   this._historial = JSON.parse( localStorage.getItem('historial')! )
    // }

  }

  buscarGifs( query: string ) {

    query = query.trim().toLocaleLowerCase();

    const index = this._historial.indexOf(query);
    if (index !== -1) {
      this._historial.splice(index, 1);
    }

    this._historial.unshift( query );
    this._historial = this._historial.splice(0, 10);

    localStorage.setItem('historial', JSON.stringify( this._historial ))

    const params = new HttpParams()
    .set('apiKey', this.apiKey)
    .set('limit', '10')
    .set('q', query);

    this.http.get<SearchGifsResponse>(`${ this.servicioUrl }/search`, { params })
      .subscribe(( response ) => {
        console.log( response.data );
        this.resultados = response.data;
        localStorage.setItem('resultados', JSON.stringify( this.resultados ))
      } )



  }
}
