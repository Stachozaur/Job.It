import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ISpecialist } from '../specialist';
import { SpecialistService } from '../specialist.service';

@Component({
  templateUrl: './specialist-detail.component.html',
  styleUrls: ['./specialist-detail.component.css']
})

export class SpecialistDetailComponent implements OnInit {
  specialist!: ISpecialist;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id')!;
  }

}
