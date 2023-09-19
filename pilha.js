class pilha {
    constructor() {
       this.items = []; // {1}
    }

    push(element) {
        this.items.push(element);
    } 

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    qualeoPrimeiro(){
        return this.items[0];
    }

    totalElementos(){
        return this.items.length;
    }

    size(){
        return this.items.length;
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

const p = new pilha(); 
p.push(10)
p.push(1)
p.push(5)
console.log(p);
console.log( 'valor do ultimo elemento: ', p.peek());
p.pop()
console.log(p);
console.log( 'valor do ultimo elemento: ', p.peek());
console.log( 'valor do primeiro elemento: ',p.qualeoPrimeiro() );
console.log(p.isEmpty());


    