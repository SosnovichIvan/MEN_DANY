// создать объект любой
// сделать так: чтобы при изменении любого свойства данного объекта в консоль выводилось сообщение что на что меняется
// внутри данного объекта не должно быть никаких console или других выводов или переданных внутрь объекта вспомогательных функций



let user = {
    name: "Wadim",
  };
  
  user = new Proxy(user, {
    set(target, prop, val, receiver) {
      console.log(`Значение:${user.name} заменилось на значение:${val}`);
      return Reflect.set(target, prop, val, receiver);
    }
  });
  
  user.name = "Vika"; 