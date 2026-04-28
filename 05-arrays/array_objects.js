fruits = [{ "name": "apple", "color": "red", "calories": 85 },
{ "name": "orange", "color": "orange", "calories": 75 }, { "name": "coconut", "color": "white", "calories": 220 },
{ "name": "banana", "color": "yellow", "calories": 100 }, { "name": "strawberry", "color": "pink", "calories": 45 }
]

fruits.push({ "name": "grapes", "color": "purple", "calories": 150 });

console.log(fruits);
//fruits.splice(2, 4); //splice = removes elements index 2 until 4 (4 not included)
//console.log(fruits);

fruits.forEach(fruit => console.log(fruit.color));

fruitNames = fruits.map(fruit => fruit.name);
fruitColors = fruits.map(fruit => fruit.color);
fruitCalories = fruits.map(fruit => fruit.calories);

console.log(fruitNames);
console.log(fruitColors);
console.log(fruitCalories);

yellowfruits = fruits.filter(fruit => fruit.color === "yellow");
console.log(yellowfruits);

lowCalorieFruits = fruits.filter(fruit => fruit.calories < 100);
highCalorieFruits = fruits.filter(fruit => fruit.calories > 100);
console.log(lowCalorieFruits);
console.log(highCalorieFruits);

highestCalFruit = fruits.reduce((max, fruit) => fruit.calories > max.calories ? fruit : max);
lowestCalFruit = fruits.reduce((min, fruit) => fruit.calories < min.calories ? fruit : min);

console.log(highestCalFruit);
console.log(lowestCalFruit);