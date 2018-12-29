import { Component, OnInit } from '@angular/core';

import { MediatorService } from '../services/mediator.service';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  sidenavState: any = true;
  title = 'app';
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
