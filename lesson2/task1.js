// Реализация функция метода массива filter

let users= [
    {name:"Wadim",age:25},
    {name:"Vika",age:32},
    {name:"Maksim", age:30},
]

let filtrUser = users.filter(item=>item.age>26);
console.log(filtrUser)


let newUser=[]
let q=0;

function main (){
for(let i=0;i<users.length;i++){
if(users[i].age>26){
    newUser[q]=users[i]
    q++
}
}
console.log(newUser)
}


main()
