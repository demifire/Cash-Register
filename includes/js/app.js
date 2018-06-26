(function(){
    document.body.style.background = 'white url(https://images.lingscars.com/images/index/bg/paisley.jpg)'
}());

var outside = document.createElement("div");
outside.id = "outside";
spriteContainer.appendChild(outside);

var parentNumber = document.createElement("div");
parentNumber.id = "parentNumber";
outside.appendChild(parentNumber);

var number = document.createElement("div");
number.id = "number";
number.innerHTML = 0;
parentNumber.appendChild(number);

var powerButton = document.createElement("powerButton");
powerButton.id = "powerButton";
outside.appendChild(powerButton);

var on = document.createElement("div");
on.id = "on";
on.innerHTML = "ON"
powerButton.appendChild(on);

var off = document.createElement("div");
off.id = "off";
off.innerHTML = "OFF"
powerButton.appendChild(off);

var clear = document.createElement("div");
clear.id = "clear";
clear.innerHTML = "C"
powerButton.appendChild(clear);

var calculate = document.createElement("div");
calculate.id = "calculate";
outside.appendChild(calculate);

for (var i=0; i<4; i++) {
  var row = document.createElement("div");
  row.className = "row";
  outside.appendChild(row);
  for (var j=0; j<4; j++) {
    var mathButton = document.createElement("div");
    mathButton.className = "digits";
    row.appendChild(mathButton);
  }
}

var memory = 0;

var val1 = 7;
var val2 = 4;
var val3 = 1;
var val4 = 0;
var newButtons = document.getElementsByClassName("digits");

for (var k=0; k<16; k++) {
  if (k<3) {
    newButtons[k].innerHTML = val1;
    newButtons[k].value = val1;
    val1 += 1;
  } else if (k===3) {
    newButtons[k].innerHTML = "/";
  } else if (k>3 && k<7) {
    newButtons[k].innerHTML = val2;
    newButtons[k].value = val2;
    val2 += 1;
  } else if (k===7) {
    newButtons[k].innerHTML = "*";
  } else if (k>7 && k<11) {
    newButtons[k].innerHTML = val3;
    newButtons[k].value = val3;
    val3 += 1;
  } else if (k===11) {
    newButtons[k].innerHTML = "-";
  } else if (k===12) {
    newButtons[k].innerHTML = val4;
    newButtons[k].value = val4;
  } else if (k===13) {
    newButtons[k].innerHTML = ".";
  } else if (k===14) {
    newButtons[k].innerHTML = "=";
  } else {
    newButtons[k].innerHTML = "+";
  }
}

newButtons[3].className = "mathSigns";
newButtons[6].className = "mathSigns";
newButtons[9].className = "mathSigns";
newButtons[11].className = "mathSigns";
newButtons[11].className = "mathSigns";

var onSwitch = document.getElementById("on");
on.addEventListener("click", start);

function start() {
  for(var i=0;i<newButtons.length;i++){
    newButtons[i].style.display = 'block';
  };
  for(var i=0;i<mathSigns.length;i++){
    mathSigns[i].style.display = 'block';
  };
  clear.style.display = 'block';
  var startUp = document.getElementById("number");
  startUp.innerHTML = 0;
  signRepeat = 0;
  reload = 0;
  memory = 0;
}

var turnOn = document.createElement('div');
turnOn.innerHTML='poop';
turnOn.className = "startButton";

var offSwitch = document.getElementById("off");
off.addEventListener("click", bye);

function bye() {
  for(var i=0;i<newButtons.length;i++){
    newButtons[i].style.display = 'none';
  };
  for(var i=0;i<mathSigns.length;i++){
    mathSigns[i].style.display = 'none';
  };
  clear.style.display = 'none';
  number.innerHTML = '';
  parentNumber.style.background = null;
}

var clearSwitch = document.getElementById("clear");
clear.addEventListener("click", gone);

function gone() {
  var result = document.getElementById("number");
  result.innerHTML = 0;
  memory = 0;
  signRepeat = 0;
  reload = 0;
  memory = 0;
}


// for (var l=0; l<10; l++) {
//  newButtons[l].addEventListener("click", changeValue);
// }

//     function changeValue() {
//   var thisDigit = this.querySelector(".digits");
//   console.log(thisDigit.innerHTML);
// }


//start humbug way
newButtons[0].addEventListener("click", change7);
newButtons[1].addEventListener("click", change8);
newButtons[2].addEventListener("click", change9);
newButtons[3].addEventListener("click", change4);
newButtons[4].addEventListener("click", change5);
newButtons[5].addEventListener("click", change6);
newButtons[6].addEventListener("click", change1);
newButtons[7].addEventListener("click", change2);
newButtons[8].addEventListener("click", change3);
newButtons[9].addEventListener("click", change0);
newButtons[10].addEventListener("click", changeDec);

var reload;
var signRepeat;

function changeDec(){
    if (number.innerHTML === '/' || number.innerHTML === '*' || number.innerHTML === '+' || number.innerHTML === '-' || reload === 0){
        number.innerHTML = '0.';
        reload = 1;
      } else if (number.innerHTML.includes('.')) {}
      else if(number.innerHTML.length>13){}
      else{
        number.innerHTML = number.innerHTML + '.';
        // number.innerHTML = parseFloat(num);
    } 
}

function change7() {
  if (number.innerHTML === 0|| number.innerHTML === '/' || number.innerHTML === '*' || number.innerHTML === '+' || number.innerHTML === '-' || reload === 0 || number.innerHTML === '0'){
    number.innerHTML = newButtons[0].innerHTML;
    reload = 1;
  } else if(number.innerHTML.length>13){}else if (number.innerHTML !== 0) {
    var num = number.innerHTML + newButtons[0].innerHTML;
    number.innerHTML = parseFloat(num);
  } 
}

function change8() {
  if (number.innerHTML === 0|| number.innerHTML === '/' || number.innerHTML === '*' || number.innerHTML === '+' || number.innerHTML === '-' || reload === 0 || number.innerHTML === '0') {
    number.innerHTML = newButtons[1].innerHTML;
    reload = 1;
  } else if(number.innerHTML.length>13){}else if (number.innerHTML !== 0) {
    var num = number.innerHTML + newButtons[1].innerHTML;
    number.innerHTML = parseFloat(num);
  }  
}

function change9() {
  if (number.innerHTML === 0|| number.innerHTML === '/' || number.innerHTML === '*' || number.innerHTML === '+' || number.innerHTML === '-' || reload === 0 || number.innerHTML === '0') {
    number.innerHTML = newButtons[2].innerHTML;
    reload = 1;
  } else if(number.innerHTML.length>13){}else if (number.innerHTML !== 0) {
    var num = number.innerHTML + newButtons[2].innerHTML;
    number.innerHTML = parseFloat(num);
  }  
}

function change4() {
  if (number.innerHTML === 0|| number.innerHTML === '/' || number.innerHTML === '*' || number.innerHTML === '+' || number.innerHTML === '-' || reload === 0 || number.innerHTML === '0') {
    number.innerHTML = newButtons[3].innerHTML;
    reload = 1;
  } else if(number.innerHTML.length>13){}else if (number.innerHTML !== 0) {
    var num = number.innerHTML + newButtons[3].innerHTML;
    number.innerHTML = parseFloat(num);
  }  
}

function change5() {
  if (number.innerHTML === 0|| number.innerHTML === '/' || number.innerHTML === '*' || number.innerHTML === '+' || number.innerHTML === '-' || reload === 0 || number.innerHTML === '0') {
    number.innerHTML = newButtons[4].innerHTML;
    reload = 1;
  } else if(number.innerHTML.length>13){}else if (number.innerHTML !== 0) {
    var num = number.innerHTML + newButtons[4].innerHTML;
    number.innerHTML = parseFloat(num);
  }  
}

function change6() {
  if (number.innerHTML === 0|| number.innerHTML === '/' || number.innerHTML === '*' || number.innerHTML === '+' || number.innerHTML === '-' || reload === 0 || number.innerHTML === '0') {
    number.innerHTML = newButtons[5].innerHTML;
    reload = 1;
  } else if(number.innerHTML.length>13){}else if (number.innerHTML !== 0) {
    var num = number.innerHTML + newButtons[5].innerHTML;
    number.innerHTML = parseFloat(num);
  }  
}

function change1() {
  if (number.innerHTML === 0|| number.innerHTML === '/' || number.innerHTML === '*' || number.innerHTML === '+' || number.innerHTML === '-' || reload === 0 || number.innerHTML === '0') {
    number.innerHTML = newButtons[6].innerHTML;
    reload = 1;
  } else if(number.innerHTML.length>13){}else if (number.innerHTML !== 0) {
    var num = number.innerHTML + newButtons[6].innerHTML;
    number.innerHTML = parseFloat(num);
  }  
}

function change2() {
  if (number.innerHTML === 0|| number.innerHTML === '/' || number.innerHTML === '*' || number.innerHTML === '+' || number.innerHTML === '-' || reload === 0 || number.innerHTML === '0') {
    number.innerHTML = newButtons[7].innerHTML;
    reload = 1;
  } else if(number.innerHTML.length>13){}else if (number.innerHTML !== 0) {
    var num = number.innerHTML + newButtons[7].innerHTML;
    number.innerHTML = parseFloat(num);
  }  
}

function change3() {
  if (number.innerHTML === 0|| number.innerHTML === '/' || number.innerHTML === '*' || number.innerHTML === '+' || number.innerHTML === '-' || reload === 0 || number.innerHTML === '0') {
    number.innerHTML = newButtons[8].innerHTML;
    reload = 1;
  } else if(number.innerHTML.length>13){}else if (number.innerHTML !== 0) {
    var num = number.innerHTML + newButtons[8].innerHTML;
    number.innerHTML = parseFloat(num);
  } 
}

function change0() {
  if (number.innerHTML === 0|| number.innerHTML === '/' || number.innerHTML === '*' || number.innerHTML === '+' || number.innerHTML === '-' || reload === 0 || number.innerHTML === '0') {
    number.innerHTML = newButtons[9].innerHTML;
    reload = 1;
  } else if(number.innerHTML.length>13){}else if (number.innerHTML !== 0) {
    number.innerHTML = number.innerHTML + newButtons[9].innerHTML;
    // number.innerHTML = parseFloat(num);
  }  
}
//end humbug way

var mathSigns = document.getElementsByClassName("mathSigns");
mathSigns[0].addEventListener("click", divide);
mathSigns[1].addEventListener("click", multiply);
mathSigns[2].addEventListener("click", subtract);
mathSigns[3].addEventListener("click", equal);
mathSigns[4].addEventListener("click", add);



function divide() {
    if(signRepeat > 0){
        if(memory.includes('/') && !number.innerHTML.match(/[\/+*-]/gm)){
            var currentNum = parseFloat(number.innerHTML);
            var storedNum = parseFloat(memory);
            number.innerHTML = storedNum/currentNum;
            reload = 0;
            signRepeat++;
            memory = number.innerHTML + '/';
        }else if(memory.includes('*') && !number.innerHTML.match(/[\/+*-]/gm)){
            var num = number.innerHTML;
            var currentNum = parseFloat(num);
            var storedNum = parseFloat(memory);
            number.innerHTML = storedNum*currentNum;
            console.log(storedNum*currentNum);
            reload = 0;
            signRepeat++;
            memory = number.innerHTML + '/';
         }else if(memory.includes('+') && !number.innerHTML.match(/[\/+*-]/gm)){
            var num = number.innerHTML;
            var currentNum = parseFloat(num);
            var storedNum = parseFloat(memory);
            number.innerHTML = parseFloat(storedNum+currentNum);
            console.log(storedNum+currentNum);
            reload = 0;
            signRepeat++;
            memory = number.innerHTML + '/';
         }else if(memory.includes('-') && !number.innerHTML.match(/[\/+*-]/gm)){
            var num = number.innerHTML;
            var currentNum = parseFloat(num);
            var storedNum = parseFloat(memory);
            number.innerHTML = storedNum-currentNum;
            console.log(storedNum-currentNum);
            reload = 0;
            signRepeat++;
            memory = number.innerHTML + '/';
         }else{
            number.innerHTML = '/';
            memory = parseFloat(memory) + '/';
            signRepeat++;
            reload = 0;   
           }
    }else{
    memory = number.innerHTML + '/';
    number.innerHTML = '/';
    signRepeat = 1;
    return memory;
    }
}

function multiply() {
    if(signRepeat > 0){
        if(memory.includes('/') && !number.innerHTML.match(/[\/+*-]/gm)){
            var currentNum = parseFloat(number.innerHTML);
            var storedNum = parseFloat(memory);
            number.innerHTML = storedNum/currentNum;
            reload = 0;
            signRepeat++;
            memory = number.innerHTML + '*';
        }else if(memory.includes('*') && !number.innerHTML.match(/[\/+*-]/gm)){
            var num = number.innerHTML;
            var currentNum = parseFloat(num);
            var storedNum = parseFloat(memory);
            number.innerHTML = storedNum*currentNum;
            console.log(storedNum*currentNum);
            reload = 0;
            signRepeat++;
            memory = number.innerHTML + '*';
         }else if(memory.includes('+') && !number.innerHTML.match(/[\/+*-]/gm)){
            var num = number.innerHTML;
            var currentNum = parseFloat(num);
            var storedNum = parseFloat(memory);
            number.innerHTML = parseFloat(storedNum+currentNum);
            console.log(storedNum+currentNum);
            reload = 0;
            signRepeat++;
            memory = number.innerHTML + '*';
         }else if(memory.includes('-') && !number.innerHTML.match(/[\/+*-]/gm)){
            var num = number.innerHTML;
            var currentNum = parseFloat(num);
            var storedNum = parseFloat(memory);
            number.innerHTML = storedNum-currentNum;
            console.log(storedNum-currentNum);
            reload = 0;
            signRepeat++;
            memory = number.innerHTML + '*';
         }else{
             number.innerHTML = '*';
             memory = parseFloat(memory) + '*';
             signRepeat++;
             reload = 0;   
            }
    }else{
memory = number.innerHTML;
console.log(memory);
var num = number.innerHTML;
number.innerHTML = '*';
num = 0;
var int = parseFloat(memory);
console.log(int);
memory = int + '*';
console.log(memory);
signRepeat = 1;
return memory;
    }
}

function subtract() {
    if(signRepeat > 0){
        if(memory.includes('/') && !number.innerHTML.match(/[\/+*-]/gm)){
            var currentNum = parseFloat(number.innerHTML);
            var storedNum = parseFloat(memory);
            number.innerHTML = storedNum/currentNum;
            reload = 0;
            signRepeat++;
            memory = number.innerHTML + '-';
        }else if(memory.includes('*') && !number.innerHTML.match(/[\/+*-]/gm)){
            var num = number.innerHTML;
            var currentNum = parseFloat(num);
            var storedNum = parseFloat(memory);
            number.innerHTML = storedNum*currentNum;
            console.log(storedNum*currentNum);
            reload = 0;
            signRepeat++;
            memory = number.innerHTML + '-';
         }else if(memory.includes('+') && !number.innerHTML.match(/[\/+*-]/gm)){
            var num = number.innerHTML;
            var currentNum = parseFloat(num);
            var storedNum = parseFloat(memory);
            number.innerHTML = parseFloat(storedNum+currentNum);
            console.log(storedNum+currentNum);
            reload = 0;
            signRepeat++;
            memory = number.innerHTML + '-';
         }else if(memory.includes('-') && !number.innerHTML.match(/[\/+*-]/gm)){
            var num = number.innerHTML;
            var currentNum = parseFloat(num);
            var storedNum = parseFloat(memory);
            number.innerHTML = storedNum-currentNum;
            console.log(storedNum-currentNum);
            reload = 0;
            signRepeat++;
            memory = number.innerHTML + '-';
         }else{
            number.innerHTML = '-';
            memory = parseFloat(memory) + '-';
            signRepeat++;
            reload = 0;   
           }
    }else{
memory = number.innerHTML;
console.log(memory);
var num = number.innerHTML;
number.innerHTML = '-';
num = 0;
var int = parseFloat(memory);
console.log(int);
memory = int + '-';
console.log(memory);
signRepeat = 1;
return memory;
}
}

function add() {
    if(signRepeat > 0){
        if(memory.includes('/') && !number.innerHTML.match(/[\/+*-]/gm)){
            var currentNum = parseFloat(number.innerHTML);
            var storedNum = parseFloat(memory);
            number.innerHTML = storedNum/currentNum;
            reload = 0;
            signRepeat++;
            memory = number.innerHTML + '+';
        }else if(memory.includes('*') && !number.innerHTML.match(/[\/+*-]/gm)){
            var num = number.innerHTML;
            var currentNum = parseFloat(num);
            var storedNum = parseFloat(memory);
            number.innerHTML = storedNum*currentNum;
            console.log(storedNum*currentNum);
            reload = 0;
            signRepeat++;
            memory = number.innerHTML + '+';
         }else if(memory.includes('+') && !number.innerHTML.match(/[\/+*-]/gm)){
            var num = number.innerHTML;
            var currentNum = parseFloat(num);
            var storedNum = parseFloat(memory);
            number.innerHTML = parseFloat(storedNum+currentNum);
            console.log(storedNum+currentNum);
            reload = 0;
            signRepeat++;
            memory = number.innerHTML + '+';
         }else if(memory.includes('-') && !number.innerHTML.match(/[\/+*-]/gm)){
            var num = number.innerHTML;
            var currentNum = parseFloat(num);
            var storedNum = parseFloat(memory);
            number.innerHTML = storedNum-currentNum;
            console.log(storedNum-currentNum);
            reload = 0;
            signRepeat++;
            memory = number.innerHTML + '+';
         }else{
            number.innerHTML = '+';
            memory = parseFloat(memory) + '+';
            signRepeat++;
            reload = 0;   
           }
    }else{
memory = number.innerHTML;
console.log(memory);
var num = number.innerHTML;
number.innerHTML = '+';
num = 0;
var int = parseFloat(memory);
console.log(int);
memory = int + '+';
console.log(memory);
signRepeat = 1;
return memory;
    }
}

// on.addEventListener("mouseover", onShowGif);
// on.addEventListener("mouseout", onHideGif);
// off.addEventListener("mouseover", offShowGif);
// off.addEventListener("mouseout", offHideGif);
// clear.addEventListener("mouseover", clearShowGif);
// clear.addEventListener("mouseout", clearHideGif);

// function onShowGif(url) {
//   on.style.background = 'url("https://media.giphy.com/media/7OWdNvyaMr3BuQ8uMk/giphy.gif") center';
// }

function onHideGif() {
  on.style.background = null;
}

// function offShowGif(url) {
//   off.style.background = 'url("https://media.giphy.com/media/7OWdNvyaMr3BuQ8uMk/giphy.gif") center'
// }

function offHideGif() {
  off.style.background = null;
}

// function clearShowGif(url) {
//   clear.style.background = 'url("https://media.giphy.com/media/7OWdNvyaMr3BuQ8uMk/giphy.gif") center'
// }

function clearHideGif() {
  clear.style.background = null;
}

var gifArr = ['url("https://media.giphy.com/media/3XhU5pkFZChvW/giphy.gif") center',
'url("https://media.giphy.com/media/lYf4uAJEWVo1FffnVD/giphy.gif") center',
'url("https://media.giphy.com/media/RLWwOuPbqObupogOLB/giphy.gif") center',
'url("https://media.giphy.com/media/4NeWu795Y4zP5Jzunf/giphy.gif") center',
'url("https://media.giphy.com/media/QqkVKdsehPtCw/giphy.gif") center',
'url("https://media.giphy.com/media/3oEjHYibHwRL7mrNyo/giphy.gif") center',
'url("https://media.giphy.com/media/5wWf7GW1AzV6pF3MaVW/giphy.gif") center',
'url("https://media.giphy.com/media/Is1O1TWV0LEJi/giphy.gif") center',
'url("https://media.giphy.com/media/dEdmW17JnZhiU/giphy.gif") center',
'url("https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif") center',
'url("https://media.giphy.com/media/8VrtCswiLDNnO/giphy.gif") center',
'url("https://media.giphy.com/media/XfYyQFiq9ySc0/giphy.gif") center',
'url("https://media.giphy.com/media/QNQgqJ403Vcoo/giphy.gif") center',
'url("https://media.giphy.com/media/zMQcrvqjkC9d6/giphy.gif") center',
'url("https://media.giphy.com/media/EaSH6bwyEQVkA/giphy.gif") center',
'url("https://media.giphy.com/media/EGQ7qLdbWHOLK/giphy.gif") center',
'url("https://media.giphy.com/media/Cf76sVcqiN1tu/giphy.gif") center',
'url("https://media.giphy.com/media/dwRyANr9buXtK/giphy.gif") center',
'url("https://media.giphy.com/media/VG2RUZNTHYvAs/giphy.gif") center',
'url("https://media.giphy.com/media/50ikYkrYPNBqU/giphy.gif") center',
'url("https://media.giphy.com/media/gMDKyrWInxOhO/giphy.gif") center',
'url("https://media.giphy.com/media/12za05Ybz2YfcY/giphy.gif") center',
'url("https://media.giphy.com/media/pVtxNScpYHaY8/giphy.gif") center',
'url("https://media.giphy.com/media/p2s1qCQ60n4qs/giphy.gif") center',
'url("https://media.giphy.com/media/VEn6uMTmWunRu/giphy.gif") center',
'url("https://media.giphy.com/media/He70JJxAUGp8Y/giphy.gif") center',
'url("https://media.giphy.com/media/37qcnlmtHzZoAFsiFA/giphy.gif") center',
'url("https://media.giphy.com/media/sJaZBVqhPnQk0/giphy.gif") center',
'url("https://media.giphy.com/media/8NunvDAvEeWXu/giphy.gif") center',
'url("https://media.giphy.com/media/nbMyya8CQ25dPMXeYn/giphy.gif") center',
'url("https://media.giphy.com/media/l3nWl5bhBoim7glNu/giphy.gif") center',
'url("https://media.giphy.com/media/3dhBaH8VO2JRsIlvoR/giphy.gif") center'];

function changeGif(url) {
  parentNumber.style.background = url;
}

function equal() {
if(memory.includes('/') && number.innerHTML != 0){
    var num = number.innerHTML;
    var currentNum = parseFloat(number.innerHTML);
    if(num.match(/[\/+*-]/gm) && parseFloat(memory) !== 0){
        currentNum = parseFloat(memory);
        number.innerHTML = parseFloat(memory)/currentNum;
        memory = number.innerHTML;
        signRepeat = 0;
        reload = 0;
    }else if (num.match(/[\/+*-]/gm) && parseFloat(memory) == 0){
        number.innerHTML = '<img style=\"z-index: 1;bottom: 10px;\" src=\"https://images.lingscars.com/images/index/ling-oh-no.png\">' + 'Undefined';
        memory = 0;
        reload = 0;
        signRepeat = 0;
    }else{
    var storedNum = parseFloat(memory);
    number.innerHTML = storedNum/currentNum;
    console.log(storedNum/currentNum);
    memory = number.innerHTML;
    reload = 0;
    signRepeat = 0;
    }
}else if(memory.includes('/') && number.innerHTML == 0){
    number.innerHTML = '<img style=\"z-index: 1;bottom: 10px;\" src=\"https://images.lingscars.com/images/index/ling-oh-no.png\">' + 'Undefined';
    memory = 0;
    reload = 0;
    signRepeat = 0;
}else if(memory.includes('*')){
   var num = number.innerHTML;
   var currentNum = parseFloat(num);
   if(num.match(/[\/+*-]/gm)){
    currentNum = parseFloat(memory);
    number.innerHTML = parseFloat(memory)*currentNum;
    memory = number.innerHTML;
    signRepeat = 0;
    reload = 0;
}else{
   var storedNum = parseFloat(memory);
   number.innerHTML = (storedNum*currentNum);
   console.log(storedNum*currentNum);
   reload = 0;
   signRepeat = 0;
}
}else if(memory.includes('+')){
   var num = number.innerHTML;
   var currentNum = parseFloat(num);
   if(num.match(/[\/+*-]/gm)){
    currentNum = parseFloat(memory);
    number.innerHTML = parseFloat(memory)+currentNum;
    memory = number.innerHTML;
    signRepeat = 0;
    reload = 0;
}else{
   var storedNum = parseFloat(memory);
   number.innerHTML = parseFloat(storedNum+currentNum);
   console.log(storedNum+currentNum);
   reload = 0;
   signRepeat = 0;
}
}else if(memory.includes('-')){
   var num = number.innerHTML;
   var currentNum = parseFloat(num);
   if(num.match(/[\/+*-]/gm)){
    currentNum = parseFloat(memory);
    number.innerHTML = parseFloat(memory)-currentNum;
    memory = number.innerHTML;
    signRepeat = 0;
    reload = 0;
}else{
   var storedNum = parseFloat(memory);
   number.innerHTML = storedNum-currentNum;
   console.log(storedNum-currentNum);
   reload = 0;
   signRepeat = 0;
}
}
  var randomGif = gifArr[Math.floor(Math.random()*gifArr.length)]
  changeGif(randomGif);
  }

  number.addEventListener('click', function(){setTimeout(load666, 3000)});

function load666(){
    document.body.innerHTML = null;
    var videoWrap = document.createElement('div');
    videoWrap.className = 'videoWrapper';
    var video = document.createElement('div');
    // document.getElementById("vid").src = "https://www.youtube.com/watch?v=i7084dPvJjA";
    video.innerHTML = '<iframe class="ytplayer" width="560" height="349" src="https://www.youtube.com/embed/i7084dPvJjA?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
    document.body.appendChild(videoWrap);
    videoWrap.appendChild(video);
};

(function () {
    var buffer,
        latchId,
        onKonami,
        code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
  
    onKonami = function () {
        document.body.innerHTML = null;
        var videoWrap = document.createElement('div');
        videoWrap.className = 'videoWrapper';
        var video = document.createElement('div');
        // document.getElementById("vid").src = "https://www.youtube.com/watch?v=i7084dPvJjA";
        video.innerHTML = '<iframe class="ytplayer" width="560" height="315" src="https://www.youtube.com/embed/1pAZjd05NGo?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
        document.body.appendChild(videoWrap);
        videoWrap.appendChild(video);
        console.log('+30 Extra Lives!');
        document.body.style.background = null;
    };
  
    konami = function (ev) { 
      buffer = buffer || code.slice();
      if (buffer[0] === ev.keyCode) {
        window.clearTimeout(latchId);
        buffer.splice(0, 1);
        if (buffer.length === 0) {
          onKonami();
        }
        latchId = window.setTimeout(function () {
          buffer = code.slice();
        }, 500);
      }
    };
    window.addEventListener("keyup", konami); 
  }());

  (function () {
    var buffer,
        latchId,
        onKonami,
        code = [90, 69, 76, 68, 65];
        var sound = new Audio('audio/zelda.mp3');
  
    onKonami = function () {
        document.body.innerHTML = null;
        var videoWrap = document.createElement('div');
        videoWrap.className = 'videoWrapper';
        var video = document.createElement('div');
        // document.getElementById("vid").src = "https://www.youtube.com/watch?v=i7084dPvJjA";
        video.innerHTML = '<iframe id="opa" class="ytplayer" width="560" height="315" src="https://www.youtube.com/embed/AzRIGdGZgKU?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
        document.body.appendChild(videoWrap);
        videoWrap.appendChild(video);
        console.log("IT'S DANGEROUS TO GO ALONE. TAKE THIS.");
        document.body.style.background = 'url("http://www.techagesite.com/majora\'s-mask-desktop/the-legend-of-zelda-majora\'s-mask-3ds-desktop-wallpaper.jpg") center';
        sound.play();
    };
  
    konami = function (ev) { 
      buffer = buffer || code.slice();
      if (buffer[0] === ev.keyCode) {
        window.clearTimeout(latchId);
        buffer.splice(0, 1);
        if (buffer.length === 0) {
          onKonami();
        }
        latchId = window.setTimeout(function () {
          buffer = code.slice();
        }, 500);
      }
    };
    window.addEventListener("keyup", konami); 
  }());

  (function () {
    var buffer,
        latchId,
        onKonami,
        code = [83, 77, 65, 83, 72];
        var sound = new Audio('audio/zelda.mp3');
  
    onKonami = function () {
        document.body.innerHTML = null;
        var videoWrap = document.createElement('div');
        videoWrap.className = 'videoWrapper';
        var video = document.createElement('div');
        // document.getElementById("vid").src = "https://www.youtube.com/watch?v=i7084dPvJjA";
        video.innerHTML = '<iframe class="ytplayer" width="560" height="315" src="https://www.youtube.com/embed/EXnbMp1yr1k?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
        document.body.appendChild(videoWrap);
        videoWrap.appendChild(video);
        console.log("FREE FOR ALL!");
        document.body.style.background = null;
    };
  
    konami = function (ev) { 
      buffer = buffer || code.slice();
      if (buffer[0] === ev.keyCode) {
        window.clearTimeout(latchId);
        buffer.splice(0, 1);
        if (buffer.length === 0) {
          onKonami();
        }
        latchId = window.setTimeout(function () {
          buffer = code.slice();
        }, 500);
      }
    };
    window.addEventListener("keyup", konami); 
  }());


  (function () {
    var buffer,
        latchId,
        onKonami,
        code = [76, 73, 78, 71];
  
    onKonami = function () {
        document.body.innerHTML = null;
        var videoWrap = document.createElement('div');
        videoWrap.className = 'videoWrapper';
        var video = document.createElement('div');
        // document.getElementById("vid").src = "https://www.youtube.com/watch?v=i7084dPvJjA";
        video.innerHTML = '<iframe class="ytplayer" id="opa" width="560" height="315" src="https://www.youtube.com/embed/6HP2escR3qQ?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
        document.body.appendChild(videoWrap);
        videoWrap.appendChild(video);
        console.log("FREE FOR ALL!");
        document.body.style.background = 'url("https://images.lingscars.com/images/index/ling-mad.gif") center';
    };
  
    konami = function (ev) { 
      buffer = buffer || code.slice();
      if (buffer[0] === ev.keyCode) {
        window.clearTimeout(latchId);
        buffer.splice(0, 1);
        if (buffer.length === 0) {
          onKonami();
        }
        latchId = window.setTimeout(function () {
          buffer = code.slice();
        }, 500);
      }
    };
    window.addEventListener("keyup", konami); 
  }());

  var rollEm = document.createElement('div');
  rollEm.className = 'dice';
  var idkWat = document.createElement('div');
  idkWat.className = 'holyButt'
  rollEm.innerHTML = 'TEST YOUR LUCK AND WIN <span id="bmar">BRUNO MARS TICKETS</span> BY ROLLING THE DICE:' + '<button id="diceButton">Roll Dice</button>';
  spriteContainer.appendChild(rollEm);
var linglul = document.createElement('img');
linglul.Id = 'madmad';
linglul.src = 'https://images.lingscars.com/images/index/ling-mad-head.png';
rollEm.appendChild(linglul);

function changeGif2() {
        var sound = new Audio('audio/rr.mp3');
        document.body.innerHTML = null;
        var videoWrap = document.createElement('div');
        videoWrap.className = 'videoWrapper';
        var video = document.createElement('div');
        // document.getElementById("vid").src = "https://www.youtube.com/watch?v=i7084dPvJjA";
        document.body.appendChild(videoWrap);
        videoWrap.appendChild(video);
        console.log("OOPS SORRY, YOU JUST RICK-ROLLED");
        document.body.style.background = 'url("http://i.imgur.com/wGBi2Sq.gif") center';
        sound.play();
  }

diceButton.addEventListener('click', function(){
rollEm.innerHTML = 'TEST YOUR LUCK AND WIN <span id="bmar">BRUNO MARS TICKETS</span> BY ROLLING THE DICE:' + '<span id="poop">LOADING YOUR ROLL...</span>';
rollEm.appendChild(linglul);
linglul.style.display = 'block';
// var rollDaDice = diceImages2[Math.floor(Math.random()*diceImages2.length)];
setTimeout(changeGif2,3000);
})

// var diceImages = [ 
// 'url("https://commons.wikimedia.org/wiki/Category:Dice_faces#/media/File:Alea_1.png") center',
// 'url("https://commons.wikimedia.org/wiki/Category:Dice_faces#/media/File:Alea_2.png") center',
// 'url("https://commons.wikimedia.org/wiki/Category:Dice_faces#/media/File:Alea_3.png") center',
// 'url("https://commons.wikimedia.org/wiki/Category:Dice_faces#/media/File:Alea_4.png") center',
// 'url("https://commons.wikimedia.org/wiki/Category:Dice_faces#/media/File:Alea_5.png") center',
// 'url("https://commons.wikimedia.org/wiki/Category:Dice_faces#/media/File:Alea_6.png") center',
// 'url("http://i.imgur.com/wGBi2Sq.gif") center']

// var diceImages2 = [
// '<img style="z-index: 1;bottom: 10px;" src="https://etc.usf.edu/clipart/42100/42158/die_01_42158_sm.gif">',
// '<img style="z-index: 1;bottom: 10px;" src="https://etc.usf.edu/clipart/42100/42159/die_02_42159_sm.gif">',
// '<img style="z-index: 1;bottom: 10px;" src="https://commons.wikimedia.org/wiki/Category:Dice_faces#/media/File:Alea_3.png">',
// '<img style="z-index: 1;bottom: 10px;" src="https://commons.wikimedia.org/wiki/Category:Dice_faces#/media/File:Alea_4.png">',
// '<img style="z-index: 1;bottom: 10px;" src="https://commons.wikimedia.org/wiki/Category:Dice_faces#/media/File:Alea_5.png">',
// '<img style="z-index: 1;bottom: 10px;" src="https://commons.wikimedia.org/wiki/Category:Dice_faces#/media/File:Alea_6.png">',
// '<img style="z-index: 1;bottom: 10px;" src="http://i.imgur.com/wGBi2Sq.gif">']


var bmar = document.getElementById('bmar');
bmar.addEventListener('click', boopeep)

function boopeep(){
  var sound = new Audio('audio/Bruno.mp3');
  document.body.innerHTML = null;
  var videoWrap = document.createElement('div');
  videoWrap.className = 'videoWrapper';
  var video = document.createElement('div');
  document.body.appendChild(videoWrap);
  videoWrap.appendChild(video);
  console.log("SORRY SOLD OUT. Gotta watch on youtube");
  document.body.style.background = 'url(https://media.giphy.com/media/3o6ZtcyMhpwGRVUWyI/giphy.gif)';
  sound.play();
}