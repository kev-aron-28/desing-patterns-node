const dog = {
    kind: 'Bulldog',
    bark: function() {
        console.log('GUagu soy un ', this.kind);
    }
}

const kiltro = Object.create(dog);

kiltro.bark();
kiltro.kind = 'Super perro';

kiltro.bark();