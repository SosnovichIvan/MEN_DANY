//Реализация функция метода массива every

function isPosit(number){
    return number===29;
}

let arr=[29,2,-2,5]

console.log(arr.every(isPosit))



function main() {
    let temp
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > 0) {
            temp = true
        }
        else {
            temp = false
            break
        }
    }
    console.log(temp)
}
main()