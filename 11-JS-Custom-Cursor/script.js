let main = document.querySelector("main");
let cursor = document.querySelector("#cursor");

main.addEventListener("mousemove", (event) => {
  cursor.style.top = event.clientY + "px";
  cursor.style.left = event.clientX + "px";
});
