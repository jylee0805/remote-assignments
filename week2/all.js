// Assignment 4: HTML DOM and Event Handling
let welcome = document.querySelector(".banner_title");

let menuBtn = document.querySelector(".menu_btn");
let closeSymbol = document.querySelector(".close");
let menuSymbol = document.querySelector(".menu");
let floatMenu = document.querySelector(".float_menu");

let main = document.querySelector("main section");
let more = document.querySelector(".more");
let toggle = false;

welcome.addEventListener("click", () => {
  welcome.textContent = "Have a Good Time!";
});

menuBtn.addEventListener("click", (e) => {
  if (e.target.innerText == "menu") {
    e.target.style.display = "none";
    closeSymbol.style.display = "block";
    floatMenu.style.display = "block";
    menuBtn.style.position = "fixed";
  } else if (e.target.innerText == "close") {
    e.target.style.display = "none";
    menuSymbol.style.display = "block";
    floatMenu.style.display = "none";
    menuBtn.style.position = "relative";
  }
});

main.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON" && toggle == false) {
    more.style.display = "flex";
    toggle = true;
  } else {
    more.style.display = "none";
    toggle = false;
  }
});

//Assignment 1: Function and Array
function max(numbers) {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] - max > 0) {
      max = numbers[i];
    }
  }
  return max;
}
console.log(max([1, 2, 4, 5])); // expected output: 5
console.log(max([5, 2, 7, 1, 6])); // expected output: 7

//Assignment 2: Function and Object
function calculate(args) {
  let num1 = args.n1;
  let num2 = args.n2;
  let op = args.op;
  if (op == "+") {
    return num1 + num2;
  } else if (op == "-") {
    return num1 - num2;
  } else if (op == "*") {
    return num1 * num2;
  } else if (op == "/") {
    return num1 / num2;
  } else {
    return "Not supported";
  }
}
console.log(calculate({ n1: 2, n2: 3, op: "+" })); // expected output: 5
console.log(calculate({ n1: 5, n2: 2, op: "-" })); // expected output: 3
console.log(calculate({ n1: 1, n2: 6, op: "x" })); // expected output: 'Not supported'

//Assignment 3: Function, Array, and Object
function calculateTotal(data) {
  let discount = data.discount;
  let products = Array.from(data.products);
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += products[i].price * (1 - discount);
  }
  return total;
}
const discountedPrice = calculateTotal({
  discount: 0.1,
  products: [
    {
      name: "Product 1",
      price: 100,
    },

    {
      name: "Product 2",
      price: 700,
    },

    {
      name: "Product 3",
      price: 250,
    },
  ],
});
console.log(discountedPrice); // show the total price of all products after applying a discount

//Assignment 5: Algorithm (Advanced Optional)
function twoSum(nums, target) {
  let num2;
  let ans = [];
  let result;
  for (let i = 0; i < nums.length; i++) {
    num2 = target - nums[i];
    let index2 = nums.indexOf(num2, i + 1);
    if (index2 != -1 && index2 != i) {
      ans.push(i, index2);
      return ans;
    }
  }
}
console.log(twoSum([2, 7, 11, 15], 9));
