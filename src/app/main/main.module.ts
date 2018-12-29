import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { MaterialModule} from '../shared/material.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";
import { FlexLayoutModule } from '@angular/flex-layout';

import { EzfComponent } from './ezf/ezf.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ContentComponent } from './content/content.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { IceStepperComponent } from './ice-stepper/ice-stepper.component';
import { IceAlarmComponent } from './ice-alarm/ice-alarm.component';
import { IcePortComponent } from './ice-port/ice-port.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [EzfComponent, ToolbarComponent, ContentComponent, SidenavComponent, IceStepperComponent, IceAlarmComponent, IcePortComponent, MainComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ]
})
export class MainModule { }
