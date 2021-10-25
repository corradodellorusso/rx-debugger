import { Observable } from 'rxjs';
import { loggerFactory } from './logger/logger-factory';
import { META_OPERATOR_NAME_KEY, PipeOperator } from './common/interface';
import { LoggerConfig } from './logger';
import { SerializerConfig } from './serializer';
import { serializerFactory } from './serializer/serializer-factory';

/**
 * Config object to be passed to {@link rxDebugger} function.
 */
export interface Config {
  logger?: LoggerConfig;
  serializer?: SerializerConfig;
}

/**
 * Patches source observable in order to debug pipes.
 * Please note that no new observable is created, this function returns original instance patched.
 * If no config object is provided, the result will be written in console using a table.
 * @param source observable to patch.
 * @param config optional config object.
 */
export function rxDebugger<T>(source: Observable<T>, config?: Config): Observable<T> {
  const pipe = source.pipe;
  const serializer = serializerFactory(config?.serializer);
  const logger = loggerFactory(config?.logger, serializer);
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
