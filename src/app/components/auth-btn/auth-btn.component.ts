import {Component, Inject} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {AuthService} from "@auth0/auth0-angular";

@Component({
  selector: 'app-auth-btn',
  templateUrl: './auth-btn.component.html',
  styleUrls: ['./auth-btn.component.scss']
})
export class AuthBtnComponent {
  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) {
  }
}
