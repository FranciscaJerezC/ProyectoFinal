import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-screen',
  templateUrl: './list-screen.component.html',
  styleUrls: ['./list-screen.component.css']
})
export class ListScreenComponent implements OnInit {
  public taskName: string = '';
  public taskDescription: string = '';
  public tasks: any[] = [];
  public selectedTask: any;

  constructor() {
    this.tasks = [
      {
        id: 1,
        name: "Rutina de Piernas",
        description: ""
      },
      {
        id: 2,
        name: "Rutina de Brazos",
        description: ""
      },
      {
        id: 3,
        name: "Rutina Fin de Semana",
        description: ""
      },
    ];
    this.selectedTask = null;
  }

  ngOnInit(): void {
  }

  public selectTask(task: any){
    this.selectedTask = task;
    console.log(this.selectedTask);
  }

  public addTask(taskName: string, taskDescription?: string){

    let task = {
      id: this.tasks.length + 1,
      name: taskName,
      descrtiption: taskDescription
    }

    this.tasks.push(task);
    console.log(this.tasks);
  }

  public deleteTask(){
    for (let i = 0; i < this.tasks.length; i++) {
      if(this.tasks[i].id == this.selectedTask.id){
        this.tasks.splice(this.tasks[i].id-1, 1);
      }
      
    }

  }

  public modifiedTask(taskName: string){
    for (let i = 0; i < this.tasks.length; i++) {
      if(this.tasks[i].id == this.selectedTask.id){
        this.tasks[i].name = taskName;
      }
    }

  }

}
