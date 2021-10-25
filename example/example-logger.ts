import { LoggerType, map, rxDebugger, toArray } from '../src';
import { of } from 'rxjs';

rxDebugger(of(1, 2, 3), { logger: { type: LoggerType.REALTIME } })
  .pipe(
    map((item) => item * 2),
    toArray()
  )
  .subscribe();
