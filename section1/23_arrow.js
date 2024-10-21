const fruits = [
  'りんご','バナナ'
];

console.log(fruits);

fruits.push('みかん');

console.log(fruits);

fruits.forEach(function(input){
  console.log(input);
});

const getItem = () => console.log('アロー');
getItem();


fruits.forEach(input => console.log(input));

