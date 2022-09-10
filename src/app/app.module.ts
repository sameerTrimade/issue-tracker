import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { ProjectBoardComponent } from './components/project-board/project-board.component';
import { CreateIssuesComponent } from './components/create-issues/create-issues.component';
import { CreateProjectComponent } from './components/create-project/create-project.component';

@NgModule({
  declarations: [AppComponent, SideNavbarComponent, HeaderComponent, ProjectBoardComponent, CreateIssuesComponent, CreateProjectComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
