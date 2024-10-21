const test = {
  test1:10,
  test2:20,
  test3:30
};

console.log(Object.values(test));

for( value of Object.values(test)){
  console.log(value);
}