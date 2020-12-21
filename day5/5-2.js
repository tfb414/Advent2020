const fs = require('fs');

const setupInputData = () => {
    return fs.readFileSync('./input.txt', {encoding: 'utf8' });
}

const main = () => {
    const input = setupInputData();
}

class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    insert(value){
        let newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }

        let current = this.root;

        while(current) {
            if(value === current.value) return undefined;

            if (value < current.value) {
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }

                current = current.left;
            } else {
                if(current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }
}

console.log(setupInputData());
