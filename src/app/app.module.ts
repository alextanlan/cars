import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AuthModule } from '@auth0/auth0-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AuthBtnComponent } from './components/auth-btn/auth-btn.component';
import { UserNameComponent } from './components/user-name/user-name.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AuthBtnComponent,
    UserNameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: 'dev-t7yja9mq.us.auth0.com', // TODO: move to a (secret) config file
      clientId: 'iq9GWKJJA9ZUoOfcchRhh5nO7QjSsx6e'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
