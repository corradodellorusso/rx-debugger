## rx-debugger
### Easily debug rxjs pipes

This package makes it super-easy to understand what goes down your pipes. 
Just type something like this:
```typescript
import { rxDebugger, map, toArray } from "rx-debugger";
import { of } from "rxjs";

rxDebugger(of(1, 2, 3)).pipe(
  map(item => item * 2),
  toArray(),
).subscribe();

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

### Infos

- This package is in early development stages. Any suggestion or help is welcome.
- This package is intended for development use. You can use it in production environments at your own risk. 
- You can find more examples in `example` folder.

### Compatibility

| rx-debugger | rxjs   |
| ----------- | ------ |
| ^7.0.0      | ^7.0.0 |
| ^6.0.0      | ^6.0.0 |

### FAQ

> **Q**: I have `undefined` entries in my operator column.
>
> **A**: All the operators should be imported from `rx-debugger` package.

> **Q**: Nothing is printed.
>
> **A**: Be sure to patch your source observable using `rx-debugger` function.
