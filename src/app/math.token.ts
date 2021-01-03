import { InjectionToken } from '@angular/core';
import { MathCount } from './math.interface';

export const MATH = new InjectionToken<MathCount>('MathCount');
