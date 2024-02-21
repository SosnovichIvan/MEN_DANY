//Реализация функция метода массива reduce

let arr=[2,0,3,1,5]

let result=arr.reduce((acum,item)=>acum+item,0)

console.log(result)

function sum (){
    let acum=0;
    for(let i=0;i<arr.length;i++){
        acum+=arr[i]
    }
    console.log(acum)
}
sum()