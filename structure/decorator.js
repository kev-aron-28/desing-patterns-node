class MacBook {
    price() {
        return 1000
    }
}

const memory = mac => {
    const v = mac.price();

    mac.price = function() {
        return v + 100;
    }
}

const macbook = new MacBook();
memory(macbook);



// macbook.addMemory = function() {
//     this.price += 100;
// }

// macbook.addMemory()

console.log(macbook.price());



