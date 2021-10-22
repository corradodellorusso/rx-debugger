import { PipeOperator } from '../common/interface';

export interface Logger {
  start(): PipeOperator;
  log(name: string): PipeOperator;
  end(): PipeOperator;
}

export interface LogEntry {
  operator: string;
  value?: any;
  date?: Date;
}

export interface LoggerConfig {
  type?: LoggerType
}

export enum LoggerType {
  TABLE,
  REALTIME,
}

export const START_OPERATOR = '(start)';
export const ERROR_OPERATOR = '(error)';
export const COMPLETE_OPERATOR = '(complete)';
