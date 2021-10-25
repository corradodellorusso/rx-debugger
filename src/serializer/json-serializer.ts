import { Serializer } from './serializer';

/**
 * Uses javascript bundled JSON serialization/deserialization.
 */
export class JsonSerializer implements Serializer {
  deserialize(value: any): any {
    if (value === undefined) {
      return undefined;
    }
    return JSON.parse(value);
  }

  serialize(value: any): any {
    return JSON.stringify(value);
  }
}
