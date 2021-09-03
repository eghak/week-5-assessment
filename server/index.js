const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json()); // When we want to be able to accept JSON.
app.use(cors());

app.get("/api/compliment", (req, res) => {
  const compliments = [
    "Gee, you're a smart cookie!",
    "Cool shirt!",
    "Your Javascript skills are stellar.",
    "A lifetime of happiness lies ahead of you",
    "Believe it can be done",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];
  // alert(randomCompliment)
  res.status(200).send(randomCompliment);
});

app.get("/api/encouragement", (req, res) => {
  const compliments = [
    "You can do it!",
    "Everything will be alright!",
    "Just do your best and forget the rest!",
    "Congratulations! You are on your way",
    "Bide your time, for success is near",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];
  // alert(randomCompliment)
  res.status(200).send(randomCompliment);
});

app.get("/api/stress", (req, res) => {
  const response = ["Go have a walk to release your stress", "Have some water"];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * response.length);
  let randomResponse = response[randomIndex];
  // alert(randomCompliment)
  res.status(200).send(randomResponse);
});

app.get("/api/question", (req, res) => {
  const answer = ["Thanks for your input!"];
  res.status(200).send(answer);
});

app.get("/api/question", (req, res) => {
  const answer = ["Thanks for your input!"];
  res.status(200).send(answer);
});

app.get("/api/goal", (req, res) => {
  const reply = [
    "That is a great goal! work hard and you will reach your goal!",
  ];
  res.status(200).send(reply);
});
app.listen(4000, () => console.log("Server running on 4000"));
