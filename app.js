const url = "https://jsonplaceholder.typicode.com/users";

fetch(url).then((res) => {
  res.json().then((json) => {
    console.log(json);
  });
});
