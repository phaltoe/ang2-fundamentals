import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `<div>
    <input
      #myInput
      type="text"
      [(ngModel)]="display_message"
      [ngClass]="{mousedown:isMouseDown}"
      (mousedown)="isMouseDown = true"
      (mouseup)="isMouseDown = false"
      (mouseleave)="isMouseDown = false"
      >
    <button (click)="update.emit({text:display_message})">Click me!</button>

  </div>`,
  styles: [`
    .mousedown{
      border: 4px solid yellow;
    }

    button{
      border: none;
    }
  `]
})
export class SimpleFormComponent implements OnInit {

  isMouseDown;

  @Input() display_message;
  @Output() update = new EventEmitter();

  // onClick(event, input) {
  //   console.log(event);
  //   console.log(input);
  // }

    // constructor() {
    //   setInterval(()=> this.display_message = Math.random().toString(), 1000);
    // }

  ngOnInit() {
  }

}
