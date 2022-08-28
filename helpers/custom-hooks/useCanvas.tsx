import { useEffect, useRef } from 'react';
import { canvasContext } from '../constants';
import { resizeCanvas } from '../helpers';
interface PropsInterface {
	draw: (context: RenderingContext | null | undefined, frameCount: number, fontLoaded: boolean) => void;
}

export default function useCanvas(props: PropsInterface) {
	const { draw } = props;
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(
		() => {
			const canvas = canvasRef.current;
			const context = canvas?.getContext(canvasContext);
			if (context?.canvas) {
				resizeCanvas(context?.canvas);
			}
			let animationId: number;
			let frameCount = 0;

			const render = (fontLoaded: boolean) => {
				frameCount++;
				draw(context, frameCount, fontLoaded);
				// animationId = window.requestAnimationFrame(render);
			};

			document.fonts.ready.then(() => {
				render(true);
			})

			return () => {
				window.cancelAnimationFrame(animationId);
			};
		},
		[draw]
	);

	return canvasRef;
}
