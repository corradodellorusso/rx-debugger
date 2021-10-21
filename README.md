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
```
┌─────────┬──────────────┬─────────────┬────────────────────────────┐
│ (index) │   operator   │    value    │            date            │
├─────────┼──────────────┼─────────────┼────────────────────────────┤
│    0    │  '(start)'   │      1      │ '2021-10-21T14:20:55.510Z' │
│    1    │    'map'     │      2      │ '2021-10-21T14:20:55.510Z' │
│    2    │  '(start)'   │      2      │ '2021-10-21T14:20:55.510Z' │
│    3    │    'map'     │      4      │ '2021-10-21T14:20:55.510Z' │
│    4    │  '(start)'   │      3      │ '2021-10-21T14:20:55.510Z' │
│    5    │    'map'     │      6      │ '2021-10-21T14:20:55.510Z' │
│    6    │  'toArray'   │ [ 2, 4, 6 ] │ '2021-10-21T14:20:55.510Z' │
│    7    │ '(complete)' │             │ '2021-10-21T14:20:55.510Z' │
└─────────┴──────────────┴─────────────┴────────────────────────────┘
```

Could it be easier than this?

### Infos

- This package is in early development stages. Any suggestion or help is welcome.
- This package is intended for development use. You can use it in production environments at your own risk. 
- You can find more examples in `example` folder.

### FAQ

> **Q**: I have `undefined` entries in my operator column.
>
> **A**: All the operators should be imported from `rx-debugger` package.

> **Q**: Nothing is printed.
>
> **A**: Be sure to patch your source observable using `rx-debugger` function.