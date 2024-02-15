function createHart() {
    const hart = document.createElement("div");
    hart.classList.add("hart"); // Change the class name here
  
    hart.style.left = Math.random() * 100 + "vw";
    hart.style.animationDuration = Math.random() * 2 + 3 + "s";
  
    hart.innerText = "💜";
  
    document.body.appendChild(hart);
  
    setTimeout(() => {
      hart.remove();
    }, 5000);
  }
  
  setInterval(createHart, 300);