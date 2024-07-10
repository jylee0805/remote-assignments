let main = document.querySelector("main");
let productInfo = "";

//assignment1
function delayedResult(n1, n2, delayTime, callback) {
  // your code here
  setTimeout(() => {
    callback(n1 + n2);
  }, delayTime);
}
delayedResult(4, 5, 3000, function (result) {
  console.log(result);
}); // 9 (4+5) will be shown in the console after 3 seconds
delayedResult(-5, 10, 2000, function (result) {
  window.alert(result);
}); // 5 (-5+10) will be shown in an alert dialog after 2 seconds

//assignment2
function ajax(url) {
  // your code here
  return fetch(url)
    .then((res) => res.json())
    .catch((error) => console.log(error));
}
function render(data) {
  data.forEach((element) => {
    productInfo += `
    <section class="product_item">
        <h2 class="product_title">${element.name}</h2>
        <p>${element.price}</p>
        <p>${element.description}</p>
    </section>
    `;
    main.innerHTML = productInfo;
  });
}

const url = "https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products";

ajax(url).then((data) => {
  render(data);
});
