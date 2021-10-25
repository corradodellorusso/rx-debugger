## rx-debugger

### 🔍 Easily debug rxjs pipes

🔗 [Docs](https://corradodellorusso.github.io/rx-debugger/index.html)

📦 [NPM](https://www.npmjs.com/package/rx-debugger)

This package makes it super-easy to understand what goes down your pipes.
Just type something like this:

```typescript
import { rxDebugger, map, toArray } from 'rx-debugger';
import { of } from 'rxjs';

rxDebugger(of(1, 2, 3))
  .pipe(
    map((item) => item * 2),
    toArray()
  )
  .subscribe();
```

And you will get this straight in the console:

| operator   | value       | date                     |
| ---------- | ----------- | ------------------------ |
| (start)    | 1           | 2021-10-21T14:20:55.510Z |
| map        | 2           | 2021-10-21T14:20:55.510Z |
| (start)    | 2           | 2021-10-21T14:20:55.510Z |
| map        | 4           | 2021-10-21T14:20:55.510Z |
| (start)    | 3           | 2021-10-21T14:20:55.510Z |
| map        | 6           | 2021-10-21T14:20:55.510Z |
| toArray    | [ 2, 4, 6 ] | 2021-10-21T14:20:55.510Z |
| (complete) |             | 2021-10-21T14:20:55.510Z |

Could it be easier than this?

### 🔧 Configuration

rx-debugger offers more configuration other than printing the pipe as a table.

#### 🖨️ Loggers

Loggers define how and where debug information will be printed.

There's no way to build custom loggers at the moment, but we plan to support this in the near future.

Loggers can be configured while patching the source observable.

For example:

```typescript
rxDebugger(source, { logger: { type: LoggerType.REALTIME } });
```

Please refer to `example-logger.ts`.

##### Table logger (default ⭐)

Gathers all the data, then prints them in a table (using `console.table` by default) as soon as the source errors or completes.

If you expect to use to work with mutable objects adopting a serializer is advised.

##### Real time logger

Prints data (using `console.table` by default) after each pipe operator does its job, without waiting observable complete or error.

This logger is advised when debugging long observables or subjects.

#### 🧬 Serializers

Serializers help serializing/deserializing objects for printing purposes.

You can implement your own serializer implementing `Serializer` interface.

Loggers can be configured while patching the source observable.

For example:

```typescript
rxDebugger(source, { serializer: { type: JsonSerializer });
```

Please refer to `example-serializer.ts`.

##### NoOp Serializer (default ⭐)

As you may expect, this does nothing. By default no serialization is made.

##### JSON Serializer

Uses javascript bundled JSON serialization/deserialization.

### ℹ️ Infos

- This package is in early development stages. Any suggestion or help is welcome.
- This package is intended for development use. You can use it in production environments at your own risk.
- You can find more examples in `example` folder.

### ⚙️ Compatibility

This package **does not** use semver for versioning. Our major number follows the one of rxjs.
Here's the compatibility table.

| rx-debugger | rxjs   |
| ----------- | ------ |
| ^7.0.0      | ^7.0.0 |
| ^6.0.0      | ^6.0.0 |

### 💬 FAQ

> **Q**: I have `undefined` entries in my operator column.
>
> **A**: All the operators should be imported from `rx-debugger` package.

> **Q**: Nothing is printed.
>
> **A**: Be sure to patch your source observable using `rx-debugger` function.
