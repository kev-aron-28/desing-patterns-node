class User {
    constructor() {
        this.name = 'Kevin';
    }
}

const user = new User();

const init = () => {
    user.on('login', userLoggin);
}

const userLoggin = () => {

}

init();

const login = () => {
    user.trigger('login');
}

login()
