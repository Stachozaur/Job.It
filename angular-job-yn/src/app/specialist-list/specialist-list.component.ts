import { Component, OnInit } from '@angular/core';
import { ISpecialist } from '../specialist';
import { SpecialistService } from '../specialist.service';

@Component({
  selector: 'app-specialist-list',
  templateUrl: './specialist-list.component.html',
  styleUrls: ['./specialist-list.component.scss']
})
export class SpecialistListComponent implements OnInit {
  constructor(private specialistService: SpecialistService) { }

  specialists: ISpecialist[] = []

  ngOnInit(): void {
    this.getSpecialists();
  }

  getSpecialists() {
    this.specialistService.getSpecialists()
      .subscribe(specialists => this.specialists = specialists);
  }


}
