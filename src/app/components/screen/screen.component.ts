import { Component, ContentChild, OnInit } from '@angular/core';
import { MATH } from 'src/app/math.token';
import { MathCount } from '../../math.interface';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss'],
})
export class ScreenComponent implements OnInit {
  constructor() {}

  @ContentChild(MATH, { static: true }) math: MathCount;

  ngOnInit(): void {
    this.math.load();
  }

  refresh(): void {
    this.math.refresh();
  }
}
