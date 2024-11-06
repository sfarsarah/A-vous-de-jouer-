const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
/* 
  IMPORTANT:
    ***NEVER*** store credentials unencrypted like this.
    This is for demo purposes only in order to simulate a functioning API server.
*/
const users = {
  "user1@joesrobotshopenit.com": {
    firstName: "User1",
    lastName: "User1",
    email: "user1@joesrobotshopenit.com",
    password: "very-secret",
  },
  "user2@joesrobotshop.com": {
    firstName: "User2",
    lastName: "User2",
    email: "user2@joesrobotshopenit.com",
    password: "super-secret",
  },
};
let cart = [];

// use this to add a 1 second delay to all requests
// app.use(function (req, res, next) {
//   setTimeout(next, 1000);
// });

app.get("/api/products", (req, res) => {
  let products = [
    {
      id: 1,
      description: "Une tarte aux pommes avec une croûte croustillante et une garniture juteuse.",
      name: "Tarte aux Pommes",
      imageName: "applepiesmall.jpg",
      category: "Tartes",
      price: 10.5,
      discount: 0.1,
    },
    {
      id: 2,
      description: "De délicieux petits cheesecakes crémeux, parfaits pour une pause gourmande et sucrée.",
      name: "Petits Cheese cakes",
      imageName: "cheesecakesmall.jpg",
      category: "Cheese Cakes",
      price: 8.0,
      discount: 0,
    },
    
    {
      id: 3,
      description: "De délicieuses tartes aux cerises avec une croûte dorée et une garniture sucrée et acidulée.",
      name: "Tartes aux cerises",
      imageName: "cherrypiesmall.jpg",
      category: "Tartes",
      price: 8.5,
      discount: 0.2,
    },
    {
      id: 4,
      description: "Des tartes aux canneberges savoureuses, avec une croûte croustillante et une garniture légèrement acidulée.",
      name: "Tarte aux canneberges",
      imageName: "cranberrypiessmall.jpg",
      category: "Tartes",
      price: 10.0,
      discount: 0.05,
    },
    {
      id: 5,
      description: "Des tartes aux pêches délicieusement sucrées, avec une garniture juteuse et une croûte dorée.",
      name: "Tarte aux pêches ",
      imageName: "peachpiesmall.jpg",
      category: "Tartes",
      price: 9.0,
      discount: 0,
    },
    {
      id: 6,
      description: "Une petite tarte à la citrouille savoureuse, avec des épices chaleureuses et une texture crémeuse.",
      name: "Tarte à la citrouille",
      imageName: "pumpkinpiesmall.jpg",
      category: "Tartes",
      price: 9.0,
      discount: 0.1,
    },
    {
      id: 7,
      description: "Des cheesecakes à la fraise, doux et crémeux, garnis de fraises fraîches et d'une croûte croustillante.",
      name: "cheesecake à la fraise",
      imageName: "strawberrycheesecakesmall.jpg",
      category: "Cheese Cakes",
      price: 7.0,
      discount: 0,
    },
   
    
  ];
  res.send(products);
});

app.post("/api/cart", (req, res) => {
  cart = req.body;
  setTimeout(() => res.status(201).send(), 20);
});

app.get("/api/cart", (req, res) => res.send(cart));

app.post("/api/register", (req, res) =>
  setTimeout(() => {
    const user = req.body;
    if (user.firstName && user.lastName && user.email && user.password) {
      users[user.email] = user;
      res.status(201).send({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      });
    } else {
      res.status(500).send("Invalid user info");
    }
  }, 800)
);

/* IMPORTANT:
    The code below is for demo purposes only and does not represent good security
    practices. In a production application user credentials would be cryptographically 
    stored in a database server and the password should NEVER be stored as plain text. 
*/
app.post("/api/sign-in", (req, res) => {
  const user = users[req.body.email];
  if (user && user.password === req.body.password) {
    res.status(200).send({
      userId: user.userId,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    });
  } else {
    res.status(401).send("Invalid user credentials.");
  }
});

app.listen(8081, () => console.log("API Server listening on port 8081!"));