//We want this function to give us the strings in the array in a random order. ONe at a time.
const people = ["Briana", "Auriel", "Ren", "KJ"];

function pickRandom(array) {
  for (let i = array.length; i > 0; i--) {
    let randomPerson = array[Math.floor(Math.random() * array.length)];
    const index = array.findIndex((person) => person === randomPerson); // simple function doesn't need curly brackets
    array.splice(index, 1);
    // console.log(array);
    // console.log(randomPerson);
  }
}

pickRandom(people);

// 1. Create VendingMachine array
// Every Item has a name, a code, a quantity, a price (give it 2 items to start)

const VendingMachine = [
  { name: "Chips", code: "A02", quantity: 5, price: 1.26 },
  { name: "RedBull", code: "A03", quantity: 3, price: 2.45 },
  { name: "Sour Candy", code: "B02", quantity: 7, price: 1.89 },
];
