import {spring, useCurrentFrame} from 'remotion';
import {AbsoluteFill} from 'remotion';
import {BikerSVG} from './Biker/index';

export const Biker: React.FC = () => {
	const frame = useCurrentFrame();

	return (
		<AbsoluteFill
			style={{
				justifyContent: 'center',
				alignItems: 'center',
				fontSize: 100,
				backgroundColor: 'white',
			}}
		>
			<BikerSVG />
			The current frame of biker is {frame}
		</AbsoluteFill>
	);
};
