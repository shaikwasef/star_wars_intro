import React from 'react';
import useCanvas from '../helpers/custom-hooks/useCanvas';

interface PropsInterface {
	draw: (context: any, frameCount: number, fontLoaded: boolean) => void;
}

export default function Canvas(props: PropsInterface) {
	const canvasRef = useCanvas(props);

	return <canvas ref={canvasRef} />;
}
