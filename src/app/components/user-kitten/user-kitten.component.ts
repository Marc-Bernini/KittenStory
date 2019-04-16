import { Component, OnInit } from '@angular/core';
import { KittenTransfertService } from 'src/app/services/kitten-transfert.service';

@Component({
  selector: 'app-user-kitten',
  templateUrl: './user-kitten.component.html',
  styleUrls: ['./user-kitten.component.scss']
})
export class UserKittenComponent implements OnInit {

  myKitten;

  constructor(private kittenTransfertService: KittenTransfertService) { }

  ngOnInit() {
    this.myKitten = this.kittenTransfertService.kittenAdopted;
  }

}
