const Elevate = (number)=>{
    const cnv = number.toString();
    let rst = "";
    for(let n = 0; n < cnv.length; n++){
       rst += Math.pow(parseInt(cnv[n]),2).toString();
    }
    return parseInt(rst);
}
console.log(Elevate(25));