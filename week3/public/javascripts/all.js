const number = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  //makeRequest(number.value);
  axiosFunc(number.value);
});

function makeRequest(value) {
  const httpRequest = new XMLHttpRequest();
  const url = `https://remote-assignments-3khb.onrender.com/getData?number=${value}`;

  httpRequest.open("GET", url, true);
  httpRequest.send();

  httpRequest.onreadystatechange = () => {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        alert(httpRequest.responseText);
      } else {
        alert("There was a problem with the request.");
      }
    }
  };
}

const axiosFunc = (value) => {
  const url = `https://remote-assignments-3khb.onrender.com/getData?number=${value}`;

  axios
    .get(url)
    .then((response) => {
      alert(response.data);
    })
    .catch((error) => console.log(error));
};
