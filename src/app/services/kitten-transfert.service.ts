import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KittenTransfertService {

  /* This array home the new object "Kitten" created */
  kittenList = [];

  /* This array home the object "Kitten" adopted */
  kittenAdopted = [];

  constructor() { }

  /* This method is called in create-kitten-component. It push the new object "Kitten" in the array*/
  addKittenToList(kitten) {
    this.kittenList.push(kitten);
    console.log(this.kittenList);
  }

   /* This method is called in list-kitten-component. It push the object "Kitten adopted" in the array*/
  getKitten(myKitten) {
    this.kittenAdopted.push(myKitten);
    console.log(this.kittenAdopted);
  }

}

