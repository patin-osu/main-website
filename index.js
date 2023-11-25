document.addEventListener("click", function(event) {
    // Create snowflake element
    var snowflake = document.createElement("div");
    snowflake.className = "snowflake";
    snowflake.style.left = event.clientX + "px";
    snowflake.style.top = "0";
    document.getElementById("snowContainer").appendChild(snowflake);
  
    // Animate snowflake falling down
    var animationDuration = Math.random() * 3 + 2; // Duration between 2 to 5 seconds
    snowflake.style.transition = "top " + animationDuration + "s linear";
    snowflake.style.top = window.innerHeight + "px";
  
    // Remove snowflake after animation ends
    snowflake.addEventListener("transitionend", function() {
      snowflake.remove();
    });
  });
  
  // Continuous falling effect
  setInterval(function() {
    var snowflake = document.createElement("div");
    snowflake.className = "snowflake";
    snowflake.style.left = Math.random() * window.innerWidth + "px";
    snowflake.style.top = "0";
    document.getElementById("snowContainer").appendChild(snowflake);
  
    var animationDuration = Math.random() * 3 + 2; // Duration between 2 to 5 seconds
    snowflake.style.transition = "top " + animationDuration + "s linear";
    snowflake.style.top = window.innerHeight + "px";
  
    snowflake.addEventListener("transitionend", function() {
      snowflake.remove();
    });
  }, 500); // Create new snowflake every 0.5 seconds