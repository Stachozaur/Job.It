import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../ITasks';
import { TaskService} from '../task.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-modal-popup',
  templateUrl: './modal-popup.component.html',
  styleUrls: ['./modal-popup.component.css']
})
export class ModalPopupComponent implements OnInit {

  @Input() id! : number;

  task! : Task;
  constructor(private route: ActivatedRoute, private taskService : TaskService ) { }

  ngOnInit(): void {
    // let id = +this.route.snapshot.paramMap.get('id')!;
    this.getTaskById(this.id)
  }

  getTaskById(id: number) {
    this.taskService.getSpecialistById(id)
        .subscribe(task => this.task = task);
}
}
