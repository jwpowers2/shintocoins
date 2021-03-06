import { Injectable,OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CoinsService {

  private coinValue:any;
  private wealth:any;
  private coinCount:any;
  public ledger:any;
  

  constructor(private http:HttpClient) { 
    this.coinCount = 0;
    this.coinValue = 0;
    this.wealth = 0;
    this.ledger = [];
  }

  mineCoins(i){
    //console.log(this.coinCount);
    if (parseInt(i) === 13){
    this.coinValue += 1;
    this.coinCount += 1; 
    this.wealth += (this.coinValue * this.coinCount);  
    this.ledger.push({action:"mine", amount:1,value:this.coinValue});  
    }
  }

  buyCoins(j){
    let x = parseInt(j);
    
    if (this.coinValue < 2){return};
    if (x < 1){return}; 
    this.wealth -= x;
    this.coinCount += x;
    this.coinValue += x;
    this.ledger.push({action:"buy", amount:x,value:this.coinValue});  
  }

  sellCoins(j){
    let z = parseInt(j);
    if (this.coinCount < z){return};
    if (z < 1){return}; 
    this.wealth += z;
    this.coinCount -= z;
    this.coinValue -= z;
    this.ledger.push({action:"sell", amount:z,value:this.coinValue});  

  }

}
