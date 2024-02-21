// Реализация функция метода массива map
let users= [
    {name:"Wadim",age:25},
    {name:"Vika",age:32},
    {name:"Maksim", age:30},
]

let filtrUser=users.map(item=>item.name)

console.log(filtrUser)


let newUser=[]
let q=0;

function main (){
for(let i=0;i<users.length;i++){
    newUser[q]=users[i].name
    q++
}
console.log(newUser)
}
 main()
