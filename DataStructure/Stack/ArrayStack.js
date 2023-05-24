class _stack{
    constructor() {
        this.stack = [];
        this.idx = -1;
    }

    push = function(item) {
        this.stack[++this.idx] = item;
    }

    pop = function() {
        return this.stack[this.idx--];
    } 

    peek = function() {
        return this.stack[this.idx];
    }

    isEmpty = function() {
        return this.idx === -1;
    }
}

const A = new _stack();
A.push(10);
A.push(20);
A.push(30);

console.log(A.pop());
A.push(40);
A.push(50);
console.log(A.pop());
console.log(A.peek());