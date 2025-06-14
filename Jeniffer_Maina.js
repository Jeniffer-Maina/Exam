/. converting argument to numbers ./
const args = process.argv.slice(2);

/. a sum calculating function ./
const numbers = args.map(Number);


function calculateSum(nums) {
  return nums.reduce((sum, num) => sum + num, 0);
}

/. calculating and logging the sum ./
const sum = calculateSum(numbers);
console.log("The sum is:", sum);