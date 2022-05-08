const Language = (...elements)=>{
    const reverse = [];
    for(let i in elements){
        reverse[i] = elements[elements.length -i -1];
    }
    return reverse;
}
console.log(Language("Luis","Luisa"))