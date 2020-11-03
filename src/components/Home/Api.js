export function api(msg, name, email) {
  const requestOption = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      msg: msg,
      name: name,
      email: email,
    }),
  };
  fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", requestOption)
    .then((response) => response.json())
    .then((data) => console.log(data));
}
