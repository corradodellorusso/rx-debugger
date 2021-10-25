import { Serializer, SerializerConfig } from './serializer';
import { NoopSerializer } from './noop-serializer';

const defaultSerializerConfig: Required<SerializerConfig> = { type: NoopSerializer };

export function serializerFactory(config: SerializerConfig): Serializer {
  const actualConfig: SerializerConfig = { ...defaultSerializerConfig, ...(config ?? {}) };
  return new actualConfig.type();
}
