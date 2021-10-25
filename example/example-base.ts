import { rxDebugger, map, toArray } from '../src';
import { of } from 'rxjs';

rxDebugger(of(1, 2, 3))
  .pipe(
    map((item) => item * 2),
    toArray()
  )
  .subscribe();
