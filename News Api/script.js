let news_element = document.querySelector(".news_element");
let all_data = document.querySelector(".all_data");

apikey = "Your_APi_Key";
url =
  "https://gnews.io/api/v4/search?q=example&lang=en&country=in&max=10&apikey=" +
  apikey;

var req = new Request(url);
fetch(req).then(async function (response) {
  const data = await response.json();

  for (let i = 0; i < 7; i++) {
    // console.log(data.articles[i].title);
    var div = document.createElement("div");
    var span = document.createElement("a");
    var image = document.createElement("img");
    image.src = `${data.articles[i].image}`;
    span.href = `${data.articles[i].url}`;
    span.target = "_blank";
    let news_data = `${data.articles[i].title}`;
    span.append(news_data);
    div.append(image);
    div.append(span);

    all_data.append(div);
  }
});
