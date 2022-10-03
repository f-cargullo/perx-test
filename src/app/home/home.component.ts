import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MiscService } from '@services/index';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private miscService: MiscService, private router: Router) {
    this.miscService.canProceed = false;
  }

  ngOnInit(): void {
  }

  public proceed(goLah: boolean): void {
    this.miscService.canProceed = goLah;
    this.router.navigateByUrl('demo');
  }

}
