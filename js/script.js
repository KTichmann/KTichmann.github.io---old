//look for changes on the slider value
//map the numbers 1-4 to the four different layouts ["minimalist", "creative", "professional", "pretentious"]
//change the value --> add display: none to all the values, then remove display: none from the chosen valueEl

//For support in IE/Edge and older browsers:
if (!NodeList.prototype.forEach && Array.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}
//
function init(){
  websiteUI.switchStyle(2, websiteUI.styleArr);
}
//read slider input value...
const websiteUI = (function(){
  const styleArr = ["minimalist", "creative", "professional", "pretentious"];
  //IIFE to add event listeners to buttons
    (function user_choice(){
      for(let i=0; i < styleArr.length; i++){
        document.getElementById(i.toString()).addEventListener("click", () => {switchStyle(i, styleArr); setActive("li", i)} );
      }
    })();
  //Takes an array of class-names, and sets every element with these class name to hidden, except the one at index num
  function switchStyle(num, arr){
    let choice = arr[num];
    //Set every item to hidden
    arr.forEach(function(item){
      document.querySelectorAll(`.${item}`).forEach(node => {node.classList.add("hidden"); node.classList.remove("active")});
    });
    //remove hidden tag on all items with selected class
    document.querySelectorAll(`.${choice}`).forEach(item => {item.classList.remove("hidden")});
  }
  //removes active tag from all elements of type "type" (eg. "#id", ".class" etc.), adds active tag to
  function setActive(type, num){
    document.querySelectorAll(type).forEach(item => {item.classList.remove("active")});
    document.getElementById(num).classList.add("active");
  }
  function addAnimation(el, animation){
  	document.querySelectorAll(el).forEach((element) => {
  	  element.addEventListener("mouseover", () => {element.classList.add("animated", animation) });
  	  element.addEventListener("mouseleave", () => {element.classList.remove("animated", animation)});
  	});
  }
  return{
    styleArr: styleArr,
    switchStyle: switchStyle,
    addAnimation: addAnimation
  };
  })();

init();
