var numOne = document.getElementById("numOne");
var numTwo = document.getElementById("numTwo");
var addSum = document.getElementById("sum");
var Wren = document.getElementById("wren");

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