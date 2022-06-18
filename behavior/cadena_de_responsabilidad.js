class Suma {
    constructor(x = 0) {
        this.val = x;
    }

    suma(v) {
        this.val += v;
        return this;
    }
}

const valor = new Suma(1);
valor 
    .suma(1)
    .suma(2)
    .suma(3)

console.log(valor);