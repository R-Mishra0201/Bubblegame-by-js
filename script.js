var timer = 60;
var score =0;
var randhit = 0;

function makebulbule (){
    var clutter = "";
for(var i = 1; i<=200; i++){
var rand = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rand}</div>`;
    document.querySelector('.pbottom').innerHTML=clutter;
}
}

function settime(){
 var timeup = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector('#timerconv').innerHTML=timer;
        }
        else{
            document.querySelector('.pbottom').innerHTML=`<h1>Game khhtm biro ..... and your score is ${score}</h1>`;
            clearInterval(timeup);
        }
    },1000)
}


function newscore(){
    score +=10;
    document.querySelector('#newscore').innerHTML=score;
}


function newhit(){
     randhit = Math.floor(Math.random()*10);
    document.querySelector('#hitchange').textContent= randhit;
}

document.querySelector('.pbottom').addEventListener("click",function(dets){
    var clickednum = Number(dets.target.textContent);
    if(clickednum === randhit){
        newscore();
        makebulbule();
        newhit();
    }
})

newhit();
settime();
makebulbule();


