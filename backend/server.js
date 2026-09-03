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

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});