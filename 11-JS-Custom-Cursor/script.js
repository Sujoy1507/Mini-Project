let main = document.querySelector("main");
let cursor = document.querySelector("#cursor");

main.addEventListener("mousemove", (event) => {
  cursor.style.top = event.pageY + "px";
  cursor.style.left = event.pageX + "px";
});
