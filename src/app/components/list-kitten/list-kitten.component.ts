import { Component, OnInit } from '@angular/core';
import { KittenTransfertService } from 'src/app/services/kitten-transfert.service';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.scss']
})
export class ListKittenComponent implements OnInit {

  /* kitten is the variable that retrieves the table objects */

  kitten;

  /* createdKitten is the variable that allows to display the kitten example */

  createdKitten = false;

  constructor(private kittenTransfertService: KittenTransfertService) { }

  /* ngOnInit allow kitten variable to retrive the table objects.
    The end of the function change the variable createdKitten to display or not the example kitten*/

  ngOnInit() {
    this.kitten = this.kittenTransfertService.kittenList;
    this.kitten.length > 0 ? this.createdKitten = true : this.createdKitten = false;
  }

  /* This service's method is use for push the object Kitten adopted
   and to remove it from the list Kitten*/

  adoptKitten($event, i) {
    $event.preventDefault();
    this.kittenTransfertService.getKitten(this.kitten[i]);
    this.kitten.splice(i, 1);
  }

}
