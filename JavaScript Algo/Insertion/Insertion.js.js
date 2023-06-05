// let data = [10,20,30,40,50,60];
// let newEl = 35;
// let position =3;

// for(let i=data.length-1; i>=0; i--){
//     if (i>=position){
//         data[i+1] =data[i];
//         if(i==position){
//             data[i]=newEl;
//         }
//     }
// } 
// console.log(data)

function insert(){
let data = [10,20,30,40,50,60];
let newEl = document.getElementById('newEl').value;
let position =document.getElementById('position').value;

for(let i=data.length-1; i>=0; i--){
    
    if (i>=position){
        data[i+1] =data[i];
        if(i==position){
            data[i]=newEl;
        }
    }
} 
console.log(data)
}