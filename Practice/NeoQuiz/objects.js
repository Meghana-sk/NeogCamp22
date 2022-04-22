const obj = {
    name: "Meghana",
    getName: function(name) {
        return (this.name)
    }
}

const a = obj.getName;

const obj2 = {
    name: "sk",
    get: obj.getName,
}

// console.log(obj2.get())

const obj3 = {name: "HTML"}

console.log(a.bind(obj3)())