import { Component, OnInit, Input, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() parentData: string;
  @Output() childEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  buttonClick(){
    alert("Button is clicked.");
  }

  onChange(value: string){
    this.childEvent.emit(value)
    }

}
