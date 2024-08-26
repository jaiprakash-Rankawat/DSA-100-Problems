// Q5. Implement all array operation using class ?

class myArray {
  constructor() {
    this.data = {}; // data is an object
    this.length = 0;
  }

  // pushing element
  push(item) {
    this.data[this.length] = item;
    this.length++;
  }

  // getting element by index
  get(index) {
    return this.data[index];
  }

  // deleting item
  pop() {
    let lastElement = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastElement;
  }

  // add element to the first position
  unshift(item) {
    let newobj = {};
    console.log(newobj);

    newobj[0] = item;
    for (let i = 0; i < this.length; i++) {
      newobj[i + 1] = this.data[i];
    }
    this.length++;
    this.data = newobj;
    return this.data;
  }

  // delete first element
  shift() {
    let newobj = {};
    let element = this.data[0];
    for (let i = 0; i < this.length - 1; i++) {
      newobj[i] = this.data[i + 1];
    }
    this.data = newobj;
    this.length--;
    return element;
  }

  // delete by index
  delete(index) {
    delete this.data[index];
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }

  // add element by index
  add(index, value) {
    let newobj = this.data;
    this.data[index] = value;
    for (let i = index; i < this.length; i++) {
      this.data[i + 1] = newobj[i];
    }
    this.length++;
  }
}

let obj = new myArray(); // obj is the instant of class
