import { Component } from '@angular/core';
import dataCard from './data.json';

interface Card {
  title: String;
  imageSrc: String;
  price: Number;
  stars: number;
  newPrice: Number;
  offer: Boolean;
  new: Boolean;
}

@Component({
  selector: 'app-recently-arrived',
  templateUrl: './recently-arrived.component.html',
  styleUrls: ['./recently-arrived.component.css'],
})
export class RecentlyArrivedComponent {
  cardData: Card[] = dataCard;
}
