import {Car} from "../model/car";
import {ShiftEnum} from "../model/shift.enum";
import {Fuel} from "../model/fuel.enum";
import {CarType} from "../model/car-type.enum";

export const CARS_MOCK_DATA: Car[] = [
  {
    brand: 'BMW',
    model: '5.0',
    km: 100,
    year: 2018,
    shift: ShiftEnum.Automatic,
    fuel: Fuel.Benzin,
    color: 'black',
    car_type: CarType.Sedan,
    e_car: false
  },
  {
    brand: 'Mercedes',
    model: 'AMG',
    km: 0,
    year: 2019,
    shift: ShiftEnum.Automatic,
    fuel: Fuel.Benzin,
    color: 'white',
    car_type: CarType.Sedan,
    e_car: false
  }]
