const Recursive = (number)=>{
    if(number === 0)return "";
    return number === 1? "chunk-" : "chunk-" + Recursive(number-1);
}
console.log(Recursive(10));