// Bonus: Aggiungere alla pagina un’immagine, presa anch’essa da un data.

var app = new Vue(
    {
        el: "#root",
        data: {
            message: "Questo titolo è stato generato con Vue.js!",
            image:"https://picsum.photos/200"
        }
    }
);