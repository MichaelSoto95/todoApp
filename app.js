// const Mydiv=document.getElementById("mydiv");
// const topCount =25;

// function makeActive(){
//    Mydiv.classList.add(".active");
//    Mydiv.innerHTML="This is Active";
// }

// function btncolor(){

//     Mydiv.style.backgroundColor='yellow';
//     Mydiv.style.left=topCount+'px'
//     Mydiv.style.top='144px'
//     // document.getElementById("mydiv").style.scale='1.66';
//     let element = document.createElement('H1');
// element.innerText='Hiiii'.toUpperCase();
// document.body.appendChild(element); 

// }
// function btncolor2(){

// const element = document.getElementById("newId");
//    element.classList.add("active");
//   element.innerHTML="This is Active";
// }

//imprimir un arreglo de dos dimensiones por elemento utilizando for 
let array1=[["a","b","c","d"],
           ["a","b"],
           ["a","b","c"]];

let array2=[[1,3],[2,6]]     


//multiplicamos cada elemento de un matriz
let totalArray=(array)=>{
    total=1
    for (let i = 0; i < array.length; i++) {
        let subarray = array[i];
    
        for (let j = 0; j < subarray.length; j++) {
            total *=subarray[j];
            
        }
    }
    return total;
        }
    console.log( totalArray(array2));


   // imprimimos cada elemento de una matriz
    let printArray=(array)=>{
for (let i = 0; i < array.length; i++) {
    let subarray = array[i];

    for (let j = 0; j < subarray.length; j++) {
        console.log(subarray[j]);
        
    }
}
    }
printArray(array1);


//creamos matriz con parametros de fila y elemento y valor de elemto en la funcion

let matrix =[];//creamos el arreglo matriz

    let  makeMatrix=(m,n,value) =>{    //funcion con parametros
        for (let i = 0; i<m; i++) {     // primer for para la cantidad de arrglos seria m'3'

        let row=[];//declaramos variable para guardar elementos en la fila

        for (let j = 0; j < n; j++) {  //segundo for para tener la cantidad de arrglos

        row.push(value);  //corremos el push n'5' veces que serian los elementos

        }
        matrix.push(row);
        }
    return matrix; //retornamos la el arrglo matriz

    }
console.log(makeMatrix(3,5,null)); //3filas de cinco elementos con valor null
console.log(makeMatrix(4,2,"x"));// 4filas de 2 elemntos con valor x
console.log(makeMatrix(2,2,0));// 2filas de 2 elementos con valor de 0


//split
let str ="sdfs.sdfs.dfsfd.sdf.f.f.dfsd.f.sd.f";
let nstr="1234567890"

let split = str.split('.');
let replace =str.replace("/./g","?");
console.log(replace);
console.log(split);

let split2 = nstr.split('');
console.log(split2);
split.forEach((s) => {
      s= parseInt(s);
});


