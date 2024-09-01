// Program to check minimum value from stack using min function 

class Node{
    constructor(value){
        this.data = value;
        this.next = null;
    }
}

class Stack {
    constructor(value){
        let newNode = new Node(value);
        this.top = newNode;
        this.length = 1;
    }

    // adding element to stack 
    push(item){
        let newNode = new Node(item);
        newNode.next = this.top;
        this.top = newNode;
        this.length++;
    }

    // Function to find minimum value
    min(){
        if(this.length==0){
            return undefined;
        }
        let current = this.top;
        let minValue = current.data;
        
        while(current.next){
            current = current.next;
            if(minValue>current.data){
                minValue = current.data;
            }
        }
        return minValue;
    }
}

let stack = new Stack(2);
stack.push(10);
stack.push(20);
stack.push(4);
console.log(stack.min())
