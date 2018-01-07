//look for changes on the slider value
//map the numbers 1-4 to the four different layouts ["minimalist", "creative", "professional", "pretentious"]
//change the value --> add display: none to all the values, then remove display: none from the chosen valueEl
if (!NodeList.prototype.forEach && Array.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

function init(){
  websiteUI.switchStyle(2, websiteUI.styleArr)
  navBar();
}
//read slider input value...
var websiteUI = (function(){
  let styleArr = ["minimalist", "creative", "professional", "pretentious"];

  (function user_choice(){
    document.getElementById("0").addEventListener("click", function(){switchStyle(0, styleArr)})
    document.getElementById("1").addEventListener("click", function(){switchStyle(1, styleArr)})
    document.getElementById("2").addEventListener("click", function(){switchStyle(2, styleArr)})
    document.getElementById("3").addEventListener("click", function(){switchStyle(3, styleArr)})
  })();
    // let inputNum = document.querySelector(".js-ranger-input");
    // inputNum.addEventListener("input", function(){
    //   switchStyle(styleArr[inputNum.value -1], styleArr)
    //   console.log(inputNum.value

  function switchStyle(num, arr){
    let type = arr[num];
    arr.map(function(item){
    document.querySelectorAll(`.${item}`).forEach(node => {node.classList.add("hidden")});
    })
    document.querySelectorAll(`.${type}`).forEach(item => {item.classList.remove("hidden")});

    document.querySelectorAll("li").forEach(item => {item.classList.remove("active")});
    document.getElementById(num).classList.add("active");
    }

  return{
    styleArr: styleArr,
    switchStyle: switchStyle,
  }
  })();

function navBar(){
  document.querySelector("i").addEventListener("click", function(){
    let nav = document.querySelector(".nav").classList
    if (nav[1] === "seen"){nav.remove("seen")}
    else{nav.add("seen")}
  })
}

init();
