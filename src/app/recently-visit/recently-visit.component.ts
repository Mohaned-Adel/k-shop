import { Component } from '@angular/core';
import dataCard from './data.json';

interface Card {
  title: String;
  imageSrc: String;
  price: Number;
  newPrice: Number;
  offer: Boolean;
  new: Boolean;
}
@Component({
  selector: 'app-recently-visit',
  templateUrl: './recently-visit.component.html',
  styleUrls: ['./recently-visit.component.css'],
})
export class RecentlyVisitComponent {
  cardData: Card[] = dataCard;
}
