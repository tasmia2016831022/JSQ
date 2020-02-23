function foo() {
  let a = b = 0;
  a++;
  console.log(a);
  return a;
}

foo();
typeof a;
typeof b;

console.log(b);

// a local
// b global