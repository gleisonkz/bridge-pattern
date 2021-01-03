import { Component, OnInit } from '@angular/core';
import { MATH } from 'src/app/math.token';
import { MathCount } from '../../math.interface';

@Component({
  selector: 'app-minus',
  templateUrl: './minus.component.html',
  providers: [{ provide: MATH, useExisting: MinusComponent }],
})
export class MinusComponent implements OnInit, MathCount {
  result: number;
  isLoading = false;

  constructor() {}

  ngOnInit(): void {}

  load(): void {
    this.result = 200;
  }

  refresh(): void {
    this.isLoading = true;
    this.result = this.result - 50;
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }
}
