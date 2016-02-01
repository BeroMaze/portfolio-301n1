var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var config = require('./config');
var models = require('./models');
var PORT = config.PORT;
var DB = config.DB;

app.get('/articles', function(req, res) {
  models.Article.findAll().then(function(articles) {
    res.json(articles);
  });
});
models.sequelize.sync({force: true}).then(function (x) {
  models.Article.create({
    id:           0,
    category:     "Website",
    title:        "Whalephants Final Project",
    img:          "./img/whalephants.png",
    publishedOn:  "12/5/2015",
    link:         "http://beromaze.github.io/whalephantsProject/homePage/index.html",
    miniDesc:     "Website for Burning Man Camp",
    description:  "Whalephants is a project that my goup worked on. We built a website for a orginization that builds a camp out at Burning Man each year. This website is for people to come check out what the camp is about and what all they bring to the community. There are many different pages; About page, drink Voting page, Countdown page, Game Page, and a thank you page. Head over to the Whalephants website and vote on the next drinks that they will be making out at Burning Man or go over and play the Hang Man game. There are three words, see if you can guess all of them."
  });
  models.Article.create({
    id:           1,
    category:     "Apps",
    title:        "Kitten Voting Contest",
    img:          "./img/cutestKittens.jpg",
    link:         "http://beromaze.github.io/cutestKittens/",
    publishedOn:  "11/29/2015",
    miniDesc:     "Kitten Voting App, with chart",
    description:  "For the Kitten Voting Contest we where asked to set up a voting app that when through 14 different kitten pictures and asked the user to vote on one. once the user has gone through all the kittens the app changes to a chart and all the pictures of the kittens that you could vote on. For this project we had to focus in using Jquery and object junctions. This project had a lot of adding and taking away from the page. I also used a chart to show the resaults. for storing the voting information I set up a local storeage json function so that you could simulate multiply people voting on the images."
  });
  models.Article.create({
    id:           2,
    category:     "Data",
    title:        "Top Pot Donut Table",
    img:          "./img/topPotDonuts.jpg",
    link:         "http://beromaze.github.io/donutShop/",
    publishedOn:  "11/11/2015",
    miniDesc:     "Average Donut Checker & Chart",
    description:  "The Top Pot Dunut project was to learn about how to take information and use that to simulate average information. Then be able to take that information and desplay it in a table. This project focused on how to create and modify information on a table. I also started to bring in structure like Flex Box to help make the look of the website more pleasable."
  });
  models.Article.create({
    id:           3,
    catagory:     "Apps",
    title:        "Guessing Game",
    img:          "./img/guessingGame.jpg",
    link:         "http://beromaze.github.io/guessingGame/",
    publishedOn:  "10/30/2015",
    miniDesc:     "Question Came about Me",
    description:  "This is the first ever project that I finished in class. This is a simple game that goes through a few questions about my-self. This project was to get started learning what JavaScript could do and how to start using it.This project uses Dom manipulation to ask and show the answer to the questions. There is also a numbers guessing game."
  });
});

models.sequelize.sync().then(function(x) {
  app.listen(PORT, function() {
    console.log('server started');
    console.log('listening on PORT: ', + PORT);
    console.log('DB URI STRING: ', + DB);
  });
});
