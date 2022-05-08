const Bidmen = (arr)=>{
   const numbers = [];
   arr.forEach(list=>numbers.push(...list.sort()));
   return numbers;
}
console.log(Bidmen([[2,5],[8,3],[10,12]]));