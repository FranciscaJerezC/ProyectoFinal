import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public tasks: any[] = [];
  public selectedTask: any;

  constructor() { 
    this.tasks = [
      "Sacar la basura",
      "Pasear al perro",
      "Cortar el pasto",
    ];
    this.selectedTask = null;
  }

  public selectTask(task: any){
    this.selectedTask = task;
    console.log(this.selectedTask);
  }

  public ngOnInit(): void {
  }
}
