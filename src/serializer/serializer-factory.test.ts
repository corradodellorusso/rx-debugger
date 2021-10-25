import { serializerFactory } from './serializer-factory';
import { NoopSerializer } from './noop-serializer';

test('serializer-factory no config', () => {
  const serializer = serializerFactory(null);
  expect(serializer).toBeInstanceOf(NoopSerializer);
});
