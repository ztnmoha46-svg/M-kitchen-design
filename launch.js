const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    
});

const button = document.querySelector(".click-btn");

button.addEventListener("click",() => {

  const price = parseFloat(document.getElementById("priceInput").value);

  const basic = document.getElementById("basic");
  const standard = document.getElementById("standard");
  const premium = document.getElementById("premium");

  basic.classList.remove("color-budget");
  standard.classList.remove("color-budget");
  premium.classList.remove("color-budget");

  if (price >= 1100 && price < 2000) {
    basic.classList.add("color-budget");
  }
  else if (price >= 2000 && price < 3500) {
    standard.classList.add("color-budget");
  }
else if (price >= 3500) {
    premium.classList.add("color-budget");
  }

});


const waitlistBtn = document.querySelector(".waitlist-btn");

waitlistBtn.addEventListener("click", () => {
  const name = document.getElementById("nameInput").value;
  const email = document.getElementById("emailInput").value;
  const userCount = document.getElementById("totalUsers");
  
  if (name === "" || email === "") {
    alert("Please fill in all fields!");} 
    else {
    alert("");
    userCount.innerText = parseInt(userCount.innerText) + 1;
    document.getElementById("nameInput").value = "";
    document.getElementById("emailInput").value = "";
  }
});




