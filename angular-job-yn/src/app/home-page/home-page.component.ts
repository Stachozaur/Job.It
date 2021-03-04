import { Component, OnInit } from '@angular/core';
import { Task } from '../ITasks';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  constructor(private userTaskService: TaskService) {
  }

  tasks: Task[] = [];

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks() {
    this.userTaskService.getTasks()
      .subscribe(tasks => this.tasks = tasks);
  }



}
