import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { Order } from '../models/Order';
import { OrderServiceService } from '../services/order-service.service';

@Component({
  selector: 'app-pos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pos.component.html',
  styleUrl: './pos.component.css'
})
export class POSComponent {
  @Output() newOrder = new EventEmitter<Order>();
  private orderService = inject(OrderServiceService)

  order: Order={
    number: 0,
    name:'',
    description:'',
    date: new Date()
  }

  generateOrder(){
    const copyOrder:Order={
      ...this.order
    }
    copyOrder.number = Math.round(1 + Math.random() * 999)
    this.orderService.addNuevo(copyOrder)
    this.newOrder.emit(copyOrder)
  }


}
