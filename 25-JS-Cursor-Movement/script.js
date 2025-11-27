document.addEventListener("mousemove", (event) => {
    document.body.style.setProperty("--x", event.clientX + "px");
    document.body.style.setProperty("--y", event.clientY + "px");
});
