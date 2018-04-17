import { Component, OnInit } from '@angular/core';
import { CoinsService } from "../coins.service";

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})

export class SellComponent implements OnInit {

  private count:any;
  private coinValue:any;
  private wealth:any;
  private coinCount:any;
  private ledger:any;

  constructor(private cs:CoinsService) { }

  ngOnInit() {
    this.count = 0;
  }
  sell(count){
    this.cs.sellCoins(count);
  }
}
