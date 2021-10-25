import { COMPLETE_OPERATOR, ERROR_OPERATOR, Logger, START_OPERATOR } from './logger';
import { PipeOperator } from '../common/interface';
import { tap } from 'rxjs';
import { Serializer } from '../serializer';

/**
 * Prints data after each pipe operator does its job, without waiting observable complete or error.
 * This logger is advised when debugging long observables or subjects.
 */
export class RealTimeLogger implements Logger {
  constructor(public serializer: Serializer, public channel: Console) {}

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
    this.channel.log(new Date().toISOString(), name, this.serialization(value));
  }

  private serialization(value: any) {
    return this.serializer.deserialize(this.serializer.serialize(value));
  }
}
