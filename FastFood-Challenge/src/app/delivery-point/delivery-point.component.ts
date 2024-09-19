import { Component, inject } from '@angular/core';
import { Order } from '../models/Order';
import { OrderServiceService } from '../services/order-service.service';

@Component({
  selector: 'app-delivery-point',
  standalone: true,
  imports: [],
  templateUrl: './delivery-point.component.html',
  styleUrl: './delivery-point.component.css'
})
export class DeliveryPointComponent {
  orderService = inject(OrderServiceService)
  ordenesTerminadas:Order[] = this.orderService.getAllFinished()




  toDeliver(orden:Order,index:number){
    this.orderService.deleteFinished(index)
  }
}
