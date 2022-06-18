const module = {
    prop: 'Hola',
    config: {
        lenguaje: 'es',
        cache: true
    },
    setConfig: config => {
        module.config = config;
    },
    isCacheEnabled: () => {
        console.log(module.config.cache ? 'si' : 'no');
    }
}