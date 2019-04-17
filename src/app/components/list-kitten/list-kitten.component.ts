import { Component, OnInit } from '@angular/core';
import { KittenTransfertService } from 'src/app/services/kitten-transfert.service';
import { Kitten } from '../../kitten';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.scss']
})
export class ListKittenComponent implements OnInit {

  kitten;
  createdKitten = false;

  constructor(private kittenTransfertService: KittenTransfertService) { }

  ngOnInit() {
    this.kitten = this.kittenTransfertService.kittenList;
    console.log(this.kitten);
    this.kitten.length > 0 ? this.createdKitten = true : this.createdKitten = false;
  }

  adoptKitten($event, i) {
    $event.preventDefault();
    this.kittenTransfertService.getKitten(this.kitten[i]);
    this.kitten.splice(i, 1);
  }

}
