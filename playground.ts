export function foo(arg: unknown) {
  const isString = typeof arg === "string";
  if (isString) {
    console.log(arg.toUpperCase());
  }
}
