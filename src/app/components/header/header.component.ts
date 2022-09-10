import { Component, Input, OnInit } from '@angular/core';
import { SideMenuItems } from '../../models';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() public activeLink: string = SideMenuItems.PROJECT_BOARD;

  constructor() {}

  ngOnInit(): void {}

  public get showSearchBox(): boolean {
    return this.activeLink === SideMenuItems.PROJECT_BOARD;
  }
}
