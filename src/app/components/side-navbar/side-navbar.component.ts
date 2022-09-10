import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { APP_CONFIG, SideNavLinks } from '../../models';

@Component({
  selector: 'side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss'],
})
export class SideNavbarComponent implements OnInit {
  @Output() public selectedLink = new EventEmitter<string>();
  public navLinks: SideNavLinks[] = APP_CONFIG.SIDE_NAV_LINKS;
  public activeLinkId: number = 1;

  constructor() {}

  ngOnInit(): void {}

  public onClick({ id, link }: { id: number; link: string }): void {
    this.activeLinkId = id;
    this.selectedLink.emit(link);
  }
}
