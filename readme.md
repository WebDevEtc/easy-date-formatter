## Easy date formatter for Javascript

Use the same format strings as you can use in PHP, but in Javascript.

Added in a small personal project, I added it up on Github as maybe someone else will find it useful. There are probably better solutions with more thought gone into them.

A lot of the timezone related formatting is not supported. Some functions copied from Stackoverflow (with credit url)

## Examples

```ts
const date =  new Date("2020-10-01");

console.log(dateFormatter('d-m-Y', date));
// 01-10-2020
```

For more examples, see the test file.
