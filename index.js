function submit(){
    let nickname= document.getElementById("textInput").value;
    let text= `Hey! ${nickname} ,what's your order?`;

    document.getElementById("h1value").innerHTML=text;
    document.getElementById("con1").style.display="none";
    document.getElementById("con2").style.display="block";
}

function read1(){
    document.getElementById("con1").style.display="none";
    document.getElementById("con2").style.display="none";
    document.getElementById("tea1-1").style.display="block";
}

function read2(){
    document.getElementById("con1").style.display="none";
    document.getElementById("con2").style.display="none";
    document.getElementById("tea2-2").style.display="block";
}
function read3(){
    document.getElementById("con1").style.display="none";
    document.getElementById("con2").style.display="none";
    document.getElementById("tea3-3").style.display="block";
}
function read4(){
    document.getElementById("con1").style.display="none";
    document.getElementById("con2").style.display="none";
    document.getElementById("tea4-4").style.display="block";
}
function back(){
    document.getElementById("con1").style.display="none";
    document.getElementById("con2").style.display="block";
    document.getElementById("tea1-1").style.display="none";
    document.getElementById("tea2-2").style.display="none";
    document.getElementById("tea3-3").style.display="none";
    document.getElementById("tea4-4").style.display="none";
}

