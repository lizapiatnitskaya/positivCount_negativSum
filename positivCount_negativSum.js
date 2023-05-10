function countPositivesSumNegatives(input) {
  if(input==null){
    return [];
  }
  else{
  if (input.length==0){
    return [];
  }
  else{
    
  let positive=input.filter(function(num){
   return num>0;
  }
  )
  let negativSum=input.reduce(function(sum,current){
    if(current<0){
      return sum+current;
    }
    else {return sum;}
    },0);
    let arr=[positive.length, negativSum];
    return arr;
  }}  
}
console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
/*Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.*/ 