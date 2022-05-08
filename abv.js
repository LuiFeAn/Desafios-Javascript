const Abv = (name)=>{
    const ftr = name.split(" ");
    let result = '';
    for(let i = 0; i < ftr.length - 1; i++){
        result += ftr[i][0]+".";
    }
    return `${Upper(`${ftr[ftr.length -1]} ${result}`)}`
}
const Upper = (str)=>str.toUpperCase();
console.log(Abv('Luis Fernando Andrade'));