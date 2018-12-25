import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { NgSwitch } from '@angular/common';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
 path: string;

       constructor(location: Location, router: Router) {
        router.events.subscribe((val) => {
          if(location.path() != ''){
            this.path = location.path();
            console.log (location.path());
          } else {
            this.path = '/main/home'
          }
        });
      }

  ngOnInit() {
  }

}
