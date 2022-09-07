import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Car} from "../../../model/car";

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarCardComponent {
  @Input() carData: Car;
}
