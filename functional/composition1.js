const users = [
    { age: 12, name: 'Jesus', last: 'Cruz' },
    { age: 1, name: 'Kevin', last: 'Cruz' },
    { age: 10, name: 'Aron', last: 'Cruz' },
    { age: 8, name: 'Adonai', last: 'Cruz' },
]

const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x);

const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);

const filter1 = f => xs => xs.filter(f);
const head = xs => xs[0];
const format = x => ({
    fullName: `${x.name} ${x.last}`,
    age: x.age
})
const format2 = x => `${x.fullName} tiene ${x.age}`
const getFirstInfant = pipe(
        filter1(x => x.age < 2),
        head,
        format,
        format2
    )

const result = getFirstInfant(users);
console.log(result);