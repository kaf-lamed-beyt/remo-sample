import {
	AbsoluteFill,
	Sequence,
	interpolate,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {BikerSVG} from './Bike';
import {Juggler} from './Juggler';
import {Writer} from './Writer';

export const Biker: React.FC = () => {
	const frame = useCurrentFrame();
	const {durationInFrames, fps} = useVideoConfig();

	// Fade out the animation at the end
	const opacity = interpolate(
		frame,
		[durationInFrames - 25, durationInFrames - 15],
		[1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	return (
		<>
			<AbsoluteFill style={{backgroundColor: 'pink'}}>
				<BikerSVG />
			</AbsoluteFill>
			<Sequence from={85}>
				<AbsoluteFill
					style={{backgroundColor: 'black', justifyContent: 'center'}}
				>
					<Juggler />
				</AbsoluteFill>
			</Sequence>
		</>
	);
};
