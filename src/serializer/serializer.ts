import { Type } from '../common/interface';

/**
 * Serializers help serializing/deserializing objects for printing purposes.
 */
export interface Serializer {
  /**
   * Serialization result can be literally anything.
   * You could return the provided value as json or simply create a copy of the source object.
   * @param value
   */
  serialize(value: any): any;

  /**
   * Deserialization depends on what is created in serialization step.
   * In some case the implementation can be empty.
   * @param value
   */
  deserialize(value: any): any;
}

export interface SerializerConfig {
  type: Type<Serializer>;
}
