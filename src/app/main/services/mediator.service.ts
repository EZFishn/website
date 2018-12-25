import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class MediatorService {

  // SideNav: Boolean = true;
  sideNav: any = true;
  sideNavUpdated = new EventEmitter();

  constructor() {

  }

  getSideNavState() {
    return this.sideNavUpdated;
  }

  setSideNavState (state) {
    this.sideNav = state;
    this.sideNavUpdated.emit(this.sideNav);
  }

}