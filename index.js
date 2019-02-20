// Your code goes here
const domContentLoaded = () => {
  document.addEventListener("DOMContentLoaded", function(event) {
    updateDOM()
  });
}

const updateDOM = () => {
  document.getElementById('text').innerHTML = "This is really cool!";
}
