var currentNumber = document.getElementById("currentNumber");

function increment() {
  if (document.getElementsByName("sub")[0].disabled == true) {
    document.getElementsByName("sub")[0].disabled = false;
  }
  if (currentNumber.innerHTML == 10) {
    document.getElementsByName("add")[0].disabled = true;
  } else {
    currentNumber.innerHTML = parseInt(currentNumber.innerHTML) + 1;
  }
}

function decrement() {
  if (document.getElementsByName("add")[0].disabled == true) {
    document.getElementsByName("add")[0].disabled = false;
  }
  if (currentNumber.innerHTML == -10) {
    document.getElementsByName("sub")[0].disabled = true;
  } else {
    currentNumber.innerHTML = parseInt(currentNumber.innerHTML) - 1;
  }
}

document.addEventListener("click", myFunction);

function myFunction(){
  if(document.getElementById("currentNumber").innerHTML < 0){
    document.getElementById("currentNumber").style.color = "red";
  } else if(document.getElementById("currentNumber").innerHTML > 0){
    document.getElementById("currentNumber").style.color = "green";
  } else {
    document.getElementById("currentNumber").style.color = "black";
  }
}