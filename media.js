const Media = (...number)=>{
    let result = number.reduce((acm,num)=>acm+num,0);
    return result / number.length;
}
console.log(`A média aritmética é: ${Media(10,20)}`);