// создать в начале файла константу: const variable = 1;
// написать стрелочную функцию которая не принимает аргументов и выводит в консоль значение variable то колличество раз, чему равно это значение
// если значение меньше 0 вывести 1 раз
// если значение не цифра вывести в консоль ошибку

const variable=2

const message = () => {
   if (typeof variable !== 'number') {
   console.log('Error: Не число')
   return
   }
   let count = variable
   do {
   console.log(variable)
   count -= 1
   } while (count > 0)
   }
 message()

