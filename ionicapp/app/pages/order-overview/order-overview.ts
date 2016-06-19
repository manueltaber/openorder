import {Component} from '@angular/core';
import {NavController, NavParams, Alert} from 'ionic-angular';
import {Area} from '../../classes/area';
import {Category} from '../../classes/category';
import {CategoryService} from '../../services/category.service';
import {OrderService} from '../../services/order.service';
import {TranslationService} from '../../services/translation.service';
import {ItemSelectionPage} from '../item-selection/item-selection';
import {OrderingFooterComponent} from '../../components/ordering-footer/ordering-footer.component';

@Component({
  templateUrl: 'build/pages/order-overview/order-overview.html',
  directives: [OrderingFooterComponent]
})
export class OrderOverviewPage {
  
  area: Area;
  categories: Category[];
  searching: boolean;

  constructor(private nav: NavController, 
              private navParams: NavParams,
              private categoryService: CategoryService, 
              private orderService: OrderService,
              private translationService: TranslationService) {
    this.area = navParams.get('area');
    this.categories = categoryService.getCategories();
    this.searching = false;
  }

  onTempOrdersConfirmed() {
    this.nav.popToRoot();
  }

  onTempOrdersCanceled() {
    this.nav.popToRoot();
  }
  
  onCategorySelected(event, category: Category) {
    this.nav.push(ItemSelectionPage, {area: this.area, category: category});
  }
}
