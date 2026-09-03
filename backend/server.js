const express = require("express");
const reminders = [
    "Chaaya kudicho? ☕🐔",
    "Evide poyi mwolluse? 👀",
    "Urangiyo? 🐔",
    "Enne marannooo? 😭",
    "Oru reminder vannatha 😌🐔"
];

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Reminder Kozhi backend is working! 🐔");
});
app.get("/api/reminder", (req, res) => {
    const randomIndex = Math.floor(Math.random() * reminders.length);

    const message = reminders[randomIndex];

    res.json({
        message: message
    });
});
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});