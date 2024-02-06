// написать функцию замыкания
// которая при первом вызове принимает массив имен и возращает каждый раз следющее имя и так по кругу

let c = ["Wadim", "Ivan", "Saсha"]

function main() {
    let i = 0;
    return function () {
        if(i<c.length){
        return c[i++]
        }
        else{i=0
        return c[i++]}
        }
        
}
let beta = main()
console.log(beta());
console.log(beta());
console.log(beta());
console.log(beta());
console.log(beta());
console.log(beta());