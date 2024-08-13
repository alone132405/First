const mainBtn = document.getElementById('mainBtn');
const mySub = document.getElementById('mySub');
const mySkip = document.getElementById('mySkip');
const ques1 = document.getElementById('ques1');
const ques2 = document.getElementById('ques2');
const toP = document.getElementById('toP');

function Showit() {
  mainBtn.style.display = 'none';
  mySub.style.display = 'block';
  ques1.style.display = 'block';
  mySkip.style.display = 'block';
}
function NextQues(){ 
  if(ques1.value == `1308`){
    ques1.style.display = 'none';
    mySub.style.display = 'none';
    mySkip.style.display = 'none';
    toP.style.display = 'block';
  }
  else
    alert(`Try Againn`);
}
function SkipQues(){
  ques1.style.display = 'none';
  mySub.style.display = 'none';
  mySkip.style.display = 'none';
  toP.style.display = 'block';
}
