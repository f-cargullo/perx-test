import { Component, OnInit } from '@angular/core';
import { PRIMARY_OUTLET } from '@angular/router';

@Component({
  selector: 'app-demo-directive',
  templateUrl: './demo-directive.component.html',
  styleUrls: ['./demo-directive.component.scss']
})
export class DemoDirectiveComponent implements OnInit {
  theme: string = 'primary';

  constructor() { }

  ngOnInit(): void {
  }

}
