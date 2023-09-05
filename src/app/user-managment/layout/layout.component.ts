import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  checked: boolean = true;
  check: boolean = false;
  value1: number = 20;
  value3: number = 20;
  constructor() { }

  ngOnInit(): void {
  }

}
