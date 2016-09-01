import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {AreaSelectionPage} from '../area-selection/area-selection';
import {LiveMonitorPage} from '../live-monitor/live-monitor';
import {AuthService} from '../../services/auth.service';
import {AreaService} from '../../services/area.service';
import {OrderService} from '../../services/order.service';
import {TranslationService} from '../../services/translation.service';

@Component({
  templateUrl: 'build/pages/dashboard/dashboard.html'
})
export class DashboardPage {
  
  openOrders: number=0;
  openAmount: number=0;
  totalAreas: number=0;

  constructor(private nav: NavController, 
              private authService: AuthService,
              private areaService: AreaService,
              private orderService: OrderService, 
              private translationService: TranslationService) {
    this.openOrders = orderService.getOpenOrders().length;
    this.openAmount = orderService.getOpenOrdersAmount();
    this.totalAreas = areaService.getAreas().length;
  }
  
  startOrdering(event) {
    this.nav.setRoot(AreaSelectionPage);
    //this.nav.push(AreaSelectionPage);
  }

  liveMonitor(event) {
    this.nav.setRoot(LiveMonitorPage);
    //this.nav.push(LiveMonitorPage);
  }
}
