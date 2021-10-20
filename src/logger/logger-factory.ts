import {TableLogger} from "./table-logger";
import {Logger} from "./logger";

export function loggerFactory(): Logger {
  return new TableLogger();
}
