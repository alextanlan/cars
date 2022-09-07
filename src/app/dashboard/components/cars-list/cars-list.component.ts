import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";

import {CarsService} from "../../../services/cars.service";
import {Car} from "../../../model/car";

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss']
})
export class CarsListComponent implements OnInit {
  cars$: Observable<Car[]>;

  constructor(private carsService: CarsService) {
  }

  ngOnInit(): void {
    this.cars$ = this.carsService.getAllCars();
  }
}
