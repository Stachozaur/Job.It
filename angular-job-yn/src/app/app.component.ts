import { Component } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Job.yn';
  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
  }
}
