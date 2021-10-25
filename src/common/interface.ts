import { OperatorFunction } from 'rxjs';

export interface Type<T> extends Function {
  new (...args: any[]): T;
}
export type PipeOperator = OperatorFunction<any, any>;
export const META_OPERATOR_NAME_KEY = '__name';
