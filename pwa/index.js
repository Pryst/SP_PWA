let prenom = document.getElementById("name");
let message = document.getElementById("message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (prenom.value == "") {
    alert("Veuillez saisir votre prenom");
  }
  if (message.value == "") {
    alert("Veuillez saisir votre message");
  }
  let item = {
    prenom: prenom.value,
    message: message.value,
  };

  let items = [];

  if (localStorage.getItem("items")) {
    let litem = JSON.parse(localStorage.getItem("items"));
    items = litem;
  }

  items.push(item);

  localStorage.setItem("items", JSON.stringify(items));
});
