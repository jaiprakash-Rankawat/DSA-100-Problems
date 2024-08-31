class Node{
    constructor(Value){
        this.data = Value;
        this.next = null;
    }
}

class Stack {
    constructor(Value){
        let newNode = new Node(Value);
        this.top = newNode;
        this.length = 1;
    }

    // pushing items to stack 
    push(item){
        let newNode = new Node(item);
        newNode.next = this.top
        this.top = newNode;
        this.length++;
    }

    // deleting top element 
    pop(){
        if(this.length==0){
            return undefined;
        }
        this.top = this.top.next;
        this.length--;
    }
}

let stack = new Stack(5);
stack.push("jp")
stack.push("jpG")
stack.push(10)
stack.pop()
stack.pop()
stack.pop()
stack.pop()
stack.push(10)
stack.push(20)
console.log(stack)