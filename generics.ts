function logStr(x: string): string {
  console.log(x);
  return x;
}

function logNum(x: number): number {
  console.log(x);
  return x;
}

function logArr(x: any[]): any[] {
  console.log(x);
  return x;
}
// The code is repeating itself

function logAny(x: any): any {
  console.log(x);
  return x;
}

// if we choose any then we should loss properties / suggestions on passing args
// we use generics

function consoleIn<T>(x :T):T{
    console.log(x)
    return x
}

consoleIn([22 , 14 , 0]) // inferred by tsc