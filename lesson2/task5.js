//Реализация функция метода массива sort

// function sortNum(a,b){
//   if(a>b) return 1
//   if(a<b) return -1

// }
let arr=[1,2,5,20,-29]

//arr.sort(sortNum)

function main(arr) {
  for (let j = arr.length - 1; j > 0; j--) {
    for (let i = 0; i < j; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }
}

main(arr)

console.log(arr)