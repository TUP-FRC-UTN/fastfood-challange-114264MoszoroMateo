import { Injectable } from '@angular/core';
import {Order} from '../models/Order'

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {
  private newOrder: Order[] = []  

  getAllNuevos():Order[]{
    return this.newOrder
  }
  deleteLastNuevo(){
    this.newOrder.pop()
  }
  deleteNuevo(index:number){
    this.newOrder.splice(index,1)
  }
  addNuevo(order:Order){
    this.newOrder.push(order)
  }

  private finishedOrders: Order[] = []
  
  getAllFinished():Order[]{
    return this.finishedOrders
  }
  deleteLastFinished(){
    this.finishedOrders.pop()
  }
  deleteFinished(index:number){
    this.finishedOrders.splice(index,1)
  }
  addFinished(order:Order){
    this.finishedOrders.push(order)
  }

  constructor() { }
}
