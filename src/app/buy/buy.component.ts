import { Component, OnInit } from '@angular/core';
import { CoinsService } from "../coins.service";

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

  private count:any;
  private coinValue:any;
  private wealth:any;
  private coinCount:any;
  private ledger:any;

  constructor(private cs:CoinsService) { }

  ngOnInit() {
    this.count = 0;
  }
  buy(count){
    this.cs.buyCoins(count);
  }
}
