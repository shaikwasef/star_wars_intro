import { starWarsFont, starWarsFontSize, starWarsTitleLineHeight } from './constants';

export const drawTitle = (ctx: CanvasRenderingContext2D, frameCount: number, fontLoaded: boolean) => {
	if (!fontLoaded) {
		return;
	}
	ctx.font = `${starWarsFontSize} ${starWarsFont}`;
	const text = "STAR/nWARS";
	const lines = text.split('/n');
	const lineHeight = starWarsTitleLineHeight;
	const textWidth = ctx.measureText(lines[0]).width;
	lines.forEach((word, index) => {
		ctx.fillText(word, window.innerWidth / 2 - textWidth / 2, window.innerHeight / 2 + index * lineHeight);
	})
	ctx.fillStyle = `rgb(255,0,0)`;
}