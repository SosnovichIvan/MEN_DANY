// создать объект пользователя (name, age, email)
// сделать так:
// нельзя было бы менять не одно свойство напрямую
// проверять что age это число при изменении
// проверять что email соотвествует маске: name@host.domen
// имя можно было бы только получить но изменить нельзя


let txt = /^[\w-\.]+@host.domen$/i
let user = {
    name: "Wadim",
    age: "21",
    email: "pokinet@host.domen",

    get name() {
        return `${this.name = "Wadim"}  `
    },
    get age() {
        return `${this.age = 21}`
    },
    set age(value) {
        if (typeof (value) === "number") { return }
        else { console.log("error:Не число") }
    },

    get email() {
        return `${this.email = "pokinet@host.domen"}`
    },

    set email(value) {
        if (
            txt.test(value)) {
            return
        }
        else {
            console.log("Error:неправильный формат")
        }
    }
};
user.name = "vika"
user.email = "dsd"
console.log(user.name)