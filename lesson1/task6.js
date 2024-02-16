// создать функцию конструктор
// которая создает пользователя с переменными внутри
// name, jobs, age

function User(name, jobs, age){
    this.name=name
    this.jobs=jobs
    this.age=age
}

let user=new User("wadim")
let user1=new User("wadim", "front", 21)

console.log(user)
console.log(user1)