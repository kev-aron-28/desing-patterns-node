const y = 'lele';
const f = () => {
    const x = 'lolo';
    console.log(x);
}

const g = () => {
    const x = 'lolo';
    return () => {
        const z = 'lili';
        console.log(x,y,z);
    }
}
g()()
