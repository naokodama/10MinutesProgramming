window.onload = function () {
    /* sample */
    const cvs = document.getElementById("my-canvas");
    const ctx = cvs.getContext("2d");
    ctx.fillStyle = "gray";
    ctx.fillRect(50, 50, 200, 100);
    /* implement here */
    ctx.fillStyle = 'green';
    ctx.fillRect(10, 10, 150, 100);

    ctx.strokeStyle="white";
    ctx.fillStyle = "#9C4B00";
    ctx.beginPath();
    ctx.arc(410, 110, 40, 0, 2 * Math.PI, true);
    ctx.stroke();
    ctx.fill();
}
