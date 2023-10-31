import { Component, OnInit } from '@angular/core';
import { OrderbookService } from '../orderbook.service';

@Component({
  selector: 'app-orderbook',
  templateUrl: './orderbook.component.html',
  styleUrls: ['./orderbook.component.css']
})
export class OrderbookComponent implements OnInit {
  bidOrders: any[] = [];
  askOrders: any[] = [];

  constructor(private orderbookService: OrderbookService) {}

  ngOnInit() {
    this.orderbookService.getBidOrders().subscribe((data: any) => {
      this.bidOrders = data;
    });

    this.orderbookService.getAskOrders().subscribe((data: any) => {
      this.askOrders = data;
    });
  }
}