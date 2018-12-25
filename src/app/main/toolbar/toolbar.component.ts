import { Component, OnInit } from '@angular/core';

import { MediatorService } from '../services/mediator.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  sidenavState: any = true;
  sideNav: Boolean = true;

  constructor(private mediator: MediatorService) { }

  ngOnInit() {
    this.sidenavState = this.mediator.getSideNavState();
  }

  setSideNavState() {
    this.sideNav = !this.sideNav;
    this.mediator.setSideNavState(this.sideNav);
  }

}
