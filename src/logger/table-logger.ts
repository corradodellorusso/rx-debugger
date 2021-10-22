import { COMPLETE_OPERATOR, ERROR_OPERATOR, LogEntry, Logger, START_OPERATOR } from './logger';
import { PipeOperator } from '../common/interface';
import { tap } from 'rxjs/operators';

/**
 * Gathers all the data, then prints them in a table as soon as the source errors or completes.
 */
export class TableLogger implements Logger {
  private readonly entries: LogEntry[];
  private reportVanillaOperators: boolean; // To be implemented later

  constructor() {
    this.entries = [];
  }

  end(): PipeOperator {
    return tap({
      error: () => {
        this.entries.push({ operator: ERROR_OPERATOR, date: new Date() });
        this.print();
      },
      complete: () => {
        this.entries.push({ operator: COMPLETE_OPERATOR, date: new Date() });
        this.print();
      },
    });
  }

  log(name: string): PipeOperator {
    if (name === undefined) {
      this.reportVanillaOperators = true;
    }
    return this.entry(name);
  }

  start(): PipeOperator {
    return this.entry(START_OPERATOR);
  }

  private entry(operator: string): PipeOperator {
    return tap((value) => this.entries.push({ operator, value, date: new Date() }));
  }

  private print() {
    const entries = this.entries.map((item) => ({ ...item, date: item.date.toISOString() }));
    console.table(entries);
  }
}
