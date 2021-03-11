import {Component, OnInit, Input} from '@angular/core';
import {Task} from '../ITasks';
import {TaskService} from '../task.service';
// @ts-ignore
import {ActivatedRoute} from '@angular/router';
import { GeocodingService } from '../geocoding.service';



@Component({
  selector: 'app-modal-popup',
  templateUrl: './modal-popup.component.html',
  styleUrls: ['./modal-popup.component.css']
})
export class ModalPopupComponent implements OnInit {

  @Input() id!: number;

  task!: Task;
  loaded: boolean = false;
  lat!: number;
  long!: number;
  coordinates: any;

  icon : any = {
    url: '',
    scaledSize: {
      width: 40,
      height: 40
    }
}
  constructor(private route: ActivatedRoute, private taskService: TaskService, private geocodingService: GeocodingService) {
  }


  ngOnInit(): void {
    this.getTaskById(this.id)
  }

  getTaskById(id: number): void {
    this.taskService.getSpecialistById(id)
      .subscribe((task: Task) => this.task = task
      ).add(() => {
        this.geocodingService.getLatLong(this.task.address).subscribe(data => {
          this.coordinates = data;
          this.unpackCoordinates();
          this.icon.url = this.task.category_path;
          this.loaded = true;
        })
      });
  }

  private unpackCoordinates() : void{
    this.lat = this.coordinates['results'][0]['geometry']['location']['lat']
    this.long = this.coordinates['results'][0]['geometry']['location']['lng']
  }

}
