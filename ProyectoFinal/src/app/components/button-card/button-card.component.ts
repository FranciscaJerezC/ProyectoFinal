import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-card',
  templateUrl: './button-card.component.html',
  styleUrls: ['./button-card.component.css']
})
export class ButtonCardComponent implements OnInit {

  public newTask: string = '';
  public taskDescription: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
