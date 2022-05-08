const Fat = (num)=>{
    return num > 0n ? num * Fat(num -1n) : 1n;
}
console.log(Fat(530));