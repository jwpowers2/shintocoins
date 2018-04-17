import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})

export class TransactionComponent implements OnInit {

  id:number;
  private sub:any;

  constructor(private route: ActivatedRoute) { }
    
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

      this.id = +params['id'];
    });
  }

}
