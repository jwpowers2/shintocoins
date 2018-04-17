import { Injectable,OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CoinsService {

  private coinValue:any;
  private wealth:any;
  private coinCount:any;
  private ledger:any;
  

  constructor(private http:HttpClient) { 
  }

  getCoinValue(){

    return this.coinValue;
  }

  wealthValue(){
    return this.wealth;
  }

  mineCoins(i){
    if (i === 13){
    // add current value of coin into wealth and increase value of coin by one
    this.coinValue += 1;
    this.coinCount += 1; 
    this.wealth += (this.coinValue * this.coinCount);  
    this.ledger.push({action:"mine", amount:1,value:this.coinValue});  
    }
  }

  buyCoins(x){

    this.wealth -= x;
    this.coinCount += x;
    this.coinValue += x;
    this.ledger.push({action:"buy", amount:x,value:this.coinValue});  
  }

  sellCoins(z){

    this.wealth += z;
    this.coinCount -= z;
    this.coinValue -= z;
    this.ledger.push({action:"sell", amount:z,value:this.coinValue});  

  }

}
