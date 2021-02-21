function MyTimer(begin=0,stop=0,again=0,passed=0) {
    this.begin = begin,
    this.stop = stop,
    this.again = again
    this.passed = passed;
}

/* function Timer(start) {
return { start: start };
}

let obj1 = Timer(100);
Метод создания объектов фабрикой
*/

let TIme = new MyTimer (0,2,0,0);
let passed = 0;

function checkTime(){
    document.getElementById("sec_passed").innerHTML = "Sec passed: " + passed;
}

function againTime(){
  document.getElementById("my_timer").innerHTML = "01:00:00";
document.getElementById("sec_passed").innerHTML = "";
passed = 0;
}

document.getElementById("play").addEventListener("click", function(event) {
  startTimer();
});

function startTimer() {
if ((TIme.begin == 1 && TIme.stop==1) || (TIme.begin == 1 && TIme.stop == 2) || (TIme.begin==1 && TIme.again == 1)
|| (TIme.begin == 2 && TIme.stop==0)) {
  TIme.stop = 0;
  TIme.again = 0;
  TIme.begin = 2;
}
else return;
if (TIme.stop==1) {
  clearTimeout();
  return;
}

var my_timer = document.getElementById("my_timer");
var time = my_timer.innerHTML;
var arr = time.split(":");
var h = arr[0];
var m = arr[1];
var s = arr[2];
if (s == 0) {
if (m == 0) {
  if (h == 0) {
    alert("Время вышло");
    return;
  }
  h--;
  m = 60;
  if (h < 10) h = "0" + h;
}
m--;
if (m < 10) m = "0" + m;
s = 59;
}
else s--;
if (s < 10) s = "0" + s;
document.getElementById("my_timer").innerHTML = h+":"+m+":"+s;
passed++;

setTimeout(startTimer, 1000);
}

