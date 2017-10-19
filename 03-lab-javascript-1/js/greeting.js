(function(){

  let myName = document.getElementById("my-name");
  let userName = document.getElementById("user-name");
  let getName = document.getElementById("get-name");
  let getHeader = document.getElementById("get-header");

  function PerformGreeting(ev) {
    myName.innerHTML = userName.value;
    getHeader.classList.add("header-colour");
    ev.preventDefault();
  }

  getName.addEventListener("submit", PerformGreeting);

}());
