import { COMPLETE_OPERATOR, ERROR_OPERATOR, LogEntry, Logger, START_OPERATOR } from './logger';
import { PipeOperator } from '../common/interface';
import { tap } from 'rxjs';
import { Serializer } from '../serializer';

/**
 * Gathers all the data, then prints them in a table as soon as the source errors or completes.
 * If you expect to use this logger with mutable objects adopting a serializer is advised.
 */
export class TableLogger implements Logger {
  private readonly entries: LogEntry[];
  private reportVanillaOperators: boolean; // To be implemented later

  constructor(public serializer: Serializer, public channel: Console) {
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
    return tap((value) => this.entries.push({ operator, value: this.serializer.serialize(value), date: new Date() }));
  }

  private print() {
    const entries = this.entries.map((item) => ({
      ...item,
      value: this.serializer.deserialize(item.value),
      date: item.date.toISOString(),
    }));
    this.channel.table(entries);
  }
}
