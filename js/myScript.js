var numOne = document.getElementById("numOne");
var numTwo = document.getElementById("numTwo");
var addSum = document.getElementById("sum");
var Wren = document.getElementById("wren");
var navBar;
var liTag;
var liLinks;

numOne.addEventListener("input", collectAndAdd);
numTwo.addEventListener("input" , collectAndAdd);

function collectAndAdd() {
    let one = parseInt(numOne.value) || 0;
    let two = parseInt(numTwo.value) || 0;
    let sum = one + two;
    addSum.innerHTML = "Your sum is " + sum;
}

wren.addEventListener("click", showPic);

function showPic() {
    //to hide all the images on the page
    var allPics = document.querySelectorAll("img");

    for (var i = 0; i < allPics.length; i++ ){
        allPics.className = "hide";
    }

    console.log(this); //the this is the value of whatever was clicked--good for multiple items in a list
    var picId = this.attributes["data-img"].value; //the value for the id from the item clicked is put into picId, uaing data-
    console.log(picId);
    var pic = document.getElementById(picId);
    
    if (pic.className === "hide"){
        pic.className = "";
    }else{
        pic.className = "hide";
    }
    
}

//working with getElementById element in an variable named navBar
navBar = document.getElementById("navBar");
console.log(navBar.childNodes.length);
navBar.setAttribute("align", "center");

liTag = document.getElementsByTagName("li");
console.log("Number of li links in navBar " + liTag.length); 

//working with getElementsByTagName
liLinks = navBar.getElementsByTagName("a");
console.log("Text of li link index 0 " + liLinks[0].text);
for (let i = 0; i < liLinks.length; i++){
liLinks[i].setAttribute("style", "color: blue");
}

navList.addEventListener("mouseover", function(event){
    //highlights the mouseover target red on mouseover
    event.target.style.color = "red";
    //reset the color after a timeout of 700
    setTimeout(function(){
        event.target.style.color ="blue";
    }, 700);
},false);