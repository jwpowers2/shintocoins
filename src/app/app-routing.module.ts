import { HomeComponent } from './home/home.component';
import { SellComponent } from './sell/sell.component';
import { BuyComponent } from './buy/buy.component';
import { MineComponent } from './mine/mine.component';
import { LedgerComponent } from './ledger/ledger.component';
import { TransactionComponent } from './transaction/transaction.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [

  {path: 'home', component: HomeComponent },
  {path: 'sell', component: SellComponent },
  {path: 'buy', component: BuyComponent },
  {path: 'mine', component: MineComponent },
  {path: 'ledger', component: LedgerComponent },
  {path: 'ledger/transaction/:id', component: TransactionComponent },

];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})

export class AppRoutingModule { }
