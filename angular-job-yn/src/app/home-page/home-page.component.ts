import { Component, OnInit } from '@angular/core';
import { UserTask } from '../userTask';
import { UserTaskService } from '../userTask.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  constructor(private userTaskService: UserTaskService) { }

  userTasks: UserTask[] = [];

  ngOnInit(): void {
    this.getUserTasks();
  }

  getUserTasks() {
    this.userTaskService.getUserTasks()
      .subscribe(userTasks => this.userTasks = userTasks);
  }

}
