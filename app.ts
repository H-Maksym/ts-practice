const btn = document.querySelector('.btn')! as HTMLButtonElement;
const inputFirst = document.getElementById('num1')! as HTMLInputElement;
const inputSecond = document.querySelector('#num2')! as HTMLInputElement;

//INFO base function added for different count arguments
function add(...num: number[]) {
  return num.reduce((acc, item) => {
    return (acc += item);
  }, 0);
}

// function add(num1: number, num2: number) {
//   return num1 + num2;
// }

btn.addEventListener('click', function () {
  console.log(add(+inputFirst.value, +inputSecond.value));
});

export {};
