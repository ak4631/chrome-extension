fetch("https://icanhazdadjoke.com/slack")
  .then((data) => data.json())
  .then((jokedata) => {
    console.log(jokedata);
    const joketext = jokedata.attachments[0].fallback;
    const jokeElement = document.getElementById("joke_ele");
    jokeElement.innerHTML = joketext;
  });
