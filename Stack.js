let stack = [];
let currentSize = stack.length;

function push(el) {
  stack[currentSize] = el;
  currentSize += 1;
}

push(12);
push(11);
push(91);

function pop() {
  if (currentSize > 0) {
    currentSize -= 1;
    stack.length = currentSize;
  } else {
    console.log("Stack is already empty !");
  }
}

pop();

// console.log(currentSize);
console.log(stack);



