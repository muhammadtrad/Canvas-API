const canvas = document.querySelector(".my-canvas");
const context = canvas.getContext("2d");
context.lineWidth = 2;
/* context.moveTo(50,50); //start
context.lineTo(100,100); //end
context.stroke();

context.moveTo(20,20); //start
context.lineTo(40, 80); //end
context.stroke(); */
/* context.fillStyle = "red";
context.rect(0,0,100,100);
context.fill(); */

/* context.arc(centerX, centerY, radius, startAngle, endAngle) */
context.beginPath();
context.arc(100, 100, 10, 0, Math.PI*2);
context.stroke();

const draw = (startX, startY, endX, endY) => {
		context.moveTo(startX, startY);
    context.lineTo(endX, endY);
    context.stroke();
}

draw(0,0,300,155);