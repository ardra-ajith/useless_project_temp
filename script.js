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
// User message actually send aavilla
    userInput.value = "";

    if (clickCount === 3) {

    const notification =
        document.getElementById("notification");

    notification.classList.add("show");

    setTimeout(function () {
        notification.classList.remove("show");
    }, 4000);

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
// ================= NOTIFICATION =================

const notificationMessages = [
    "Chaaya kudicho? ☕",
    "Mwolusee... orangiyo? 👀",
    "Njan ivide undatto 🐔",
    "Enthaa reply tharathath? 😭",
    "Food kazhicho? 🍚",
    "Busy aanalle... njan kandupidicholam 👀",
    "Hello hello... enne maranno? 🐔",
    "Oru reply thannude? 🥺"
];

function showNotification(text) {

    const popup = document.getElementById("notification");
    const message = document.getElementById("notificationMessage");

    if (popup && message) {

        message.textContent = text;

        popup.classList.add("show");

        setTimeout(function () {
            popup.classList.remove("show");
        }, 5000);
    }

    // Browser notification
    if (
        "Notification" in window &&
        Notification.permission === "granted"
    ) {
        new Notification("🐔 Reminder Kozhi", {
            body: text
        });
    }

    // Voice
    if ("speechSynthesis" in window) {

        const speech = new SpeechSynthesisUtterance(text);

        speech.lang = "ml-IN";
        speech.rate = 0.9;
        speech.pitch = 1.1;

        speechSynthesis.cancel();
        speechSynthesis.speak(speech);
    }
}


// Ask permission
if ("Notification" in window) {
    Notification.requestPermission();
}


// Random notification after 15–30 seconds
function scheduleNotification() {

    const randomTime =
        Math.floor(Math.random() * 15000) + 15000;

    setTimeout(function () {

        const randomIndex =
            Math.floor(Math.random() * notificationMessages.length);

        showNotification(notificationMessages[randomIndex]);

        scheduleNotification();

    }, randomTime);
}


// Start
scheduleNotification();