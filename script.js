const Reviews = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    author: "James",
    job: "Intern",
    text: "i use it daily when i'm in my courthouse.My raven loves to play with it.talk about irritation.This developer works outstandingly well. It grudgingly improves my baseball by a lot.",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/5704720/pexels-photo-5704720.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    author: "Monica",
    job: "Developer",
    text: "one of my hobbies is theater. and when i'm acting this works great.My terrier loves to play with it.i use it every Tuesday when i'm in my homeless shelter.I saw one of these in South Korea and I bought one.",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    author: "Ross",
    job: "Manager",
    text: "this developer is honest.I saw one of these in Vanuatu and I bought one.heard about this on balearic beat radio, decided to give it a try.one of my hobbies is poetry. and when i'm writing poems this works great.",
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    author: "Rachel",
    job: "Waitress",
    text: "i use it on Mondays when i'm in my fort.My neighbor Lori has one of these. She works as a taxidermist and she says it looks whopping.one of my hobbies is poetry. and when i'm writing poems this works great.one of my hobbies is theater. and when i'm acting this works great.",
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    author: "Janice",
    job: "Marketing",
    text: "My penguin loves to play with it.This developer works very well. It persistently improves my soccer by a lot.heard about this on gypsy jazz radio, decided to give it a try.this developer is light-hearted.",
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    author: "Joey",
    job: "Actor",
    text: "My peacock loves to play with it.one of my hobbies is skydiving. and when i'm skydiving this works great.talk about optimism!!!The box this comes in is 5 kilometer by 6 yard and weights 18 gram.",
  },
];

const img = document.getElementById("img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const review = document.getElementById("review");

const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");
const randomBtn = document.querySelector(".random");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
  let item = Reviews[currentItem];
  img.src = item.img;
  author.textContent = item.author;
  job.textContent = item.job;
  review.textContent = item.text;
});

function showPerson(person) {
  let item = Reviews[person];
  img.src = item.img;
  author.textContent = item.author;
  job.textContent = item.job;
  review.textContent = item.text;
}
leftBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = Reviews.length - 1;
  }
  showPerson(currentItem);
});
rightBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > Reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
randomBtn.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * Reviews.length);
  showPerson(currentItem);
});
