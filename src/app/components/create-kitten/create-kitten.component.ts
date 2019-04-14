import { Component, OnInit } from '@angular/core';
import { KittenTransfertService } from 'src/app/services/kitten-transfert.service';
import { Kitten } from '../../kitten';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.scss']
})
export class CreateKittenComponent implements OnInit {

  name: string;
  race: string;
  birthday: string;
  picture: string;
  kittenModel = new Kitten(this.name, this.race, this.birthday, this.picture );

  constructor(private kittenTransfertService: KittenTransfertService) { }

  ngOnInit() {
  }

  addKitten(name, race, birthday, picture) {
    this.kittenModel.name = name;

  }

}
