// Dado un array de numeros enteros, retornar el 3er mayor
// Por ejemplo en: [4,3,4,5,1] el tercer mayor es 3
// si la longitud del array es < 3 se debe retornar undefined

const greater3 = nums => {
   let numGrande = -99;
   let numSeg = -999;
   let tercerMayor = -9999;

    nums.forEach(x => {
            if(x >= numGrande){
                numGrande = x;
            }else if(x > numSeg){
                numSeg = x;
            }else if(x > tercerMayor && x < numGrande && x < numSeg){
                tercerMayor = x;
            }  
    });
    return tercerMayor
}


// TESTs no modificar
console.log(greater3[4,3,4,5,1] === 3);
console.log(greater3[3,4] === undefined);
console.log(greater3[4,4,4] === 4);
console.log(greater3[1,1,2,5] === 1);