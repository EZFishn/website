import { Injectable, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class RouteParamService {

  sideNav: any = true;
  sideNavUpdated = new EventEmitter();

  constructor(private route: ActivatedRoute) {

  }

  getSideNavState() {
    return this.sideNavUpdated;
  }

  setSideNavState (state) {
    this.sideNav = state;
    this.sideNavUpdated.emit(this.sideNav);
  }

}