import {ShiftEnum} from "./shift.enum";
import {Fuel} from "./fuel.enum";
import {CarType} from "./car-type.enum";

export interface Car {
  brand: string;
  model: string;
  km: number;
  year: number;
  shift: ShiftEnum,
  fuel: Fuel,
  color: string;
  car_type: CarType
  e_car: boolean
}
