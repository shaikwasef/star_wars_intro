export function resizeCanvas(canvas: HTMLCanvasElement) {
	const width = canvas.clientWidth;
	const height = canvas.clientHeight;

	// If it's resolution does not match change it
	if (canvas.width !== width || canvas.height !== height) {
		canvas.width = width;
		canvas.height = height;
		return true;
	}

	return false;
}