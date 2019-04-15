import { Component, OnInit } from '@angular/core';
import { KittenTransfertService } from 'src/app/services/kitten-transfert.service';
import { Kitten } from '../../kitten';


@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.scss'],
})
export class CreateKittenComponent implements OnInit {

  name: string;
  race: string;
  birthday: string;
  picture: string;
  kitten: object;

  constructor(private kittenTransfertService: KittenTransfertService) { }

  ngOnInit() {
  }

  addKitten() {
    this.kitten = new Kitten(this.name, this.race, this.birthday, this.picture );
    this.kittenTransfertService.addKitten(this.kitten);
    console.log(this.kitten);
    this.name = '';
    this.race = '';
    this.birthday = '';
    this.picture = '';
  }

}
