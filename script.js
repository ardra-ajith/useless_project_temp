//================= BASIC ELEMENTS =================

const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");
const typing = document.getElementById("typing");


// ================= KOZHI CHAT MESSAGES =================

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


// ================= GET REMINDER FROM BACKEND =================

async function getBackendReminder() {

    const response = await fetch("http://localhost:3000/api/reminder");

    const data = await response.json();

    return data.message;
}
// ================= ADD KOZHI MESSAGE TO CHAT =================

function addKozhiMessage(text) {

    const message = document.createElement("div");

    message.classList.add("message", "kozhi-message");

    message.textContent = text;

    chatBox.appendChild(message);

    // Scroll to latest message
    chatBox.scrollTop = chatBox.scrollHeight;
}


// ================= RANDOM CHAT MESSAGE =================

async function sendRandomMessage() {

    const message = await getBackendReminder();

    addKozhiMessage(message);
}


// ================= FIRST CHAT MESSAGE =================

// After 3 seconds
setTimeout(function () {

    sendRandomMessage();

}, 3000);


// ================= TYPING INDICATOR =================

userInput.addEventListener("input", function () {

    if (userInput.value.length > 0) {

        typing.textContent = "Kozhi is typing...";

    } else {

        typing.textContent = "";

    }

});


// ================= SEND BUTTON =================

let clickCount = 0;

sendBtn.addEventListener("click", function () {

    clickCount++;

    // User message actually send aavilla
    userInput.value = "";


    // ================= THIRD CLICK =================

    if (clickCount === 3) {

        showNotification(
            "OOPS!! ONNUM PARANJITT KARYAMILLA 😭😂"
        );

        clickCount = 0;

        typing.textContent = "";
        return;
    }


    // ================= FIRST & SECOND CLICK =================

    typing.textContent = "Kozhi is typing...";


    setTimeout(function () {

        sendRandomMessage();

        typing.textContent = "";

    }, 1000);

});


// ================= CHAT MESSAGE EVERY 10 SECONDS =================

// NOTE:
// Ith chat-il mathram message add cheyyum.
// Notification alla.
// Voice illa.
// Chicken popup illa.

setInterval(function () {

    sendRandomMessage();

}, 10000);


// =====================================================
// ================= NOTIFICATION SYSTEM ===============
// =====================================================


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


// ================= SHOW NOTIFICATION =================

function showNotification(text) {

    const popup =
        document.getElementById("notification");

    const message =
        document.getElementById("notificationMessage");


    // ================= IN-PAGE POPUP =================

    if (popup && message) {

        message.textContent = text;

        popup.classList.add("show");


        setTimeout(function () {

            popup.classList.remove("show");

        }, 5000);

    }


    // ================= BROWSER NOTIFICATION =================

    if (
        "Notification" in window &&
        Notification.permission === "granted"
    ) {

        new Notification("🐔 Reminder Kozhi", {

            body: text

        });

    }


    // ================= VOICE =================

    if ("speechSynthesis" in window) {

        // Emojis remove cheyyunnu
        const voiceText =
            text.replace(
                /[☕👀😌😭🥺🍚🐔😂]/g,
                ""
            );


        const speech =
            new SpeechSynthesisUtterance(voiceText);


        // Malayalam voice
        speech.lang = "ml-IN";


        // Slightly slow + playful
        speech.rate = 0.85;

        speech.pitch = 0.8;

        speech.volume = 1;


        // Previous voice stop cheyyum
        speechSynthesis.cancel();


        // Speak
        speechSynthesis.speak(speech);
        speech.onend = function () {
    speechSynthesis.cancel();
};

    }

}


// =====================================================
// ================= NOTIFICATION PERMISSION ============
// =====================================================

if ("Notification" in window) {

    Notification.requestPermission();

}


// =====================================================
// ================= RANDOM NOTIFICATION =================
// =====================================================

// Random notification after 1–9 minutes
let lastReminder = "";
function scheduleNotification() {

    const randomMinutes =
        Math.floor(Math.random() * 3) + 1;

    const randomTime =
        randomMinutes * 60 * 1000;

    setTimeout(async function () {

    const message = await getBackendReminder();
    if (message === lastReminder) {
    scheduleNotification();
    return;
}

lastReminder = message;

    showNotification(message);

    scheduleNotification();

}, randomTime);
}


// Start notification system

scheduleNotification();