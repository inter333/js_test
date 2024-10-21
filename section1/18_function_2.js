function test(){
  console.log('テスト');
}

test();

const comment = 'コメント';
const comment_2 = 'コメント2';


function getComment(string){
  console.log(string);
}

getComment(comment_2);

function getNumberOfComment(){
  return 5;
}

console.log(getNumberOfComment());

const NumberOfComment = getNumberOfComment();

console.log(NumberOfComment);

function sumPrice(int1, int2){
  let int3 = int1 + int2;
  return int3;
}

const total = sumPrice(3,5);

console.log(total);

