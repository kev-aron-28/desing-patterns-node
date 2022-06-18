const result = (() => {
    const x = {};

    return {
        a: () => console.log(x),
        b: (key, val) => x[key] = val
    }
})()
// IIFE


// Example

const Users = (() => {
    const recurse = '/users';

    return {
        listar: async () => {
            await fetch(recurse).then(x => x.json());
        },
        crear: async (data) => {
            await fetch(recurse, 
                { 
                    type: 'POST', 
                    body: JSON.stringify(data) 
                }).then(x => x.json())
        }
    }
})()


