import { COMPLETE_OPERATOR, ERROR_OPERATOR, Logger, START_OPERATOR } from './logger';
import { PipeOperator } from '../common/interface';
import { tap } from 'rxjs';

/**
 * Prints event as they happen, without waiting complete or error.
 */
export class RealTimeLogger implements Logger {
  end(): PipeOperator {
    return tap({
      error: () => this.print(ERROR_OPERATOR, undefined),
      complete: () => this.print(COMPLETE_OPERATOR, undefined),
    });
  }

  log(name: string): PipeOperator {
    return this.entry(name);
  }

  start(): PipeOperator {
    return this.entry(START_OPERATOR);
  }

  private entry(name: string) {
    return tap((value) => this.print(name, value));
  }

  private print(name: string, value: any) {
    console.log(new Date().toISOString(), name, value);
  }
}