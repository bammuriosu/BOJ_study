//큐 FIFO
class Queue {
    constructor() {
      this._arr = [];   //빈배열
    }
    enqueue(item) {
      this._arr.push(item); //맨뒤에 넣음
    }
    dequeue() {
      return this._arr.shift(); //dequeue하면 맨앞에걸 뺌
    }
  }
  
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  queue.dequeue(); // 1

//스택 LIFO
class Stack {
    constructor() {
      this._arr = []; //빈배열
    }
    push(item) {
      this._arr.push(item); //맨뒤에 넣음
    }
    pop() {
      return this._arr.pop(); //맨뒤에걸 뺌
    }
  }
  
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.pop(); // 3

//트리
  class Node {
    constructor(content, children = []) {
      this.content = content;
      this.children = children;
    }
  }
  
  const tree = new Node('hello', [    //루트노드이다. world, and, fun 3개의 자식노드를 가짐
    new Node('world'),                 
    new Node('and'),
    new Node('fun', [
      new Node('javascript!')            //fun은 자식노드로 javascript가짐
    ])
  ]);
  
  function traverse(node) {
    console.log(node.content);
    for (let child of node.children) {
      traverse(child);
    }
  }
  
  traverse(tree);
  // hello world and fun javascript!