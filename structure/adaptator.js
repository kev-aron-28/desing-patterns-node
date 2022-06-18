class Api {
    constructor() {
        this.operations = function(url, opts, verb) {
            switch (verb) {
                case 'get':
                    
                    break;
                case 'post': 
                    break;
                default:
                    break;
            }
        }
    }
}

class Api2 {
    constructor() {
        this.get = function(url, opts) {
            
        }
        this.post = function(url, opts){

        }
    }
}

class ApiAdaptator {
    constructor() {
        const api2 = new Api2();
        this.operations = function(url, opts, verb) {
            switch (verb) {
                case 'get':
                    api2.get(url, opts)
                    break;
                case 'post': 
                    api2.post(url, opts)
                    break;
                default:
                    break;
            }
        }
    }
}