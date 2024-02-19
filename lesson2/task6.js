//Реализация функция метода массива some

function isPosit(num) {
    return num > 0;
}

let arr = [-1, -2, -5, 20, -29]

console.log(arr.some(isPosit))


function main() {
    let temp
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > 0) {
            temp = true
            break
        }
        else{
            temp=false
        }
    }
    console.log(temp)
}
main()