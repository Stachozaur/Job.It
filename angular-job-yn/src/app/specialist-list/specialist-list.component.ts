import { Component, OnInit } from '@angular/core';
import { Specialist } from '../specialist';
import { SpecialistService } from '../specialist.service';

@Component({
  selector: 'app-specialist-list',
  templateUrl: './specialist-list.component.html',
  styleUrls: ['./specialist-list.component.scss']
})
export class SpecialistListComponent implements OnInit {
  constructor(private specialistService: SpecialistService) { }

  specialists: Specialist[] = []

  ngOnInit(): void {
    this.getSpecialists();
  }

  getSpecialists() {
    this.specialistService.getSpecialists()
      .subscribe(specialists => this.specialists = specialists);
  }


}
