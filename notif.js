
if (window.Notification && window.Notification != "denied") {   //########### notifications ####################""
    Notification.requestPermission().then(permis => {
        if (permis == "granted") {
            const notif = new Notification("Nouveau message", {
                body: "Bienvenue sur le chat !!! ",
                icon: "img/icon/icon-512x512.png",
            })
        }
    })
}


