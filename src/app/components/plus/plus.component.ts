import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plus',
  templateUrl: './plus.component.html',
  styleUrls: ['./plus.component.scss'],
})
export class PlusComponent implements OnInit {
  result: number;

  constructor() {}

  ngOnInit(): void {
    this.load();
    console.log('init');
  }

  load(): void {
    this.result = 20;
  }

  refresh(): void {
    this.result = this.result + 20;
  }
}
