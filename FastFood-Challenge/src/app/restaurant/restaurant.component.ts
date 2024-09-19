import { Component } from '@angular/core';
import { DeliveryPointComponent } from '../delivery-point/delivery-point.component';
import { KitchenComponent } from '../kitchen/kitchen.component';
import { POSComponent } from '../pos/pos.component';
import { Order } from '../models/Order';
import {dtoOrder} from '../models/dtoOrder'
import { DatePipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [DeliveryPointComponent,KitchenComponent,POSComponent,JsonPipe,DatePipe],
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.css'
})
export class RestaurantComponent {
  lastOrders: dtoOrder[] = []
  
  nuevaOrden(newOrder:Order){
    const copyOrder: dtoOrder={
      name:newOrder.name,
      description:newOrder.description,
      number:newOrder.number
    }
    this.lastOrders.push(copyOrder)
    if(this.lastOrders.length>2){
      this.lastOrders.shift()
    }
  }
}
