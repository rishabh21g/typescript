function add(num1: number, num2: number) {
  return num1 + num2;
}

const sum = add(12, 2);
// console.log(sum)

const nums: Array<number> = [12, 15, 89, 74];
function getTotal(nums: Array<number>) {
  return nums.reduce((acc, item) => {
    return acc + item;
  });
}

const result = getTotal(nums)
console.log(result)
