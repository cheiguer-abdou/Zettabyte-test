// Expected result : [7, 3, 1, 2, 5, 6, 9, 10, 4, 8]
// Direction : Mutate arr1 to return combined array with arr2. The conditions are :
// 1. odd number at beginning 
// 2. even number at the end of array 
// 3. Original arr1 at the middle

const arr1 = [1, 2, 5, 6, 9, 10];
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function result(arr1, arr2) {
  // Your Code Here
  for(let i = 0; i < arr2.length; i++){
      for (let j = 0; j < arr1.length; j++) {
        if(arr2[i] == arr1[j]){
          arr2.splice(i,1);
        }
      }
  }

  for (let i = 0; i< arr2.length; i++) {
     if(arr2[i] % 2 == 0){
       arr1.push(arr2[i]);
     }

     else{
       arr1.unshift(arr2[i]);
     }
   }

  return arr1;
}

console.log(result(arr1, arr2));