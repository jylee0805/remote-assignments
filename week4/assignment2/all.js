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
});
delayedResult(-5, 10, 2000, function (result) {
  window.alert(result);
});

//額外挑戰
const delayedResultPromise = (n1, n2, delayTime) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(n1 + n2);
    }, delayTime);
  });

delayedResultPromise(4, 5, 3000).then((response) => console.log(response));

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

//額外挑戰
function renderTemplate(data) {
  let temp = document.getElementsByTagName("template")[0];
  data.forEach((element) => {
    let clon = temp.content.cloneNode(true);
    let title = clon.querySelector("h2");
    let info = clon.querySelectorAll("p");
    title.innerText = element.name;
    info[0].innerText = element.price;
    info[1].innerText = element.description;
    main.append(clon);
  });
}

const url = "https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products";

ajax(url).then((data) => {
  renderTemplate(data);
});
