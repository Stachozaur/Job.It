import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../ITasks';
import { TaskService } from '../task.service';
import { FormBuilder, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-modal',
  templateUrl: './task-modal.component.html',
  styleUrls: ['./task-modal.component.css']
})
export class TaskModalComponent implements OnInit {
  tasks: Task[] = [];
  name?: string;
  category?: string;
  adress?: string;
  description?: string;


  formData = this.formBuilder.group({
    name: '',
    category: '',
    adress: '',
    description: '',
  });

  constructor(private http: HttpClient,
    private taskService: TaskService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(): void {

    this.taskService.addTask(this.formData.value).
      subscribe(task => this.tasks.push(task));
    console.log(this.formData.value);
    this.formData.reset();
  }
}
