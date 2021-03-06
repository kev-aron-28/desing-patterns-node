function* iterator(col) {
    let nextIndex = 0;
    while(nextIndex < col.length){
        yield col[nextIndex++];
    }
}

const x = [1,2,3,4,5,6,7,8];
const gen = iterator(x);
console.log(gen.next());
console.log(gen.next());