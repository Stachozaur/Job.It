import { Component, OnInit } from '@angular/core';
import { Task } from '../ITasks';
import { TaskService } from '../task.service';
import { GeocodingService} from '../geocoding.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  constructor(private userTaskService: TaskService, private geocodingService: GeocodingService) {
  }

  private coordinates!: any;

  lat = 22.2736308;
  long = 70.7512555;
  tasks: Task[] = [];

  ngOnInit(): void {
    this.getTasks();
    this.geocodingService.getLatLong("Poland").subscribe(data => {
      this.coordinates = data;
      console.log(this.coordinates['results'][0]['geometry']['location']['lat']);
      this.lat = this.coordinates['results'][0]['geometry']['location']['lat']
      this.long = this.coordinates['results'][0]['geometry']['location']['lng']
    })
  }

  getTasks() {
    this.userTaskService.getTasks()
      .subscribe(tasks => this.tasks = tasks);
  }



}
