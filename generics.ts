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

function consoleIn<T>(x: T): T {
  console.log(x);
  return x;
}

consoleIn([22, 14, 0]); // inferred by tsc

interface HasAge {
  age: number;
}

interface Player {
  name: string;
  age: number;
}
const people: HasAge[] = [{ age: 12 }, { age: 24 }, { age: 16 }, { age: 19 }];

const players: Player[] = [
  { name: "Sam", age: 21 },
  { name: "Dane", age: 29 },
  { name: "Silly", age: 18 },
];

// function getOldest(people: HasAge[]): HasAge {
//   return people.sort((a, b) => b.age - a.age)[0];
// }

// NOW WE USE GENERIC
function getOldest<T extends HasAge>(people: Array<T>): T {
  return people.sort((a, b) => b.age - a.age)[0];
}

// const oldest = getOldest(people).age;
// const oldest = getOldest(players) as Player; // assertion
const oldest = getOldest(players);

//real world example

interface Ipost {
  title: string;
  id: number;
  description: string;
}
interface Iuser {
  age: number;
  id: number;
  name: string;
}
async function fetchPostdata(path: string): Promise<Ipost> {
  const data = await fetch(`http://example.com${path}`);
  return await data.json();
}
async function fetchUserdata(path: string): Promise<Iuser> {
  const user = await fetch(`http://example.com${path}`);
  return await user.json();
}
// repetation are there now we use generic fn

const fetchData = async <ResultType>(path: string): Promise<ResultType> => {
  const response = await fetch(`http://example.com${path}`);
  return await response.json();
};

(async () => {
  const res = await fetchData<Ipost>("/post");

  
  
})();
