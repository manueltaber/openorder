import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Area} from '../../classes/area';
import {Order} from '../../classes/order';
import {OrderService} from '../../services/order.service';
import {TranslationService} from '../../services/translation.service';
import {CategorySelectionPage} from '../category-selection/category-selection';
import {AccountingOverviewPage} from '../accounting-overview/accounting-overview';

@Component({
  templateUrl: 'build/pages/area-detail/area-detail.html'
})
export class AreaDetailPage {
  
  area: Area;
  openOrders: Order[];

  constructor(private nav: NavController, 
              private navParams: NavParams,
              private orderService: OrderService,
              private translationService: TranslationService) {
    this.area = navParams.get('area');
    this.openOrders = orderService.getOpenOrdersByArea(this.area);
  }
  
  getOpenOrderCount() {
    return this.openOrders.length;
  }
  
  getOpenOrderAmount() {
    return this.orderService.getOpenOrdersAmountByArea(this.area);
  }
  
  onNewOrder(event) {
    this.nav.push(CategorySelectionPage, {area: this.area});
  }
  
  onAccounting(event) {
    this.nav.push(AccountingOverviewPage, {area: this.area});
  }
}
