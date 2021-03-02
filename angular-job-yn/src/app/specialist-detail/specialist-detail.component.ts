import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Specialist } from '../specialist';
import { SpecialistService } from '../specialist.service';

@Component({
  templateUrl: './specialist-detail.component.html',
  styleUrls: ['./specialist-detail.component.css']
})

export class SpecialistDetailComponent implements OnInit {
  specialist!: Specialist;

  constructor(private route: ActivatedRoute, private specialistService: SpecialistService) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id')!;
    this.getSpecialistById(id);
    this.specialist.longDescription = this.splitDescriptionByDash();
  }

  getSpecialistById(id: number) {
      this.specialistService.getSpecialistById(id)
          .subscribe(specialist => this.specialist = specialist);
  }

  splitDescriptionByDash(){
    return this.specialist.longDescription.split('-').toString();
  }

}

