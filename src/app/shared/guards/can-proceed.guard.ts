import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

import { MiscService } from '../services';

@Injectable()
export class CanProceedGuard implements CanActivate {
  constructor(private miscService: MiscService, private router: Router) {}

  canActivate(): boolean {
    if (!this.miscService.canProceed) {
      this.router.navigateByUrl('home');
      return false;
    } else {
      return true;
    }
  }
}