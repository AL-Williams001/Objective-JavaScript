// const animal = {
//   type: "dog",
//   breed: "corgi",
//   name: "Spot",
//   color: "brown",
//   age: 5,
//   isFriendly: true,
//   food: ["meat", "fish", "dog food"],
//   bark: () => {
//     console.log("woof");
//   },
// };

// animal["age"] = 7;

// animal.food[2] = "fruits";

// console.log(animal.food);

// delete animal.bark;

// console.log(animal);

// const products = [
//   {
//     id: 1,
//     name: "laptop",
//     price: 500,
//     brand: "apple",
//     color: "silver",
//     isAvailable: true,
//   },
//   {
//     id: 2,
//     name: "mobile",
//     price: 200,
//     brand: "samsung",
//     color: "black",
//     isAvailable: true,
//   },
//   {
//     id: 3,
//     name: "watch",
//     price: 100,
//     brand: "apple",
//     color: "black",
//     isAvailable: true,
//   },
//   {
//     id: 4,
//     name: "tablet",
//     price: 300,
//     brand: "samsung",
//     color: "silver",
//     isAvailable: false,
//   },
// ];

// products.forEach((product) => {
//   const card = document.createElement("div");

//   const name = document.createElement("h1");
//   name.textContent = product.name;

//   const price = document.createElement("p");
//   price.textContent = product.price;

//   const brand = document.createElement("p");
//   brand.textContent = product.brand;

//   const addToCart = document.createElement("button");
//   addToCart.textContent = "Add to cart";

//   const image = document.createElement("img");
//   image.src = "https://picsum.photos/200/300";

//   card.appendChild(name);
//   card.appendChild(price);
//   card.appendChild(brand);
//   card.appendChild(addToCart);
//   card.appendChild(image);

//   document.body.appendChild(card);
// });

const petshop = [
  {
    animal: "dog",
    breed: "corgi",
    name: "Spot",
    color: "brown",
    age: 5,
  },
  {
    animal: "cat",
    breed: "persian",
    name: "Fluffy",
    color: "black",
    age: 3,
  },
  {
    animal: "rabbit",
    breed: "holland lop",
    name: "Bugs",
    color: "white",
    age: 1,
  },
  {
    animal: "bird",
    breed: "parrot",
    name: "Polly",
    color: "blue",
    age: 2,
  },
  {
    animal: "fish",
    breed: "tuna",
    name: "Nemo",
    color: "blue",
    age: 1,
  },
  {
    animal: "snake",
    breed: "python",
    name: "arbok",
    color: "yellow",
    age: 4,
  },
  {
    animal: "lizard",
    breed: "chameleon",
    name: "Coco",
    color: "yellow",
    age: 4,
  },
  {
    animal: "hamster",
    breed: "german",
    name: "Scooby",
    color: "brown",
    age: 3,
  },
  {
    animal: "squirrel",
    breed: "squirrel",
    name: "daisy",
    color: "black",
    age: 2,
  },
  {
    animal: "horse",
    breed: "pony",
    name: "Bruno",
    color: "brown",
    age: 5,
  },
];

petshop.forEach((pet) => {
  const card = document.createElement("div");

  const animal = document.createElement("h1");
  animal.textContent = pet.animal;

  const breed = document.createElement("p");
  breed.textContent = pet.breed;
  const name = document.createElement("p");
  name.textContent = pet.name;

  const color = document.createElement("p");
  color.textContent = pet.color;

  const age = document.createElement("p");
  age.textContent = pet.age;

  const image = document.createElement("img");
  image.src = "https://picsum.photos/200/300";

  card.appendChild(image);
  card.appendChild(animal);
  card.appendChild(breed);
  card.appendChild(name);
  card.appendChild(color);
  card.appendChild(age);

  document.body.appendChild(card);
});

// const user = {
//   name: "John",
//   age: 30,
//   isAdmin: true,
// };

// for (let key in user) {
//   console.log(key, user[key]);
// }
