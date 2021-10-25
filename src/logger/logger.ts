import { PipeOperator } from '../common/interface';
import { Serializer } from '../serializer';

export interface Logger {
  start(): PipeOperator;
  log(name: string): PipeOperator;
  end(): PipeOperator;
  serializer: Serializer;
}

export interface LogEntry {
  operator: string;
  value?: any;
  date?: Date;
}

export interface LoggerConfig {
  type?: LoggerType;
  channel?: Console;
}

export enum LoggerType {
  TABLE,
  REALTIME,
}

export const START_OPERATOR = '(start)';
export const ERROR_OPERATOR = '(error)';
export const COMPLETE_OPERATOR = '(complete)';
