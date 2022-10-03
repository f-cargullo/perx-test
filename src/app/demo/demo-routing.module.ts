import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo.component';
import { DemoListComponent } from './demo-list/demo-list.component';
import { DemoDirectiveComponent } from './demo-directive/demo-directive.component';
import { DemoListResolver } from '@resolvers/index';

const routes: Routes = [
  {
    path: '',
    component: DemoComponent,
    children: [
      {
        path: 'demo-list',
        component: DemoListComponent,
        resolve: {
          dataList: DemoListResolver
        }
      },
      {
        path: 'demo-directive',
        component: DemoDirectiveComponent
      },
      { path: '',   redirectTo: 'demo-list', pathMatch: 'full' },
      { path: '**', redirectTo: 'demo-list' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
