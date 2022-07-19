import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostOfficeService {

  //creamos el observable q va a guardar el último mensaje (BehaviorSubject)
  private postOfficer = new BehaviorSubject<string>("");

  //ahora creamos el Observable público que se va a enviar a los otros componentes, se la llama igual +$
  public postOfficer$ = this.postOfficer.asObservable();

  constructor() { }

  //creo método para enviar el mensaje a cualquiera de los componentes que se suscriban
  send(message: string){
    this.postOfficer.next(message);
  }
}
