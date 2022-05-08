const Emer = (str)=>{
    let obj = {}
    for(let i = 0; i < str.length; i++){
        obj[str[i]] = obj[str[i]] ? obj[str[i]] + 1 : 1;
    }
    return Object.values(obj).every((count,index,array)=>count !==0? count === array[index - 1] : true)
}
console.log(Emer("Testando"));