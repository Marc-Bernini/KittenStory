import { Component, OnInit } from '@angular/core';
import { KittenTransfertService } from 'src/app/services/kitten-transfert.service';
import { Kitten } from '../../kitten';


@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.scss'],
})
export class CreateKittenComponent implements OnInit {

  /* Variables to define object attributes and the object itself */

  name: string;
  race: string;
  birthday: string;
  picture: string;
  kitten: object;

  constructor(private kittenTransfertService: KittenTransfertService) { }

  ngOnInit() {
  }

  /* Function to create new object with class Kitten. Function call service's method to push
  the new object created in the service's array */
  addKitten() {
    this.kitten = new Kitten(this.name, this.race, this.birthday, this.picture );
    this.kittenTransfertService.addKittenToList(this.kitten);
    /* reset input's form */
    this.name = '';
    this.race = '';
    this.birthday = '';
    this.picture = '';
  }

}
