const card = document.querySelector(".card");
const btn = document.querySelector("button");
let fetchData = [];
let index = 0;

//初始載入
queryData(index + 5);

btn.addEventListener("click", () => {
  queryData(index + 5);
});

function queryData(index) {
  fetch(`https://api.github.com/orgs/facebook/repos?per_page=${index}&page=1`)
    .then((res) => res.json())
    .then((data) => {
      print(data);
    })
    .catch((error) => console.log(error));
}

function print(data) {
  for (let i = index; i < data.length; i++) {
    let cardItem = document.createElement("li");
    let private = "";
    let inner = "";
    let topicInner = "";

    cardItem.className = "card_item";
    card.appendChild(cardItem);

    if (data[i].private) {
      private = "Private";
    } else {
      private = "Public";
    }

    inner = `
    <h3 class="card_title">${data[i].name}</h3>
    <span class="card_visible">${private}</span>
    <p class="card_description">${data[i].description}</p>
    `;

    //新增topic標籤
    if (data[i].topics.length != 0) {
      data[i].topics.forEach((item) => {
        topicInner += `<li class="topic_item">${item}</li>`;
      });
      inner += `<ul class="topic">${topicInner}<ul>`;
    }
    cardItem.innerHTML = inner;
  }
  index += 5;
}
