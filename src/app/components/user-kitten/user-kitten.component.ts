import { Component, OnInit } from '@angular/core';
import { KittenTransfertService } from 'src/app/services/kitten-transfert.service';

@Component({
  selector: 'app-user-kitten',
  templateUrl: './user-kitten.component.html',
  styleUrls: ['./user-kitten.component.scss']
})
export class UserKittenComponent implements OnInit {

  /* This variable is use to recover array of kitten adopted */
  myKitten;

  constructor(private kittenTransfertService: KittenTransfertService) { }

  ngOnInit() {
    /* This function allow to recover array of kitten adopted with the service's method */
    this.myKitten = this.kittenTransfertService.kittenAdopted;
  }

}
