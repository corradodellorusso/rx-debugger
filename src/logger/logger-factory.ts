import { TableLogger } from './table-logger';
import { Logger, LoggerConfig, LoggerType } from './logger';
import { RealTimeLogger } from './real-time-logger';

const defaultLoggerConfig: Required<LoggerConfig> = { type: LoggerType.TABLE };

export function loggerFactory(config: LoggerConfig): Logger {
  const actualConfig: LoggerConfig = { ...defaultLoggerConfig, ...(config ?? {}) };
  switch (actualConfig.type) {
    case LoggerType.REALTIME:
      return new RealTimeLogger();
    case LoggerType.TABLE:
    default:
      return new TableLogger();
  }
}
