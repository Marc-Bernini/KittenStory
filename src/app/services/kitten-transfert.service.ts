import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KittenTransfertService {

  kittenList = [];
  kittenAdopted = [];

  constructor() { }

  addKittenToList(kitten) {
    this.kittenList.push(kitten);
    console.log(this.kittenList);
  }

  getKitten(myKitten) {
    this.kittenAdopted.push(myKitten);
    console.log(this.kittenAdopted);
  }

}

