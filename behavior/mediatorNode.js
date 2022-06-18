const Emmiter = require('events');
const emmiter = new Emmiter();

emmiter.on('lala', x=> console.log(x));
emmiter.emit('lala', { lolo: 'lala' })