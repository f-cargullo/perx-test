import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Observable } from "rxjs/internal/Observable";

import { MiscService } from '../services';

@Injectable({ providedIn: 'root' })
export class DemoListResolver implements Resolve<any> {
  constructor(private miscService: MiscService) {}

  resolve(): Observable<any> {
    return this.miscService.getList();
  }
}