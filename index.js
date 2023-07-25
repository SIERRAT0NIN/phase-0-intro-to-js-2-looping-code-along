const names = ["Guadalupe", "Ollie", "Aki"];
const event2 = "birthday";
let cards = [];

function writeCards(names, event) {
  let cards = [];
  names.forEach((name) => {
    cards.push(`Thank you, ${name}, for the wonderful ${event} gift!`);
  });
  return cards;
}
writeCards(names, event2);
console.log(cards);

function countDown(number) {
  for (let i = number; i >= 0; i--) {
    console.log(i);
  }
}
countDown(1000);
