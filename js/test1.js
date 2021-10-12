// Expected Result = 55
// Direction : Return sum of array
const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function result(input) {
  // Your Code Here
  let res =0;
  input.forEach(element => {
    res = res + element;
  });

  return res;
}

console.log(result(input));