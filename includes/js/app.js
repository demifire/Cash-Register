(function(){
    document.body.style.background = 'white url(https://images.lingscars.com/images/index/bg/paisley.jpg)'
}());

  var xmasVid = document.createElement('video');
  xmasVid.src = 'https://images.lingscars.com/images/index/noddy_final.mp4';
  xmasVid.className = 'xmasVid';
  xmasVid.preload = 'auto';

function showLing() {
  spriteContainer.appendChild(xmasVid);
  xmasVid.style.display = 'block';
  xmasVid.play();
  xmasVid.loop = true;
  xmasVid.muted = false;
}

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
  xmasVid.style.display = 'none';
  xmasVid.muted = true;
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
  showLing();
}

var clearSwitch = document.getElementById("clear");
clear.addEventListener("click", gone);

function gone() {
  var result = document.getElementById("number");
  result.innerHTML = 0;
  memory = 0;
  signRepeat = 0;
  reload = 0;
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
        if(memory.includes('/') && !number.innerHTML.match(/[\/+*-]/gm) && number.innerHTML != 0){
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
         }else if(memory.includes('/') && !number.innerHTML.match(/[\/+*-]/gm) && number.innerHTML == 0){
          number.innerHTML = leUndefined;
          memory = 0;
          signRepeat = 0;
          reload = 0; 
         }else{
            number.innerHTML = '/';
            memory = parseFloat(memory) + '/';
            signRepeat++;
            reload = 0;   
           }
    }else if(number.innerHTML === leUndefined){
      number.innerHTML = 0;
      memory = 0;
      signRepeat = 0;
      reload = 0; 
      signRepeat = 0; 
     }else{
    memory = number.innerHTML + '/';
    number.innerHTML = '/';
    signRepeat = 1;
    return memory;
    }
}

function multiply() {
    if(signRepeat > 0){
        if(memory.includes('/') && !number.innerHTML.match(/[\/+*-]/gm) && number.innerHTML != 0){
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
         }else if(memory.includes('/') && !number.innerHTML.match(/[\/+*-]/gm) && number.innerHTML == 0){
          number.innerHTML = leUndefined;
          memory = 0;
          signRepeat = 0;
          reload = 0; 
         }else{
             number.innerHTML = '*';
             memory = parseFloat(memory) + '*';
             signRepeat++;
             reload = 0;   
            }
    }else if(number.innerHTML === leUndefined){
      number.innerHTML = 0;
      memory = 0;
      signRepeat = 0;
      reload = 0; 
      signRepeat = 0; 
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
        if(memory.includes('/') && !number.innerHTML.match(/[\/+*-]/gm) && number.innerHTML != 0){
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
         }else if(memory.includes('/') && !number.innerHTML.match(/[\/+*-]/gm) && number.innerHTML == 0){
          number.innerHTML = leUndefined;
          memory = 0;
          signRepeat = 0;
          reload = 0; 
         }else{
            number.innerHTML = '-';
            memory = parseFloat(memory) + '-';
            signRepeat++;
            reload = 0;   
           }
    }else if(number.innerHTML === leUndefined){
      number.innerHTML = 0;
      memory = 0;
      signRepeat = 0;
      reload = 0; 
      signRepeat = 0; 
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
        if(memory.includes('/') && !number.innerHTML.match(/[\/+*-]/gm) && number.innerHTML != 0){
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
         }else if(memory.includes('/') && !number.innerHTML.match(/[\/+*-]/gm) && number.innerHTML == 0){
          number.innerHTML = leUndefined;
          memory = 0;
          signRepeat = 0;
          reload = 0; 
         }else{
            number.innerHTML = '+';
            memory = parseFloat(memory) + '+';
            signRepeat++;
            reload = 0;   
           }
    }else if(number.innerHTML === leUndefined){
      number.innerHTML = 0;
      memory = 0;
      signRepeat = 0;
      reload = 0; 
      signRepeat = 0; 
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

var leUndefined = '<img style=\"z-index: 1;bottom: 10px;\" src=\"https://images.lingscars.com/images/index/ling-oh-no.png\">' + 'Undefined'

function equal() {
if(memory.includes('/') && number.innerHTML != 0){
    var num = number.innerHTML;
    var currentNum = parseFloat(number.innerHTML);
    if(num.match(/[\/+*-]/gm) && parseFloat(memory) !== 0){
        currentNum = parseFloat(memory);
        number.innerHTML = parseFloat(memory)/currentNum;
        if(number.innerHTML == 666){setTimeout(load666, 3000)}else if(number.innerHTML == 543645){theBest()};
        memory = number.innerHTML;
        signRepeat = 0;
        reload = 0;
    }else if (num.match(/[\/+*-]/gm) && parseFloat(memory) == 0){
        number.innerHTML = leUndefined;
        memory = 0;
        reload = 0;
        signRepeat = 0;
    }else{
    var storedNum = parseFloat(memory);
    number.innerHTML = storedNum/currentNum;
    if(number.innerHTML == 666){setTimeout(load666, 3000)}else if(number.innerHTML == 543645){theBest()};
    console.log(storedNum/currentNum);
    memory = number.innerHTML;
    reload = 0;
    signRepeat = 0;
    }
}else if(memory.includes('/') && number.innerHTML == 0){
    number.innerHTML = leUndefined;
    memory = 0;
    reload = 0;
    signRepeat = 0;
}else if(memory.includes('*')){
   var num = number.innerHTML;
   var currentNum = parseFloat(num);
   if(num.match(/[\/+*-]/gm)){
    currentNum = parseFloat(memory);
    number.innerHTML = parseFloat(memory)*currentNum;
    if(number.innerHTML == 666){setTimeout(load666, 3000)}else if(number.innerHTML == 543645){theBest()};
    memory = number.innerHTML;
    signRepeat = 0;
    reload = 0;
}else{
   var storedNum = parseFloat(memory);
   number.innerHTML = (storedNum*currentNum);
   if(number.innerHTML == 666){setTimeout(load666, 3000)}else if(number.innerHTML == 543645){theBest()};
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
    if(number.innerHTML == 666){setTimeout(load666, 3000)}else if(number.innerHTML == 543645){theBest()};
    memory = number.innerHTML;
    signRepeat = 0;
    reload = 0;
}else{
   var storedNum = parseFloat(memory);
   number.innerHTML = parseFloat(storedNum+currentNum);
   if(number.innerHTML == 666){setTimeout(load666, 3000)}else if(number.innerHTML == 543645){theBest()};
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
    if(number.innerHTML == 666){setTimeout(load666, 3000)}else if(number.innerHTML == 543645){theBest()};
    memory = number.innerHTML;
    signRepeat = 0;
    reload = 0;
}else{
   var storedNum = parseFloat(memory);
   number.innerHTML = storedNum-currentNum;
   if(number.innerHTML == 666){setTimeout(load666, 3000)}else if(number.innerHTML == 543645){theBest()};
   console.log(storedNum-currentNum);
   reload = 0;
   signRepeat = 0;
}
}
  var randomGif = gifArr[Math.floor(Math.random()*gifArr.length)]
  changeGif(randomGif);
  }

var arr666 = ['<iframe class="ytplayer" width="560" height="349" src="https://www.youtube.com/embed/i7084dPvJjA?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>', '<iframe class="ytplayer" width="560" height="315" src="https://www.youtube.com/embed/rLy-AwdCOmI?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>', '<iframe class="ytplayer" width="560" height="315" src="https://www.youtube.com/embed/ns1SGo3WCF4?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>', '<iframe class="ytplayer" width="560" height="315" src="https://www.youtube.com/embed/rle6kKjk48s?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>', '<iframe class="ytplayer" width="560" height="315" src="https://www.youtube.com/embed/Q_SgWpohvOY?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>', '<iframe class="ytplayer" width="560" height="315" src="https://www.youtube.com/embed/FpBrQcP8KQQ?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>']

function load666(){
  function change666(url) {
    video.innerHTML = url;
  }
    var random666 = arr666[Math.floor(Math.random()*arr666.length)]
    document.body.innerHTML = null;
    var videoWrap = document.createElement('div');
    videoWrap.className = 'videoWrapper';
    var video = document.createElement('div');
    newDiv.innerHTML = null;
    // document.getElementById("vid").src = "https://www.youtube.com/watch?v=i7084dPvJjA";
    change666(random666);
    document.body.appendChild(videoWrap);
    videoWrap.appendChild(video);
};

function theBest(){
  var sound = new Audio('audio/bob.mp3');
  newDiv.innerHTML = null;
  document.body.innerHTML = null;
  document.body.style.background = null;
  sound.play();
  document.body.style.background = 'url(important/bob.jpg) no-repeat center center fixed';
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
        newDiv.innerHTML = null;
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
        newDiv.innerHTML = null;
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
        newDiv.innerHTML = null;
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
        newDiv.innerHTML = null;
        console.log("YOU JUST GOT LINGed!!!");
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
        newDiv.innerHTML = null;
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
  newDiv.innerHTML = null;
  console.log("SORRY SOLD OUT. Gotta watch on youtube");
  document.body.style.background = 'url(https://media.giphy.com/media/3o6ZtcyMhpwGRVUWyI/giphy.gif)';
  sound.play();
}

var newDiv = document.createElement('div');
newDiv.innerHTML = '<iframe style="height: 490px; border: 0px none; width: 619px; margin-top: -100px; margin-left: -209px" src="https://www.youtube.com/embed/L2GlWaeNNoU?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
newDiv.className = 'newDiv';

function appendDakine() {
  document.body.appendChild(newDiv);
  return console.log('DESPACITO TYM');
}


setTimeout(appendDakine, 4200)

var newDiv2 = document.createElement('div');
newDiv2.innerHTML = '<iframe id="chinesegirl" style="height: 490px; margin-top: -120px" src="https://www.youtube.com/embed/f8uys1NSdUg?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
newDiv2.className = 'newDiv2';
document.body.appendChild(newDiv2);
newDiv2.style.display = 'none';
var newDiv2vid = document.getElementById('chinesegirl');
var freeflash = document.getElementsByClassName('free')[0];

(function () {
  var buffer,
      latchId,
      onKonami,
      code = [79, 70, 70];

  onKonami = function () {
      freeflash.style.display = 'none';
      newDiv.innerHTML = null;
      newDiv2vid.src = false;
      console.log("Good job. You just turned off some of the annoying content here!");
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

var letsplay = document.getElementsByClassName('letsplay')[0];
letsplay.addEventListener('dblclick', beware);

function beware(){
  var sound = new Audio('audio/footstep.mp3');
  newDiv.innerHTML = null;
  document.body.innerHTML = null;
  document.body.style.background = null;
  var intro = document.createElement('p');
  intro.className = "fade";
  setTimeout(function(){
    intro.innerHTML = 'You are walking in the woods.';
    document.body.appendChild(intro);
  }, 0);
  setTimeout(function(){
    sound.play();
    document.body.style.background = 'url(https://vignette.wikia.nocookie.net/scarylocations/images/3/3a/Forest.jpg/revision/latest?cb=20141105033329) no-repeat center center fixed';
  }, 4000);
  var intro2 = document.createElement('p');
  intro2.className = "fade";
  setTimeout(function(){
    intro2.innerHTML = "There's no one around,";
    document.body.appendChild(intro2);
  }, 7000);
  var intro3 = document.createElement('p');
  intro3.className = "fade";
  setTimeout(function(){
    intro3.innerHTML = "And your phone is dead.";
    document.body.appendChild(intro3);
  }, 9000);
  setTimeout(beware2, 12000);
}

function beware2(){
  var sound = new Audio('audio/scream.mp3');
  newDiv.innerHTML = null;
  document.body.innerHTML = null;
  document.body.style.background = null;
  var intro = document.createElement('p');
  intro.className = "fade";
  setTimeout(function(){
    intro.innerHTML = 'Out of the corner of your eye you spot him,';
    document.body.appendChild(intro);
  }, 0);
  setTimeout(function(){
    sound.play();
    document.body.style.background = 'url(https://78.media.tumblr.com/tumblr_m39dn7agWQ1r07ghu.jpg) no-repeat center center fixed';
  }, 4000);
  var intro2 = document.createElement('p');
  intro2.className = "fade";
  setTimeout(function(){
    intro2.innerHTML = "Shia LaBeouf.";
    document.body.appendChild(intro2);
  }, 7000);
  var intro3 = document.createElement('p');
  intro3.className = "fade";
  setTimeout(function(){
    intro3.innerHTML = "He's following you";
    document.body.appendChild(intro3);
  }, 9000);
  setTimeout(beware3, 12000);
};

var deadTimer;
function beware3(){
  var sound = new Audio('audio/omin.mp3');
  newDiv.innerHTML = null;
  document.body.innerHTML = null;
  document.body.style.background = null;
  var intro = document.createElement('p');
  intro.className = "fade";
  setTimeout(function(){
    sound.play();
    intro.innerHTML = 'He gets down on all fours and breaks into a sprint.';
    document.body.appendChild(intro);
  }, 0);
  setTimeout(function(){
    document.body.style.background = 'url(https://i.imgur.com/446T9Vs.png) no-repeat center center fixed';
  }, 4000);
  var intro2 = document.createElement('p');
  intro2.className = "fade";
  setTimeout(function(){
    intro2.innerHTML = "What do you do?";
    document.body.appendChild(intro2);
  }, 7000);
  var alignButton = document.createElement('div');
  alignButton.className = 'alignButton';
  setTimeout(function(){document.body.appendChild(alignButton)}, 9000)
  var button = document.createElement('button');
  button.innerHTML = 'Search for your car';
  button.className = "fade";
  button.style.display = 'inline-block !Important';
  button.addEventListener('click', beware5);
  setTimeout(function(){alignButton.appendChild(button)}, 9000)
  var button2 = document.createElement('button');
  button2.innerHTML = 'Start running';
  button2.className = "fade";
  button2.style.display = 'inline-block !Important';
  button2.style.marginLeft = '20px';
  button2.addEventListener('click', beware6);
  setTimeout(function(){alignButton.appendChild(button2)}, 9000)
  deadTimer = setTimeout(beware4, 20000);
}

// Waited Too Long - dead
function beware4(){
  clearTimeout(deadTimer);
  var sound = new Audio('audio/scream.mp3');
  newDiv.innerHTML = null;
  document.body.innerHTML = null;
  document.body.style.background = null;
  var intro = document.createElement('p');
  intro.className = "fade";
  setTimeout(function(){
    sound.play();
    intro.innerHTML = 'You waited too long. Shia knocked you out, brought you to his apartment and ate you.';
    document.body.appendChild(intro);
  }, 3000);
  setTimeout(function(){
    document.body.style.background = 'url(http://dazedimg.dazedgroup.netdna-cdn.com/786/azure/dazed-prod/1230/7/1237704.jpg) no-repeat center center fixed';
  }, 0);
  var intro2 = document.createElement('p');
  intro2.className = "fade";
  setTimeout(function(){
    intro2.innerHTML = "You Lose.";
    document.body.appendChild(intro2);
  }, 5000);
}

// Look for car - dead
function beware5(){
  clearTimeout(deadTimer);
  var sound = new Audio('audio/scream.mp3');
  newDiv.innerHTML = null;
  document.body.innerHTML = null;
  document.body.style.background = null;
  var intro = document.createElement('p');
  intro.className = "fade";
  setTimeout(function(){
    intro.innerHTML = "You stop to look for your car, but it's hazy. You have no idea what direction your car is in.";
    document.body.appendChild(intro);
  }, 0);
  setTimeout(function(){
    sound.play();
    document.body.style.background = 'url(http://ewedit.files.wordpress.com/2016/08/shialabeouf.gif) no-repeat center center fixed';
  }, 4000);
  var intro2 = document.createElement('p');
  intro2.className = "fade";
  setTimeout(function(){
    intro2.innerHTML = "SHIA CAUGHT UP TO YOU.";
    document.body.appendChild(intro2);
  }, 7000);
  var intro3 = document.createElement('p');
  intro3.className = "fade";
  setTimeout(function(){
    intro3.innerHTML = "You're dead...";
    document.body.appendChild(intro3);
  }, 9000);
}

function beware6(){
  clearTimeout(deadTimer);
  var sound = new Audio('audio/scream.mp3');
  newDiv.innerHTML = null;
  document.body.innerHTML = null;
  document.body.style.background = null;
  var intro = document.createElement('p');
  intro.className = "fade";
  setTimeout(function(){
    intro.innerHTML = "You realize you have no time to think- and need to run from Shia.";
    document.body.appendChild(intro);
  }, 0);
  setTimeout(function(){
    sound.play();
    document.body.style.background = 'url(https://i.ytimg.com/vi/3Nfg-WC7YY0/maxresdefault.jpg) no-repeat center center fixed';
  }, 4000);
  var intro2 = document.createElement('p');
  intro2.className = "fade";
  setTimeout(function(){
    intro2.innerHTML = "He's gaining on you. And you can see there's blood on his face!";
    document.body.appendChild(intro2);
  }, 7000);
  var intro3 = document.createElement('p');
  intro3.className = "fade";
  setTimeout(function(){
    intro3.innerHTML = "He's almost upon you now. My god, there's blood everywhere!";
    document.body.appendChild(intro3);
  }, 9000);
  var alignButton = document.createElement('div');
  alignButton.className = 'alignButton';
  setTimeout(function(){document.body.appendChild(alignButton)}, 12000)
  var button = document.createElement('button');
  button.innerHTML = 'Hide behind a tree';
  button.className = "fade";
  button.style.display = 'inline-block !Important';
  button.addEventListener('click', beware8);
  setTimeout(function(){alignButton.appendChild(button)}, 12000)
  var button2 = document.createElement('button');
  button2.innerHTML = 'Keep running towards a faint light';
  button2.className = "fade";
  button2.style.display = 'inline-block !Important';
  button2.style.marginLeft = '20px';
  button2.addEventListener('click', beware7);
  setTimeout(function(){alignButton.appendChild(button2)}, 12000)
  deadTimer = setTimeout(beware4, 20000);
}

function beware7(){
  clearTimeout(deadTimer);
  var sound = new Audio('audio/scream.mp3');
  newDiv.innerHTML = null;
  document.body.innerHTML = null;
  document.body.style.background = null;
  var intro = document.createElement('p');
  intro.className = "fade";
  setTimeout(function(){
    intro.innerHTML = '"A-HA!" SHIA UNEXPECTEDLY KNOCKED YOU OVER!';
    document.body.appendChild(intro);
  }, 0);
  setTimeout(function(){
    sound.play();
    document.body.style.background = 'url(https://i.makeagif.com/media/6-15-2015/z8jBi9.gif) no-repeat center center fixed';
  }, 4000);
  var intro2 = document.createElement('p');
  intro2.className = "fade";
  setTimeout(function(){
    intro2.innerHTML = "Shia is stabbing you, and eating your flesh alive.";
    document.body.appendChild(intro2);
  }, 7000);
  var intro3 = document.createElement('p');
  intro3.className = "fade";
  setTimeout(function(){
    intro3.innerHTML = "You are dead.";
    document.body.appendChild(intro3);
  }, 9000);
}

function beware8(){
  clearTimeout(deadTimer);
  var sound = new Audio('audio/footstep.mp3');
  newDiv.innerHTML = null;
  document.body.innerHTML = null;
  document.body.style.background = null;
  var intro = document.createElement('p');
  intro.className = "fade";
  setTimeout(function(){
    intro.innerHTML = "Now it's dark and you seem to have lost him, but you're hopelessly lost yourself.";
    document.body.appendChild(intro);
  }, 0);
  setTimeout(function(){
    sound.play();
    document.body.style.background = 'url(https://vignette.wikia.nocookie.net/superepicfailpedia/images/6/6f/4535009-7222198416-e89.g.gif/revision/latest?cb=20160204041232) no-repeat center center fixed';
  }, 4000);
  var intro2 = document.createElement('p');
  intro2.className = "fade";
  setTimeout(function(){
    intro2.innerHTML = "Stranded with a murderer, you creep silently through the underbrush.";
    document.body.appendChild(intro2);
  }, 7000);
  var intro3 = document.createElement('p');
  intro3.className = "fade";
  setTimeout(function(){
    intro3.innerHTML = "A-ha! In the distance, you see a small cottage with a light on. Hope!";
    document.body.appendChild(intro3);
  }, 9000);
  var alignButton = document.createElement('div');
  alignButton.className = 'alignButton';
  setTimeout(function(){document.body.appendChild(alignButton)}, 12000)
  var button = document.createElement('button');
  button.innerHTML = 'Move slowly towards it';
  button.className = "fade";
  button.style.display = 'inline-block !Important';
  button.addEventListener('click', beware9);
  setTimeout(function(){alignButton.appendChild(button)}, 12000)
  var button2 = document.createElement('button');
  button2.innerHTML = 'Make a run for it!';
  button2.className = "fade";
  button2.style.display = 'inline-block !Important';
  button2.style.marginLeft = '20px';
  button2.addEventListener('click', beware9);
  setTimeout(function(){alignButton.appendChild(button2)}, 12000)
  deadTimer = setTimeout(beware4, 20000);
}

function beware9(){
  clearTimeout(deadTimer);
  var sound = new Audio('audio/scream.mp3');
  newDiv.innerHTML = null;
  document.body.innerHTML = null;
  document.body.style.background = null;
  var intro = document.createElement('p');
  intro.className = "fade";
  setTimeout(function(){
    intro.innerHTML = "You make it to the cabin, and enter quietly.";
    document.body.appendChild(intro);
  }, 0);
  setTimeout(function(){
    sound.play();
    document.body.style.background = 'url(http://www.much.com/wp-content/uploads/2016/02/shia-labeouf-eats-a-slice-of-dominos-pepperoni-pizza-during-holes.png) no-repeat center center fixed';
  }, 4000);
  var intro2 = document.createElement('p');
  intro2.className = "fade";
  setTimeout(function(){
    intro2.innerHTML = "YOU SEE SHIA SITTING THERE. HE DOESN'T NOTICE YOU!";
    document.body.appendChild(intro2);
  }, 7000);
  var intro3 = document.createElement('p');
  intro3.className = "fade";
  setTimeout(function(){
    intro3.innerHTML = "YOU SEE A GUN NEXT TO HIM.";
    document.body.appendChild(intro3);
  }, 9000);
  var alignButton = document.createElement('div');
  alignButton.className = 'alignButton';
  setTimeout(function(){document.body.appendChild(alignButton)}, 12000)
  var button = document.createElement('button');
  button.innerHTML = 'Quietly strangle him';
  button.className = "fade";
  button.style.display = 'inline-block !Important';
  button.addEventListener('click', beware10);
  setTimeout(function(){alignButton.appendChild(button)}, 12000)
  var button2 = document.createElement('button');
  button2.innerHTML = 'Dive for the gun';
  button2.className = "fade";
  button2.style.display = 'inline-block !Important';
  button2.style.marginLeft = '20px';
  button2.addEventListener('click', beware15);
  setTimeout(function(){alignButton.appendChild(button2)}, 12000)
  deadTimer = setTimeout(beware4, 20000);
};

function beware10(){
  clearTimeout(deadTimer);
  newDiv.innerHTML = null;
  document.body.innerHTML = null;
  document.body.style.background = null;
  var intro = document.createElement('p');
  intro.className = "fade";
  setTimeout(function(){
    intro.innerHTML = "YOU CHOKE HIM UNCONSCIOUS. HE'S NO LONGER BREATHING.";
    document.body.appendChild(intro);
  }, 0);
  setTimeout(function(){
    document.body.style.background = 'url(https://e3.365dm.com/16/07/1096x616/2-1_3499269.jpg?20160704101336) no-repeat center center fixed';
  }, 4000);
  var intro2 = document.createElement('p');
  intro2.className = "fade";
  setTimeout(function(){
    intro2.innerHTML = "YOU WIN. You walk back into the woods.";
    document.body.appendChild(intro2);
  }, 7000);
  var intro3 = document.createElement('p');
  intro3.className = "fade";
  setTimeout(function(){
    intro3.innerHTML = "You have beaten Shia LaBeouf";
    document.body.appendChild(intro3);
  }, 11000);
setTimeout(beware11, 16000);
};

function beware11(){
  var sound = new Audio('audio/doit.mp3');
  newDiv.innerHTML = null;
  document.body.innerHTML = null;
  document.body.style.background = null;
  var intro = document.createElement('p');
  intro.className = "fade";
  setTimeout(function(){
    intro.innerHTML = "Wait! He isn't dead! Shia Surprise!";
    document.body.appendChild(intro);
  }, 0);
  setTimeout(function(){
    sound.play();
    document.body.style.background = 'url(https://assets.rbl.ms/2590172/980x.jpg) no-repeat center center fixed';
  }, 4000);
  var intro2 = document.createElement('p');
  intro2.className = "fade";
  setTimeout(function(){
    intro2.innerHTML = "There's a gun to your head, and death in his eyes. You plea for your life.";
    document.body.appendChild(intro2);
  }, 7000);
  var intro3 = document.createElement('p');
  intro3.className = "fade";
  setTimeout(function(){
    intro3.innerHTML = "He takes pity on you and decides to give you a running start.";
    document.body.appendChild(intro3);
  }, 13000);
setTimeout(beware12, 17000);
};

function beware12(){
  var sound = new Audio('audio/scream.mp3');
  newDiv.innerHTML = null;
  document.body.innerHTML = null;
  document.body.style.background = null;
  var intro = document.createElement('p');
  intro.className = "fade";
  setTimeout(function(){
    intro.innerHTML = "You sprint for your life, but you get caught in a bear trap";
    document.body.appendChild(intro);
  }, 0);
  setTimeout(function(){
    sound.play();
    document.body.style.background = 'url(http://brokeassstuart.com/wp-content/pictsnShit/2017/02/Pullling-out-tooth.jpg) no-repeat center center fixed';
  }, 4000);
  var intro2 = document.createElement('p');
  intro2.className = "fade";
  setTimeout(function(){
    intro2.innerHTML = 'Shia comes and slices one of your hands off! WAIT, SOMEONE HEARS YOUR SCREAMING. "STOP RIGHT THERE!" SOMEONE ELSE IS HERE';
    document.body.appendChild(intro2);
  }, 7000);
  var intro3 = document.createElement('p');
  intro3.className = "fade";
  setTimeout(function(){
    intro3.innerHTML = "A GOOD SAMARITAN TACKLED SHIA. THE GUN DROPS ON THE GROUND. SHIA DECAPITATED THE STRANGER! ..YOU REACH FOR THE GUN..";
    document.body.appendChild(intro3);
  }, 16000);
setTimeout(beware13, 27000);
};

function beware13(){
  var sound = new Audio('audio/gun.mp3');
  newDiv.innerHTML = null;
  document.body.innerHTML = null;
  document.body.style.background = null;
  var intro = document.createElement('p');
  intro.className = "fade";
  setTimeout(function(){
    intro.innerHTML = 'YOU SHOOT SHIA';
    document.body.appendChild(intro);
  }, 0);
  setTimeout(function(){
    sound.play();
    document.body.style.background = 'url(http://cdn01.cdn.justjared.com/wp-content/uploads/2008/04/shia-dead/shia-labeouf-dead-new-york-i-love-you-01.jpg) no-repeat center center fixed';
  }, 4000);
  var intro2 = document.createElement('p');
  intro2.className = "fade";
  setTimeout(function(){
    intro2.innerHTML = 'You have killed Shia.';
    document.body.appendChild(intro2);
  }, 7000);
  setTimeout(beware14, 12000);
};

function beware14(){
  newDiv.innerHTML = null;
  document.body.innerHTML = null;
  document.body.style.background = null;
  var intro = document.createElement('p');
  intro.className = "fade";
  setTimeout(function(){
    intro.innerHTML = "You scream for anyone around. You scream until you have no energy. You're bleeding out.";
    document.body.appendChild(intro);
  }, 0);
  setTimeout(function(){
    document.body.style.background = 'url(https://thesanguinewoods.files.wordpress.com/2016/03/creepyforest.jpg?w=549) no-repeat center center fixed';
  }, 7000);
  var intro2 = document.createElement('p');
  intro2.className = "fade";
  setTimeout(function(){
    intro2.innerHTML = 'No one is around. You moan in agony.';
    document.body.appendChild(intro2);
  }, 10000);
  var intro3 = document.createElement('p');
  intro3.className = "fade";
  setTimeout(function(){
    intro3.innerHTML = "The end.";
    document.body.appendChild(intro3);
  }, 16000);
};

function beware15(){
  clearTimeout(deadTimer);
  newDiv.innerHTML = null;
  document.body.innerHTML = null;
  document.body.style.background = null;
  var intro = document.createElement('p');
  intro.className = "fade";
  setTimeout(function(){
    intro.innerHTML = "You dive for the gun but accidentally knock it on the ground.";
    document.body.appendChild(intro);
  }, 0);
  setTimeout(function(){
    document.body.style.background = 'url(http://static.fjcdn.com/gifs/Shia+thebuff_5b09fb_5435014.gif) no-repeat center center fixed';
  }, 7000);
  var intro2 = document.createElement('p');
  intro2.className = "fade";
  setTimeout(function(){
    intro2.innerHTML = 'Shia instinctively pushes you on the ground and realizes what is happening';
    document.body.appendChild(intro2);
  }, 10000);
  var intro3 = document.createElement('p');
  intro3.className = "fade";
  setTimeout(function(){
    intro3.innerHTML = "He laughs and prepares himself for the feast that is you!";
    document.body.appendChild(intro3);
  }, 14000);
  setTimeout(beware16, 20000);
};

function beware16(){
  var sound = new Audio('audio/bruce.mp3');
  newDiv.innerHTML = null;
  document.body.innerHTML = null;
  document.body.style.background = null;
  var intro = document.createElement('p');
  intro.className = "fade";
  setTimeout(function(){
    intro.innerHTML = "Shia starts using his martial arts on you, and finally puts you into a chokehold.";
    document.body.appendChild(intro);
  }, 0);
  setTimeout(function(){
    sound.play();
    document.body.style.background = 'url(https://media.giphy.com/media/xT5LMupS2BnmwIgCOc/giphy.gif) no-repeat center center fixed';
  }, 7000);
  var intro2 = document.createElement('p');
  intro2.className = "fade";
  setTimeout(function(){
    intro2.innerHTML = 'You feel around for anything on the ground, and find a sharp fire iron.';
    document.body.appendChild(intro2);
  }, 10000);
  var intro3 = document.createElement('p');
  intro3.className = "fade";
  setTimeout(function(){
    intro3.innerHTML = "You stab him in the kidney and get out of his grasp while he's shrieking";
    document.body.appendChild(intro3);
  }, 16000);
  setTimeout(beware17, 22000);
};

function beware17(){
  var sound = new Audio('audio/gun.mp3');
  newDiv.innerHTML = null;
  document.body.innerHTML = null;
  document.body.style.background = null;
  var intro = document.createElement('p');
  intro.className = "fade";
  setTimeout(function(){
    intro.innerHTML = "You immediately grab the gun and shoot Shia in the head";
    document.body.appendChild(intro);
  }, 0);
  setTimeout(function(){
    sound.play();
    document.body.style.background = 'url(http://images5.fanpop.com/image/photos/25200000/New-York-I-Love-You-new-york-i-love-you-25295949-1222-997.jpg) no-repeat center center fixed';
  }, 7000);
  var intro2 = document.createElement('p');
  intro2.className = "fade";
  setTimeout(function(){
    intro2.innerHTML = 'You have killed Shia... A stranger starts knocking on the door. "Hello??? Are you people okay?!"';
    document.body.appendChild(intro2);
  }, 10000);
  var intro3 = document.createElement('p');
  intro3.className = "fade";
  setTimeout(function(){
    intro3.innerHTML = '"Yeah, please can I get help. Shia tried to kill me..."';
    document.body.appendChild(intro3);
  }, 16000);
  setTimeout(beware18, 22000);
};

function beware18(){
  var sound = new Audio('audio/victory.mp3');
  var sound1 = new Audio('audio/shia.mp3');
  newDiv.innerHTML = null;
  document.body.innerHTML = null;
  document.body.style.background = null;
  var intro = document.createElement('p');
  intro.className = "fade";
  setTimeout(function(){
    intro.innerHTML = "The stranger mentions that he has been on the hunt for Shia.. but now it's over";
    document.body.appendChild(intro);
  }, 0);
  setTimeout(function(){
    sound.play();
    document.body.style.background = 'url(https://media1.tenor.com/images/d860b6439f83c05d1c0b36c1bed8ca86/tenor.gif?itemid=10384759) no-repeat center center fixed';
  }, 7000);
  var intro2 = document.createElement('p');
  intro2.className = "fade";
  setTimeout(function(){
    sound1.play();
    intro2.innerHTML = 'You win.';
    document.body.appendChild(intro2);
  }, 10000);
  var intro3 = document.createElement('p');
  intro3.className = "fade";
  setTimeout(function(){
    intro3.innerHTML = 'Congratulations! You have unlocked the secret: the lost woods';
    document.body.appendChild(intro3);
  }, 16000);
};

console.log('Simply type "off" on your keyboard while on document.body');

var wow = document.getElementsByClassName('clickedYO')[0];
wow.addEventListener('click', function(){console.log('Type "ling" while on the page for cool stuff')});

(function () {
  var buffer,
      latchId,
      onKonami,
      code = [84,72,69,32,76,79,83,84,32,87,79,79,68,83];

  onKonami = function () {
    newDiv.innerHTML = null;
    document.body.innerHTML = null;
    document.body.style.background = null;
    var intro = document.createElement('p');
    intro.className = "fade";
    intro.innerHTML = 'Turn off annoying sound and music - type "off" on document.body <br><br> Click on Bruno Mars text - reveals gif and music <br><br> Click on roll dice - reveals gif and music <br><br> Type zelda - reveals video <br><br> Using the arrows type, up up down down left right left right b a - reveals video <br><br> Type smash - reveals video <br><br> Get calculator to display 666 - displays random scary video <br><br> Double click S above A-Z - Play Shia game <br><br> Type "ling" for an awesome video <br><br> Get the calculator to display 543645 - Ultimate Secret';
    document.body.appendChild(intro);
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