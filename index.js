var numberofbtns=document.querySelectorAll(".btn").length;
for(var i=0;i<numberofbtns;i++)
{
  document.querySelectorAll(".btn")[i].addEventListener("click",function(){
    var HTMLkey=this.innerHTML;
    makeSound(HTMLkey);
  });
}

function makeSound(key)
{
    switch (key) {
      case "Q":
      case "q":
      var E0 = new Audio('sounds/E0.mp3');
      E0.play();
      break;
      case "W":
      case "w":
      var F0= new Audio('sounds/F0.mp3');
      F0.play();
      break;
      case "E":
      case "e":
      var G0 = new Audio('sounds/G0.mp3');
      G0.play();
      break;
      case "R":
      case "r":
      var A = new Audio('sounds/A.mp3');
      A.play();
      break;
      case "T":
      case "t":
      var B = new Audio('sounds/B.mp3');
      B.play();
      break;
      case "Y":
      case "y":
      var C = new Audio('sounds/C.mp3');
      C.play();
      break;
      case "U":
      case "u":
      var D = new Audio('sounds/D.mp3');
      D.play();
      break;
      case "I":
      case "i":
      var E = new Audio('sounds/E.mp3');
      E.play();
      break;
      case "O":
      case "o":
      var F = new Audio('sounds/F.mp3');
      F.play();
      break;
      case "P":
      case "p":
      var G = new Audio('sounds/G.mp3');
      G.play();
      break;
      case "A":
      case "a":
      var A1 = new Audio('sounds/A1.mp3');
      A1.play();
      break;
      case "S":
      case "s":
      var B1 = new Audio('sounds/B1.mp3');
      B1.play();
      break;
      case "D":
      case "d":
      var C1 = new Audio('sounds/C1.mp3');
      C1.play();
      break;
      case "F":
      case "f":
      var D1 = new Audio('sounds/D1.mp3');
      D1.play();
      break;
      case "G":
      case "g":
      var E1 = new Audio('sounds/E1.mp3');
      E1.play();
      break;
      case "H":
      case "h":
      var F1 = new Audio('sounds/F1.mp3');
      F1.play();
      break;
      case "J":
      case "j":
      var G1 = new Audio('sounds/G1.mp3');
      G1.play();
      break;
      case "K":
      case "k":
      var A2 = new Audio('sounds/A2.mp3');
      A2.play();
      break;
      case "L":
      case "l":
      var B2 = new Audio('sounds/B2.mp3');
      B2.play();
      break;
      case "Z":
      case "z":
      var C2 = new Audio('sounds/C2.mp3');
      C2.play();
      break;
      default:
      alert("you pressed a wrong key!");
    }
}
document.addEventListener("keydown",function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
});
function buttonAnimation(currentKey)
{
  var activebutton=document.querySelector("."+currentKey);
  activebutton.classList.add("pressed");
  setTimeout(function(){
    activebutton.classList.remove("pressed");
  },100);
}
