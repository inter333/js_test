const postalCode = '123-45678';

function checkPostalCode(string){
  const replaced = string.replace('-','');
  const length = replaced.length;

  if(length === 7){
    return true;
  }
  return false;
}

console.log(checkPostalCode(postalCode));
