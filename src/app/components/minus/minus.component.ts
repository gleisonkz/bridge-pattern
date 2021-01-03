import { Component, OnInit } from '@angular/core';
import { MATH } from 'src/app/math.token';
import { MathCount } from '../../math.interface';

@Component({
  selector: 'app-minus',
  templateUrl: './minus.component.html',
  styleUrls: ['./minus.component.scss'],
  providers: [{ provide: MATH, useExisting: MinusComponent }],
})
export class MinusComponent implements OnInit, MathCount {
  result: number;

  constructor() {}

  ngOnInit(): void {}

  load(): void {
    this.result = 200;
  }

  refresh(): void {
    this.result = this.result - 50;
  }
}
