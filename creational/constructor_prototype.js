class MyClass {
    constructor(p1) {
        this.propierty = p1;

    }

    method() {
        console.log('Im a method');
    }
}

const instance = new MyClass(2);
console.log(instance);


// Example
Object.prototype.log = function() {
    console.log(this);
}

const x = {a: 1};

x.log();

if(!String.prototype.trim){
    String.prototype.trim = function() {
        try {
            return this.replace(/^\s+|\s+$/g, "");
        } catch(e) {
            return this;
        }
    }
}

const y = '    lala   '.trim();

y.log();