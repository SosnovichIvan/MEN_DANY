// сделать так чтобы в константе примитва string со значением: "Value"
// можно было бы обратится к переменной по ключу: variable и получить значение "1"
// вывести в консоль значение констаны и значение переменной variable


const A=new String("Value")

String.prototype.variable="1"


console.log(A)
console.log(A.variable)
