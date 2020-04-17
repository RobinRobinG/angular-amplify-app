import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { ProfileComponent } from './profile/profile.component';
import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [AppComponent, AuthComponent, ProfileComponent],
  imports: [BrowserModule, AppRoutingModule, AmplifyAngularModule, MDBBootstrapModule.forRoot(), FormsModule],
  providers: [AmplifyService],
  bootstrap: [AppComponent]
})
export class AppModule {}
