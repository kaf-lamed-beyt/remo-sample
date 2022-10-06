import {ReactSVG} from 'react-svg';

export const Figma: React.FC<{art: string}> = ({art}) => {
	return <ReactSVG src={`public/${art}.svg`} />;
};
