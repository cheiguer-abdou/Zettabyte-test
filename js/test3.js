// Expected Result : [false, true]
// Direction :
// The first value : If all of arr2 has bigger value than the biggest value of arr1;
// The second value : If some of arr2 has smaller value than the smallest value of arr1;
const arr1 = [4, 6, 2, 3, 5];
const arr2 = [1, 3, 4, 7, 9, 10];

function result(arr1, arr2) {
  // Your Code Here
  
  const res = [true, true];
  let bigArr1 = arr1[0];
  let smallArr1 = arr1[0];

  for(let i=1; i<= arr1.length; i++){
    if(arr1[i]< smallArr1){
      smallArr1 = arr1[i];
    }

    if(arr1[i] > bigArr1){
      bigArr1 = arr1[i]
    }
  }

  for(let i=0; i<= arr2.length; i++){
    if(arr2[i] < bigArr1){
      res[0] = false;
      break;
    }

    if(arr2[i] < smallArr1){
      res[1] = true;
      break;
    }
  }

  return res;
}

console.log(result(arr1, arr2));