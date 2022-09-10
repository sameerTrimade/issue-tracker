import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [AppComponent, SideNavbarComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
