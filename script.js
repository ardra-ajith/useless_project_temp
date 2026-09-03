const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");
const typing = document.getElementById("typing");


// Kozhiyude different messages
const messages = [
    "Chaaya kudicho? ☕",
    "Orangiyo? 👀",
    "Njan ivide undatto 😌",
    "Enthaa enne nokkathath? 😭",
    "Chettayine miss cheytho daave? 👀",
    "Oru reply thannude? 🥺",
    "Food kazhicho? 🍚",
    "Enthokkeya nadakkunne? 👀",
    "Busy aanalle... njan kandupidicholam 😌"
];


// Kozhi message add cheyyan
function addKozhiMessage(text) {

    const message = document.createElement("div");

    message.classList.add("message", "kozhi-message");

    message.textContent = text;

    chatBox.appendChild(message);

    // Latest message automatically kaanikkan
    chatBox.scrollTop = chatBox.scrollHeight;
}


// Random Kozhi message
function sendRandomMessage() {

    const randomIndex =
        Math.floor(Math.random() * messages.length);

    addKozhiMessage(messages[randomIndex]);
}


// Starting message
setTimeout(function () {
    sendRandomMessage();
}, 3000);


// User type cheyyumbol typing indicator
userInput.addEventListener("input", function () {

    if (userInput.value.length > 0) {

        typing.textContent = "Kozhi is typing...";

    } else {

        typing.textContent = "";

    }

});


// Send button click count
let clickCount = 0;


sendBtn.addEventListener("click", function () {

    clickCount++;

    // Message send cheyyilla
    userInput.value = "";


    // 3 clicks kazhinjal prank message
    if (clickCount === 3) {

        addKozhiMessage(
            "OOPS! ONNUM PARANJITT KARYAMILLA 😭😂"
        );

        clickCount = 0;

        typing.textContent = "";

        return;
    }


    // First and second click
    typing.textContent = "Kozhi is typing...";


    setTimeout(function () {

        sendRandomMessage();

        typing.textContent = "";

    }, 1000);

});


// Every 10 seconds Kozhi oru message parayum
setInterval(function () {

    sendRandomMessage();

}, 10000);