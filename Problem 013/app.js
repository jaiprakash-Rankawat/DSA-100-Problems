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

    if (!this.head) {
      this.head = nextElement;
      this.tail = nextElement;
    }
    this.tail.next = nextElement;
    this.tail = nextElement;
    this.length++;
  }

  // deleting last element
  pop() {
    if (!this.head) {
      return undefined;
    }

    let temp = this.head;
    let prev = this.head;

    while (temp.next) {
      prev = temp;
      temp = prev.next;
    }

    this.tail = prev;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return temp;
  }

  //  adding element at first positon
  unshift(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  // removing element from first positon
  shift() {
    if (!this.head) {
      return undefined;
    }
    this.head = this.head.next;
    this.length--;
    if (this.length == 0) {
      this.tail = null;
      this.head = null;
    }
  }

  // getting first element
  first() {
    if (this.length == 0) {
      this.head = null;
    }
    return this.head;
  }

  // getting last element
  last() {
    if (this.length == 0) {
      this.tail = null;
    }
    return this.tail;
  }

  // get element by index
  element(index) {
    let counter = 0;
    let temp = this.head;
    while (temp) {
      if (counter == index) {
        return temp;
      }
      temp = temp.next;
      counter++;
    }
  }

  // update value
  update(index, value) {
    let temp = this.element(index);
    if (temp) {
      temp.data = value;
      return true;
    }
    return false;
  }
}

let linkedList = new LinkedList(5);
console.log(linkedList);
