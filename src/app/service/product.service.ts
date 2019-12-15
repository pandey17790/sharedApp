import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  Add(i:number, j:number){
    return i+j;
  }
}
