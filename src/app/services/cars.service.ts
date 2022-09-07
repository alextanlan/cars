import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

import {Car} from "../model/car";
import {CARS_MOCK_DATA} from "./cars-mock-data";

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  constructor() { }

  getAllCars(): Observable<Car[]> {
    return of(CARS_MOCK_DATA);
  }
}
