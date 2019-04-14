import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KittenTransfertService {

  kittenList = [];

  constructor() { }

  addKitten(chaton) {
    this.kittenList.push(chaton);
    console.log(this.kittenList);
  }
}

