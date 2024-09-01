// Making stack using in-built function 


class Stack{
    constructor(){
        this.stack = [];
    }

    // pushing element to stack 
    push(item){
        return this.stack.push(item);
    }

    // removing top element
    pop(){
        if(this.stack.length===0){
            return "stack is empty "; 
        }
        else{
            return this.stack.pop();
        }
    }

    // is empty 
    isEmpty(){
        if(this.stack.length===0){
            return "Stack is empty"
        }
        else{
            return "Stack is Not Empty"
        }
    }

    //first element 
    peek(){
        return this.stack[this.stack.length-1];
    }

    // size of stack
    size(){
        return this.stack.length;
    }

    // printing stack element 
    print(){
        let display = ""
        for(let i = 0; i<this.stack.length; i++){
            display += this.stack[i] +"\n";
        }
        return display;
    }
}

let s1 = new Stack();
console.log(s1.isEmpty());
console.log(s1);

