import { COMPLETE_OPERATOR, ERROR_OPERATOR, LogEntry, Logger, START_OPERATOR } from './logger';
import { PipeOperator } from '../common/interface';
import { tap } from 'rxjs';

export class TableLogger implements Logger {
  private readonly entries: LogEntry[];
  private reportUnpatched: boolean;

  constructor() {
    this.entries = [];
  }

  end(): PipeOperator {
    return tap({
      error: () => {
        this.entries.push({ operator: ERROR_OPERATOR, date: new Date() });
        console.table(this.entries);
      },
      complete: () => {
        this.entries.push({ operator: COMPLETE_OPERATOR, date: new Date() });
        console.table(this.entries);
      },
    });
  }

  log(name: string): PipeOperator {
    if (name === undefined) {
      this.reportUnpatched = true;
    }
    return this.entry(name);
  }

  start(): PipeOperator {
    return this.entry(START_OPERATOR);
  }

  private entry(operator: string): PipeOperator {
    return tap((value) => this.entries.push({ operator, value, date: new Date() }));
  }
}
