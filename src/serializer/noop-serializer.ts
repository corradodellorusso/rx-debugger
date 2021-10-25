import { Serializer } from './serializer';

/**
 * No-operation serializer.
 * Simply returns provided value.
 */
export class NoopSerializer implements Serializer {
  deserialize(value: any): any {
    return value;
  }

  serialize(value: any): any {
    return value;
  }
}
