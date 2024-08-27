class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  // pushing items to linkedlist
  push(item) {
    let nextElement = new Node(item);
    this.tail.next = nextElement;
    this.tail = nextElement;
    this.length++;
  }
}

let link = new LinkedList(5);
link.push(10);
link.push(20);
link.push(30);
console.log(link);
