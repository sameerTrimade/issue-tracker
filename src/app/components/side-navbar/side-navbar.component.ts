import { Component, OnInit } from '@angular/core';
import { APP_CONFIG, SideNavLinks } from '../../models';

@Component({
  selector: 'side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss'],
})
export class SideNavbarComponent implements OnInit {
  public navLinks: SideNavLinks[] = APP_CONFIG.SIDE_NAV_LINKS;
  public activeLinkId: number = 1;

  constructor() {}

  ngOnInit(): void {}

  public onClick(id: number): void {
    this.activeLinkId = id;
  }
}
