const message = document.getElementById("message");
const okayBtn = document.getElementById("okayBtn");

const messages = [
    "Chaaya kudicho? ☕",
    "Mwoluse... enne ignore cheyyuvaano? 🥹",
    "Orangiyo? 👀",
    "Njan ivide undatto 😌",
    "Enthaa enne nokkathath? 😭",
    "Chettayine miss cheytho daave? 👀",
    "Oru reply thannude? 🥺"
];

okayBtn.addEventListener("click", function () {

    const randomIndex = Math.floor(Math.random() * messages.length);

    message.textContent = messages[randomIndex];

});