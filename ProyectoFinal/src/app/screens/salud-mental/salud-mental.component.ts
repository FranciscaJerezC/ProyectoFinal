import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alimentacion',
  templateUrl: './salud-mental.component.html',
  styleUrls: ['./salud-mental.component.sass']
})
export class SaludMentalComponent implements OnInit {
  public taskName: string = '';
  public taskDescription: string = '';
  public tasks: any[] = [];
  public selectedTask: any;
  constructor() {this.tasks = [
    {
      id: 1,
      name: "Como fue mi experiencia en la universidad",
      description: ""
    },
    {
      id: 2,
      name: "Aprendiendo a convivir con ansiedad",
      description: ""
    },
    {
      id: 3,
      name: "Problemas de salud mental en los jovenes",
      description: ""
    },
  ];
  this.selectedTask = null; }

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








  


