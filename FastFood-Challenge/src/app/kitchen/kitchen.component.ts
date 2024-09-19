import { Component, inject } from '@angular/core';
import { Order } from '../models/Order';
import { OrderServiceService } from '../services/order-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kitchen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kitchen.component.html',
  styleUrl: './kitchen.component.css'
})
export class KitchenComponent {
  orderService = inject(OrderServiceService)
  ordenes:Order[] = this.orderService.getAllNuevos()
  cookingOrder: Order = {
    number:0,
    name:'',
    description:'',
    date: new Date()
  }
  cooking:boolean = false

  toCook(order:Order,index:number){
    this.orderService.deleteNuevo(index)
    this.ordenes = this.orderService.getAllNuevos()
    this.cookingOrder = {...order}
    this.cooking=true
  }
  toFinish(){
    const copyOrder={
      ...this.cookingOrder
    }
    this.orderService.addFinished(copyOrder)
    this.cookingOrder.number = 0
    this.cookingOrder.name = ''
    this.cookingOrder.description = ''
    this.cooking=false
  }

}
