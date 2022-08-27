import { useEffect, useRef } from 'react';
import { canvasOptions } from '../../interfaces/canvas-interfaces';

interface PropsInterface {
	draw: (context: RenderingContext | null | undefined, frameCount: number) => void;
	options : canvasOptions;
}

export default function useCanvas(props: PropsInterface) {
	const { draw , options } = props;
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(
		() => {
			const canvas = canvasRef.current;
			const context =  canvas?.getContext(options.context);
			let animationId: number;
			let frameCount = 0;
			const render = () => {
				frameCount++;
				draw(context, frameCount);
				animationId = window.requestAnimationFrame(render);
			};
			render();
			return () => {
				window.cancelAnimationFrame(animationId);
			};
		},
		[ draw ]
	);

	return canvasRef;
}
