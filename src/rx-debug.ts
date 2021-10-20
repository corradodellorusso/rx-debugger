import { Observable } from 'rxjs';
import { loggerFactory } from './logger/logger-factory';
import { META_OPERATOR_NAME_KEY, PipeOperator } from './common/interface';

export function rxDebug<T>(source: Observable<T>): Observable<T> {
  const pipe = source.pipe;
  const logger = loggerFactory();
  source.pipe = function (...operators: PipeOperator[]): Observable<T> {
    const chain = [];
    chain.push(logger.start());
    for (let operator of operators) {
      chain.push(operator);
      const name = operator[META_OPERATOR_NAME_KEY];
      chain.push(logger.log(name));
    }
    chain.push(logger.end());
    return pipe.apply(this, chain);
  };
  return source;
}
