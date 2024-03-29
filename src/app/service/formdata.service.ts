import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormdataService {

 namef=new EventEmitter<string>();
 namel=new EventEmitter<string>();

  constructor() { }

  dataemit(fs:string){
    this.namef.emit(fs);
    this.namel.emit(fs);

  }
}
