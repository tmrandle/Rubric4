var body = document.getElementById("page");
var title = document.getElementById("title");
var navBar;
var liLinks;
var numOne = document.getElementById("numOne");
var numTwo = document.getElementById("numTwo");
var addSum = document.getElementById("sum");
var btn = document.getElementById("btn");
var copy = document.getElementById("copy");
var wren = document.getElementById("wren");
var bBird = document.getElementById("bBird");
var date = new Date();
var weekDate = date.getDay();


function checkCookies() {
    var text = '';

    if (navigator.cookieEnabled == true) {
        text = "Cookies are enabled.";
    }else{
        text = "Cookies are not enabled";
    }
    console.log(text);
    alert(text);
}
//on load event, checking for cookies and console logging result and alert
body.addEventListener("load",checkCookies(), false);

function changeColor(e){
    e.target.style.color = "blue";

    setTimeout(function(){
        e.target.style.color ="#f5f5f5";
    }, 700);
}

title.addEventListener("mouseover", changeColor, false);

//working with getElementById element in an variable named navBar
navBar = document.getElementById("navBar");
console.log(navBar.childNodes.length);
navBar.setAttribute("align", "center");

//working with getElementsByTagName
liLinks = navBar.getElementsByTagName("a");
console.log("Text of li link index 0 " + liLinks[0].text);
for (let i = 0; i < liLinks.length; i++){
liLinks[i].setAttribute("style", "color: blue");
 }

 //mouseover event for the nav links
navList.addEventListener("mouseover", function(event){
    //highlights the mouseover target red on mouseover
    event.target.style.color = "red";
    //reset the color after a timeout of 700
    setTimeout(function(){
        event.target.style.color ="blue";
    }, 700);
},false);


function collectAndAdd() {
    let one = parseInt(numOne.value) || 0;
    let two = parseInt(numTwo.value) || 0;
    let sum = one + two;
    addSum.innerHTML = "Your sum is " + sum;
}

numOne.addEventListener("input", collectAndAdd, false);
numTwo.addEventListener("input" , collectAndAdd, false);

function btnClick(){
    
    console.log("Yeah, you clicked the button.");

    var btn = document.getElementById("btn");
    if(btn.style.background == ""){
        btn.style.background = "yellow";
    }else{
        btn.style.background = "";
    }
}

btn.addEventListener("click", btnClick, false);


function copyAlert(){
    alert('Thanks for copying the text!');
}
copy.addEventListener("copy", copyAlert, false);


function showPic(e) {
    //to keep it from going back to the top of the page
    e.preventDefault();
    //to hide all the images on the page
    var allPics = document.querySelectorAll("img");

    for (var i = 0; i < allPics.length; i++ ){
        allPics.className = "hide";
    }

    console.log(this); //the this is the value of whatever was clicked--good for multiple items in a list
    var picId = this.attributes["data-img"].value; //the value for the id from the item clicked is put into picId, using data-img
    console.log(picId);
    var pic = document.getElementById(picId);
    
    if (pic.className === "hide"){
        pic.className = "";
    }else{
        pic.className = "hide";
    }
    
}

//click event for list items
wren.addEventListener("click", showPic, false);
bBird.addEventListener("click", showPic, false);


//this displays the date on the page in the p with id="time"
document.getElementById("time").innerHTML = "Today is " + (date.getMonth()+1) + "/" + date.getDate() + "/" + date.getFullYear();
