import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KittenTransfertService {

  kittenList = [];

  constructor() { }

  addKitten(kitten) {
    this.kittenList.push(kitten);
    console.log(this.kittenList);
  }
}

