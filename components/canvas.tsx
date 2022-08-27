import React from 'react';
import useCanvas from '../helpers/custom-hooks/useCanvas';
import { canvasOptions } from '../interfaces/canvas-interfaces';

interface PropsInterface {
	draw: (context: any, frameCount: number) => void;
	options: canvasOptions;
}

export default function Canvas(props: PropsInterface) {
	const canvasRef = useCanvas(props);

	return <canvas ref={canvasRef} />;
}
