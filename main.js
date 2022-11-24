document.getElementById("a").innerHTML="you have logged in at"+ Date();
document.getElementById("b").innerHTML=5+6;
alert("popup");
console.log("js loaded success at"+ Date());

function printer(){
    window.print();
}


function add(){
    let a =parseInt(document.getElementById("vara").value);
    let b =parseInt(document.getElementById("varb").value);
    
    document.getElementById("result").innerHTML= a + b;
}


    const tag=document.createElement("h1");
    const data=document.createTextNode("this is new heading inserted by JS");
    tag.appendChild(data);
    document.body.insertBefore(para,document,getElementById('result'));

    document.getElementById("result").style.color="red";


