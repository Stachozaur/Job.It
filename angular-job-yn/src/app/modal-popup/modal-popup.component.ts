import {Component, OnInit, Input} from '@angular/core';
import {Task} from '../ITasks';
import {TaskService} from '../task.service';
// @ts-ignore
import {ActivatedRoute} from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../ITasks';
import { TaskService} from '../task.service';
import { ActivatedRoute } from '@angular/router';
import { faDumbbell, faCut, faDog, IconName, IconPrefix } from '@fortawesome/free-solid-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';




@Component({
  selector: 'app-modal-popup',
  templateUrl: './modal-popup.component.html',
  styleUrls: ['./modal-popup.component.css']
})
export class ModalPopupComponent implements OnInit {

  @Input() id!: number;

  task!: Task;

  constructor(private route: ActivatedRoute, private taskService: TaskService) {
  }


  task!: Task;


  iconPrefix: IconPrefix = 'fas';
  constructor(private route: ActivatedRoute, private taskService: TaskService, library: FaIconLibrary) {
    library.addIcons(faDumbbell, faCut, faDog);
  }

  


  ngOnInit(): void {
    // let id = +this.route.snapshot.paramMap.get('id')!;
    this.getTaskById(this.id);
  }

  getTaskById(id: number): void {
    this.taskService.getSpecialistById(id)
      .subscribe((task: Task) => this.task = task);
  }
}
