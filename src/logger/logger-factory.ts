import { TableLogger } from './table-logger';
import { Logger, LoggerConfig, LoggerType } from './logger';
import { RealTimeLogger } from './real-time-logger';
import { Serializer } from '../serializer';

const defaultLoggerConfig: Required<LoggerConfig> = { type: LoggerType.TABLE };

export function loggerFactory(config: LoggerConfig, serializer: Serializer): Logger {
  const actualConfig: LoggerConfig = { ...defaultLoggerConfig, ...(config ?? {}) };
  switch (actualConfig.type) {
    case LoggerType.REALTIME:
      return new RealTimeLogger(serializer);
    case LoggerType.TABLE:
    default:
      return new TableLogger(serializer);
  }
}
