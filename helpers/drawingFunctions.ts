import { offset, starWarsFont, starWarsFontSize } from './constants';

export const drawTitle = (ctx: CanvasRenderingContext2D, frameCount: number) => {
	ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
	ctx.font = `${(frameCount / 10) * starWarsFontSize}rem ${starWarsFont}`;
	const text = "@";
	const textWidth = ctx.measureText(text).width;
	ctx.textBaseline = 'middle';
	ctx.strokeText(text, window.innerWidth / 2 - textWidth / 2, window.innerHeight / 2 + offset * frameCount / 10);
	ctx.strokeStyle = `#FCC201`;


	ctx.beginPath();       // Start a new path
	ctx.moveTo(0, window.innerHeight / 2);    // Move the pen to (30, 50)
	ctx.lineTo(window.innerWidth, window.innerHeight / 2);  // Draw a line to (150, 100)
	ctx.stroke();

	ctx.beginPath();       // Start a new path
	ctx.moveTo(window.innerWidth / 2, 0);    // Move the pen to (30, 50)
	ctx.lineTo(window.innerWidth / 2, window.innerHeight);  // Draw a line to (150, 100)
	ctx.stroke();
}