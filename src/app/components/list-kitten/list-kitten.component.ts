import { Component, OnInit } from '@angular/core';
import { KittenTransfertService } from 'src/app/services/kitten-transfert.service';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.scss']
})
export class ListKittenComponent implements OnInit {

  constructor(private kittenTransfertService: KittenTransfertService) { }

  kitten;

  ngOnInit() {
    this.kitten = this.kittenTransfertService.kittenList;
  }

}
