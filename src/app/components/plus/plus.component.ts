import { Component, OnInit } from '@angular/core';
import { MathCount } from '../../math.interface';
import { MATH } from './../../math.token';

@Component({
  selector: 'app-plus',
  templateUrl: './plus.component.html',
  providers: [{ provide: MATH, useExisting: PlusComponent }],
})
export class PlusComponent implements OnInit, MathCount {
  result: number;
  isLoading = false;

  constructor() {}

  ngOnInit(): void {}

  load(): void {
    this.result = 20;
  }

  refresh(): void {
    this.isLoading = true;
    this.result = this.result + 20;
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }
}
