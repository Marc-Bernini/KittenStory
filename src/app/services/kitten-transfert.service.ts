import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KittenTransfertService {

  kittenList: Array<object>;

  constructor() { }

  addKitten(kitten) {
    this.kittenList.push(kitten);
  }
}

