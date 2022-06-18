const Commander = (() => {
    const o = {
        buy: x => {
            console.log('Comprando ', x);
        },
        sell: x => {
            console.log('Vendiendo', x);
        }
    }

    return {
        run: (command, args) => {
            if(!o[command]){
                console.log('No existe!');
                return
            }

            o[command](args);
        }
    }
})()


Commander.run('buy', 'Computadora');