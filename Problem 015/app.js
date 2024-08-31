// Queue 

class Node{
    constructor(value){
        this.data = value;
        this.next = null;
    }
}

class Queue {
    constructor(value){
        let newNode = new Node(value);
        this.first = newNode;
        this.last = newNode;
        this.length=1; 
    }

    // adding element to last 
    enqueue(item){
        let newNode = new Node(item);
        if (this.length==0){
            this.first= newNode;
            this.last=newNode;
            this.length=1;
        }
        else{
            this.last.next = newNode;
            this.last = newNode;
            this.length++ 
        }
    }
    dequeue(){
        if(this.length==1 || this.length==0){
            this.first = null;
            this.last = null;
            this.length = 0;
            return ;
        }
        this.first = this.first.next;
        this.length--;
    }
}

let queue = new Queue(3);
queue.enqueue(5);
queue.dequeue()
console.log(queue);
