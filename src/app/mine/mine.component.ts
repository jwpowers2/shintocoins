import { Component, OnInit } from '@angular/core';
import { CoinsService } from "../coins.service";

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {
  private count:any;
  private coinValue:any;
  private wealth:any;
  private coinCount:any;
  private ledger:any;


  constructor(private cs:CoinsService) { }

  ngOnInit(){
    this.count = 0;
  }

  mine(count){

    this.cs.mineCoins(count);
    //console.log(this.count); 

  }

}
