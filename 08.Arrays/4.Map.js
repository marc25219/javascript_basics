/*
 * Author: Marc Ciruelos Santos
 * Date: 21-02-2024
 * Description: Array map() => Examples using the map() function with an objects array.
 */


const books = [
  {
    id: 1,
    title: "Thinking, fast and slow",
    author: "Daniel Kahneman",
    price: 12.5,
    format: "paperback",
    genres: ["Education", "Psychology"],
  },
  {
    id: 2,
    title: "Deep work. Rules for focused success in a distracted world",
    author: "Cal Newport",
    price: 25.69,
    format: "hardcover",
    genres: ["Education", "Business"],
  },
  {
    id: 3,
    title: "Rules for life: An antidote to chaos",
    author: "Jordan B. Peterson",
    price: 12.86,
    format: "paperback",
    genres: ["Business", "Study Skills"],
  },
];

// Map() --> (as a loop for but declarative). Returns only the selected field.

// Create a new array with only the title of each book.
console.log(books.map((book) => book.title));
