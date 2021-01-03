import { Component, OnInit } from '@angular/core';
import { MATH } from 'src/app/math.token';
import { MathCount } from '../../math.interface';

@Component({
  selector: 'app-divide',
  templateUrl: './divide.component.html',
  providers: [{ provide: MATH, useExisting: DivideComponent }],
})
export class DivideComponent implements OnInit, MathCount {
  result: number;
  isLoading = false;

  constructor() {}

  ngOnInit(): void {}

  load(): void {
    this.result = 800;
  }

  refresh(): void {
    this.isLoading = true;
    this.result = this.result / 2;
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }
}
