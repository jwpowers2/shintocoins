import { Component, OnInit } from '@angular/core';
import { CoinsService } from "../coins.service";

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css']
})

export class LedgerComponent implements OnInit {

  constructor(private cs:CoinsService) { }

  ngOnInit() {
    this.ledger = this.getLedger();
  }

  getLedger(){
    return this.cs.ledger;
  }
}
