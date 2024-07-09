const randomGift = ['Aha! It is nothing here.', 'Congrates for getting 3 pack of soya beans here!', 'Congrates for getting 30 bucks!', 'Refresh the page again...'];
const opening = ['Welcome to roll a gift today!'];

const indexValue = Math.floor(Math.random() * randomGift.length);

document.getElementById('output').innerText = `${opening} ${randomGift[indexValue]}`;


