import { Component } from '@angular/core';
import { SideMenuItems } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public navLinks = SideMenuItems;
  public selectedLink: string = SideMenuItems.PROJECT_BOARD;

  public setActiveLink(link: string): void {
    this.selectedLink = link;
  }
}
