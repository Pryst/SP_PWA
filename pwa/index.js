let prenom = document.getElementById("name");
let message = document.getElementById("message");
let form = document.getElementById("input-area");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (prenom.value == "" && message.value == "") {            // ###########################  adapter message d'erreur à chaque situation ###################
    alert("Veuillez saisir votre prenom puis votre message");
  }
  else if (prenom.value !== "" && message.value == "") {
    alert("Veuillez saisir votre message");
  }
  else if (prenom.value == "" && message.value !== "") {
    alert("Veuillez saisir votre prenom d'abord");
  }


  if (prenom.value !== "" && message.value !== "") {   // ########################## incrire dans local storage que si prenom et massage sont saisis  #######################
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

    /* ###########################################################################################   si prenom et message sont saisis alors creation +affichage  des balises html, de l'heure et de prenom et message */
    let containerMessage = document.createElement('div');
    containerMessage.className = "message";

    let username = document.createElement('div');
    username.className = "username";
    let usernameText = document.createTextNode(prenom.value);
    username.appendChild(usernameText);

    let msg = document.createElement('div');
    msg.className = "msg";
    let msgText = document.createTextNode(message.value);
    msg.appendChild(msgText);

    let d = new Date();
    let ladate = "";
    if (d.getMonth() <= 8) {
      ladate = "le " + d.getDay() + "/0" + (d.getMonth() + 1) + "/" + d.getFullYear() + " à " + d.getHours() + "h" + d.getMinutes() + ":" + d.getSeconds() + ":" + d.getMilliseconds();
    } else {
      ladate = "le " + d.getDay() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear() + " à " + d.getHours() + "h" + d.getMinutes() + ":" + d.getSeconds() + ":" + d.getMilliseconds();
    }

    let temps = document.createElement('div');
    temps.className = "timestamp";
    let tempsText = document.createTextNode(ladate);
    temps.appendChild(tempsText);



    containerMessage.appendChild(username);
    containerMessage.appendChild(msg);
    containerMessage.appendChild(temps);

    document.getElementById("chat-area").appendChild(containerMessage);

    /* #################################################################################################################"*/

    prenom.value = "";      // vider les input 
    message.value = "";
  }
}
);
