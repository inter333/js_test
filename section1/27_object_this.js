const postal = {

  postalCode:'123-45678',

  checkPostalCode(){
    const replaced = this.postalCode.replace('-','');
    const length = replaced.length;
  
    if(length === 7){
      return true;
    }
    return false;
  }
};


console.log(postal.checkPostalCode());
