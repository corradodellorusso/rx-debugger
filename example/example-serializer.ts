import { JsonSerializer, rxDebugger, tap } from '../src';
import { of } from 'rxjs';

rxDebugger(of([]))
  .pipe(tap((item) => item.push(1)))
  .subscribe();

rxDebugger(of([]), { serializer: { type: JsonSerializer } })
  .pipe(tap((item) => item.push(1)))
  .subscribe();
