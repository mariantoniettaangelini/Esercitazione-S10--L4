import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iPics } from './i-pics';
import { Observable, Observer, Subject, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PicturesService {
  apiUrl:string = 'https://jsonplaceholder.typicode.com/photos'
  favs: iPics[]=[]

  likeCount:number = 0
  likeSubj = new Subject<number>()
  like$ = this.likeSubj.asObservable()

  constructor(private http:HttpClient) { }

  // TUTTE LE FOTO
  getAll():Observable<iPics[]> {
    return this.http.get<iPics[]>(this.apiUrl)
  }

  // ID
  getById(id:number):Observable<iPics>{
    return this.http.get<iPics>(this.apiUrl + '/' + id).pipe(catchError(error=> throwError(()=>new Error(this.mappaturaErrori(error)))))
  }

  //DELETE
  delete(id:number):Observable<iPics>{
    return this.http.delete<iPics>(`${this.apiUrl}/${id}`).pipe(catchError(error=> throwError(()=>new Error(this.mappaturaErrori(error)))))
  }

  //ADD PREFERITI
  addToFav(onePic: iPics){
    const found = this.favs.find(onePic => onePic.id === onePic.id)
    if (!found) {
      this.favs.push(onePic)
  }}

  get favList(){
    return new Observable((obs: Observer<iPics[]>) => {
      obs.next(this.favs)
  })
  }
  isFav(id: number) {
    return this.favs.find(onePic => onePic.id === id)
  }

  //LIKES
  addLike() {
    this.likeCount++
    this.likeSubj.next(this.likeCount)
  }

  //MAPPATURA ERRORI
 mappaturaErrori(statusCode:number) {
  let errore = ''
  switch(statusCode) {
    case 500:
    errore = 'Internal Server Error';
    break;

    default:
    errore = 'Errore di connessione'
    break;
  }
  return errore
 }
}
