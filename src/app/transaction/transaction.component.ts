import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoinsService } from "../coins.service";

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})

export class TransactionComponent implements OnInit {

  id:number;
  private sub:any;
  transaction:any;
  constructor(private route: ActivatedRoute,private cs:CoinsService) { }
    
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

      this.id = +params['id'];
      this.transaction=this.getTransaction();
    });
  }

  getTransaction(){
    return this.cs.ledger[this.id];
  }

}
