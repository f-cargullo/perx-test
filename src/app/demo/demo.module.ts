import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { DemoComponent } from './demo.component';
import { DemoListComponent } from './demo-list/demo-list.component';
import { DemoDirectiveComponent } from './demo-directive/demo-directive.component';
import { DemoRoutingModule } from './demo-routing.module';


@NgModule({
  declarations: [
    DemoComponent,
    DemoListComponent,
    DemoDirectiveComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    MatSidenavModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class DemoModule { }
