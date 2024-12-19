const cercle = document.getElementById("cercle");

document.addEventListener("mousemove", (event) => {
    cercle.style.left = event.clientX + "px";
    cercle.style.top = event.clientY + "px";
});
