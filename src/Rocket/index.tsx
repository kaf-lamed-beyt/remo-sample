import {AbsoluteFill, interpolate} from 'remotion';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {vehiclePaths} from './paths';

export const Rocket: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const up = spring({
		fps,
		frame: frame - 20,
		config: {
			damping: 20,
			mass: 15,
		},
	});

	const scale = spring({
		fps,
		frame,
		config: {
			mass: 1,
			stiffness: 200,
		},
	});

	const launch = `translateY(${interpolate(up, [0, 1], [0, -3000])}px)`;

	return (
		<AbsoluteFill
			style={{
				backgroundColor: 'pink',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<svg
				width="800"
				height="800"
				viewBox="0 0 394 394"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g id="Rocket launch">
					<g id="launchpad-and-smoke">
						<path
							id="Vector"
							d="M203.25 309.5C213.605 309.5 222 301.105 222 290.75C222 280.395 213.605 272 203.25 272C192.895 272 184.5 280.395 184.5 290.75C184.5 301.105 192.895 309.5 203.25 309.5Z"
							fill="#E4E4E4"
							stroke="#E4E4E4"
							strokeWidth="6.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							id="Vector_2"
							d="M159.5 322C176.759 322 190.75 308.009 190.75 290.75C190.75 273.491 176.759 259.5 159.5 259.5C142.241 259.5 128.25 273.491 128.25 290.75C128.25 308.009 142.241 322 159.5 322Z"
							fill="#E4E4E4"
							stroke="#E4E4E4"
							strokeWidth="6.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							id="Vector_3"
							d="M297 309.5C307.355 309.5 315.75 301.105 315.75 290.75C315.75 280.395 307.355 272 297 272C286.645 272 278.25 280.395 278.25 290.75C278.25 301.105 286.645 309.5 297 309.5Z"
							fill="#E4E4E4"
							stroke="#E4E4E4"
							strokeWidth="6.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							id="Vector_4"
							d="M359.5 340.75C369.855 340.75 378.25 332.355 378.25 322C378.25 311.645 369.855 303.25 359.5 303.25C349.145 303.25 340.75 311.645 340.75 322C340.75 332.355 349.145 340.75 359.5 340.75Z"
							fill="#E4E4E4"
							stroke="#E4E4E4"
							strokeWidth="6.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							id="Vector_5"
							d="M334.5 322C351.759 322 365.75 308.009 365.75 290.75C365.75 273.491 351.759 259.5 334.5 259.5C317.241 259.5 303.25 273.491 303.25 290.75C303.25 308.009 317.241 322 334.5 322Z"
							fill="#E4E4E4"
							stroke="#E4E4E4"
							strokeWidth="6.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							id="Vector_6"
							d="M102.921 331.039C101.585 331.038 100.251 331.143 98.9319 331.352C96.6264 325.574 92.4911 320.71 87.1589 317.505C81.8267 314.3 75.5912 312.93 69.4066 313.605C63.222 314.28 57.4289 316.963 52.9137 321.242C48.3984 325.522 45.4098 331.164 44.4051 337.303L44.1976 337.302C38.3124 337.309 32.6702 339.65 28.5088 343.811C24.3474 347.973 22.0066 353.615 22 359.5H128.25V356.368C128.242 349.653 125.571 343.215 120.823 338.466C116.074 333.717 109.636 331.046 102.921 331.039Z"
							fill="#E4E4E4"
							stroke="#E4E4E4"
							strokeWidth="6.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							id="Vector_7"
							d="M153.25 78.25H78.25V340.75H153.25V78.25Z"
							fill="#F1F1F1"
							stroke="#231F20"
							strokeWidth="6.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							id="Vector_8"
							d="M78.25 115.75H153.25"
							stroke="#231F20"
							strokeWidth="6.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							id="Vector_9"
							d="M78.25 190.75H153.25"
							stroke="#231F20"
							strokeWidth="6.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							id="Vector_10"
							d="M78.25 265.75H153.25"
							stroke="#231F20"
							strokeWidth="6.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							id="Vector_11"
							d="M78.25 78.25H40.75V340.75H78.25V78.25Z"
							fill="#B1B1B1"
							stroke="#231F20"
							strokeWidth="6.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							id="Vector_12"
							d="M78.25 115.75H40.75"
							stroke="#231F20"
							strokeWidth="6.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							id="Vector_13"
							d="M78.25 78.25H40.75"
							stroke="#231F20"
							strokeWidth="6.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							id="Vector_14"
							d="M78.25 190.75H40.75"
							stroke="#231F20"
							strokeWidth="6.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							id="Vector_15"
							d="M78.25 265.75H40.75"
							stroke="#231F20"
							strokeWidth="6.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							id="Vector_16"
							d="M47 65.75H147C148.658 65.75 150.247 66.4085 151.419 67.5806C152.592 68.7527 153.25 70.3424 153.25 72V78.25H40.75V72C40.75 70.3424 41.4085 68.7527 42.5806 67.5806C43.7527 66.4085 45.3424 65.75 47 65.75Z"
							fill="#1E9CDD"
							stroke="#231F20"
							strokeWidth="6.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							id="Vector_17"
							d="M84.5 65.75H147C148.658 65.75 150.247 66.4085 151.419 67.5806C152.592 68.7527 153.25 70.3424 153.25 72V78.25H78.25V72C78.25 70.3424 78.9085 68.7527 80.0806 67.5806C81.2527 66.4085 82.8424 65.75 84.5 65.75V65.75Z"
							fill="#33DDFF"
							stroke="#231F20"
							strokeWidth="6.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							id="Vector_18"
							d="M65.75 53.25H109.5C111.158 53.25 112.747 53.9085 113.919 55.0806C115.092 56.2527 115.75 57.8424 115.75 59.5V65.75H59.5V59.5C59.5 57.8424 60.1585 56.2527 61.3306 55.0806C62.5027 53.9085 64.0924 53.25 65.75 53.25V53.25Z"
							fill="#B1B1B1"
							stroke="#231F20"
							strokeWidth="6.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							id="Vector_19"
							d="M84.5 53.25H109.5C111.158 53.25 112.747 53.9085 113.919 55.0806C115.092 56.2527 115.75 57.8424 115.75 59.5V65.75H78.25V59.5C78.25 57.8424 78.9085 56.2527 80.0806 55.0806C81.2527 53.9085 82.8424 53.25 84.5 53.25V53.25Z"
							fill="#F4F4F4"
							stroke="#231F20"
							strokeWidth="6.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							id="Vector_20"
							d="M84.5 53.25V40.75"
							stroke="#231F20"
							strokeWidth="6.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							id="Vector_21"
							d="M153.25 340.75H78.25V359.5H153.25V340.75Z"
							fill="#33DDFF"
							stroke="#231F20"
							strokeWidth="6.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							id="Vector_22"
							d="M78.25 340.75H40.75V359.5H78.25V340.75Z"
							fill="#1E9CDD"
							stroke="#231F20"
							strokeWidth="6.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							id="Vector_23"
							d="M15.75 359.5H378.25C381.565 359.5 384.745 360.817 387.089 363.161C389.433 365.505 390.75 368.685 390.75 372V390.75H3.25V372C3.25 368.685 4.56696 365.505 6.91117 363.161C9.25537 360.817 12.4348 359.5 15.75 359.5V359.5Z"
							fill="#333333"
							stroke="#231F20"
							strokeWidth="6.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							id="Vector_24"
							d="M390.75 372H3.25V390.75H390.75V372Z"
							fill="#FF8B00"
							stroke="#231F20"
							strokeWidth="6.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							id="Vector_25"
							d="M103.25 359.5H378.25C381.565 359.5 384.745 360.817 387.089 363.161C389.433 365.505 390.75 368.685 390.75 372V390.75H90.75V372C90.75 368.685 92.067 365.505 94.4112 363.161C96.7554 360.817 99.9348 359.5 103.25 359.5V359.5Z"
							fill="#808080"
							stroke="#231F20"
							strokeWidth="6.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</g>
					<g id="smoke">
						<path
							id="Vector_26"
							d="M122 340.75C122 337.652 122.768 334.603 124.235 331.874C125.701 329.145 127.821 326.822 130.405 325.113C132.988 323.404 135.955 322.361 139.04 322.078C142.125 321.796 145.232 322.281 148.083 323.493C146.191 316.249 146.973 308.566 150.286 301.852C153.599 295.138 159.222 289.843 166.122 286.938C173.022 284.033 180.739 283.713 187.856 286.036C194.974 288.359 201.015 293.17 204.873 299.586L205.205 299.427C209.442 297.423 213.161 294.47 216.074 290.798C218.986 287.126 221.014 282.832 222 278.25H290.75C291.733 282.833 293.76 287.128 296.672 290.801C299.585 294.474 303.305 297.426 307.544 299.427L307.877 299.586C311.694 293.098 317.737 288.215 324.882 285.845C332.027 283.475 339.79 283.778 346.729 286.699C353.667 289.62 359.31 294.96 362.609 301.726C365.908 308.493 366.639 316.227 364.667 323.493C367.225 322.406 369.993 321.901 372.77 322.015C375.548 322.129 378.265 322.86 380.725 324.153C383.186 325.447 385.328 327.271 386.996 329.494C388.665 331.718 389.818 334.284 390.373 337.008C390.928 339.731 390.87 342.545 390.204 345.243C389.537 347.942 388.28 350.459 386.521 352.611C384.763 354.764 382.547 356.499 380.036 357.69C377.525 358.882 374.78 359.5 372 359.5H140.75C135.777 359.5 131.008 357.525 127.492 354.008C123.975 350.492 122 345.723 122 340.75Z"
							fill="white"
							stroke="#231F20"
							strokeWidth="6.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							id="Vector_27"
							d="M390.75 372H90.75V390.75H390.75V372Z"
							fill="#FFC700"
							stroke="#231F20"
							strokeWidth="6.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<g id="Vector_28">
							<path
								d="M159.5 340.793C159.501 338.207 160.063 335.652 161.147 333.305C162.231 330.957 163.811 328.872 165.778 327.194C167.745 325.515 170.052 324.283 172.541 323.582C175.03 322.882 177.641 322.729 180.195 323.134C181.823 319.055 184.742 315.622 188.505 313.359C192.269 311.097 196.671 310.13 201.037 310.606C205.402 311.083 209.491 312.977 212.679 315.998C215.866 319.019 217.975 323.001 218.685 327.335L218.831 327.334C222.985 327.339 226.968 328.991 229.905 331.929C232.843 334.866 234.495 338.849 234.5 343.003"
								fill="white"
							/>
							<path
								d="M159.5 340.793C159.501 338.207 160.063 335.652 161.147 333.305C162.231 330.957 163.811 328.872 165.778 327.194C167.745 325.515 170.052 324.283 172.541 323.582C175.03 322.882 177.641 322.729 180.195 323.134C181.823 319.055 184.742 315.622 188.505 313.359C192.269 311.097 196.671 310.13 201.037 310.606C205.402 311.083 209.491 312.977 212.679 315.998C215.866 319.019 217.975 323.001 218.685 327.335L218.831 327.334C222.985 327.339 226.968 328.991 229.905 331.929C232.843 334.866 234.495 338.849 234.5 343.003"
								stroke="#231F20"
								strokeWidth="6.25"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</g>
						<g id="Vector_29">
							<path
								d="M259.5 343.003C259.498 340.39 260.118 337.813 261.308 335.486C262.498 333.159 264.224 331.148 266.344 329.62C268.464 328.091 270.917 327.089 273.501 326.695C276.085 326.301 278.725 326.528 281.205 327.355C281.163 326.809 281.143 326.262 281.143 325.714C281.143 320.04 283.273 314.572 287.111 310.394C290.949 306.215 296.216 303.628 301.869 303.146C307.523 302.664 313.151 304.321 317.641 307.79C322.131 311.259 325.156 316.287 326.117 321.879C328.509 320.869 331.08 320.351 333.677 320.354C338.866 320.36 343.841 322.424 347.511 326.094C351.18 329.763 353.244 334.738 353.25 339.927"
								fill="white"
							/>
							<path
								d="M259.5 343.003C259.498 340.39 260.118 337.813 261.308 335.486C262.498 333.159 264.224 331.148 266.344 329.62C268.464 328.091 270.917 327.089 273.501 326.695C276.085 326.301 278.725 326.528 281.205 327.355C281.163 326.809 281.143 326.262 281.143 325.714C281.143 320.04 283.273 314.572 287.111 310.394C290.949 306.215 296.216 303.628 301.869 303.146C307.523 302.664 313.151 304.321 317.641 307.79C322.131 311.259 325.156 316.287 326.117 321.879C328.509 320.869 331.08 320.351 333.677 320.354C338.866 320.36 343.841 322.424 347.511 326.094C351.18 329.763 353.244 334.738 353.25 339.927"
								stroke="#231F20"
								strokeWidth="6.25"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</g>
					</g>
					<g
						id="vehicle"
						style={{
							transform: `scale(${scale}) ${launch}`,
							transformOrigin: 'center center',
							transformBox: 'fill-box',
						}}
					>
						<path
							id="Vector_30"
							d={vehiclePaths.one}
							fill="#FF5500"
							stroke="#FF5500"
							strokeWidth="6.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							id="Vector_31"
							d={vehiclePaths.two}
							fill="#FFC700"
							stroke="#FFC700"
							strokeWidth="6.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							id="Vector_32"
							d={vehiclePaths.three}
							fill="#FF3446"
							stroke="#231F20"
							strokeWidth="6.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							id="Vector_33"
							d="M225.125 265.75H209.5C209.5 269.065 210.817 272.245 213.161 274.589C215.505 276.933 218.685 278.25 222 278.25H237.625C234.31 278.25 231.13 276.933 228.786 274.589C226.442 272.245 225.125 269.065 225.125 265.75Z"
							fill="#E62234"
							stroke="#E62234"
							strokeWidth="6.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							id="Vector_34"
							d="M209.5 265.75H303.25C303.25 269.065 301.933 272.245 299.589 274.589C297.245 276.933 294.065 278.25 290.75 278.25H222C218.685 278.25 215.505 276.933 213.161 274.589C210.817 272.245 209.5 269.065 209.5 265.75Z"
							stroke="#231F20"
							strokeWidth="6.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							id="Vector_35"
							d="M303.25 265.75H209.5L215.75 253.25H297L303.25 265.75Z"
							fill="white"
							stroke="#231F20"
							strokeWidth="6.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							id="Vector_36"
							d="M215.75 253.25L209.5 265.75H228.25L234.5 253.25H215.75Z"
							fill="#C8D4FA"
							stroke="#C8D4FA"
							strokeWidth="6.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							id="Vector_37"
							d="M303.25 265.75H209.5L215.75 253.25H297L303.25 265.75Z"
							stroke="#231F20"
							strokeWidth="6.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							id="Vector_38"
							d="M303.25 202.017L343.688 227.29C344.634 227.881 345.721 228.209 346.836 228.238C347.951 228.267 349.054 227.997 350.03 227.457C351.006 226.916 351.819 226.124 352.385 225.162C352.951 224.201 353.25 223.106 353.25 221.99V204.536C353.25 198.859 351.318 193.352 347.772 188.919L303.25 133.267V202.017Z"
							fill="#FF3446"
							stroke="#231F20"
							strokeWidth="6.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							id="Vector_39"
							d="M259.5 3.25C224.343 22 197 87.075 197 143.389V228.25C197 234.88 199.634 241.239 204.322 245.928C209.011 250.616 215.37 253.25 222 253.25H297C303.63 253.25 309.989 250.616 314.678 245.928C319.366 241.239 322 234.88 322 228.25V143.389C322 87.075 294.657 22 259.5 3.25Z"
							fill="white"
						/>
						<path
							id="Vector_40"
							d="M215.75 228.25V143.389C215.75 87.075 228.25 34.5 259.5 3.25C224.343 22 197 87.075 197 143.389V228.25C197 234.88 199.634 241.239 204.322 245.928C209.011 250.616 215.37 253.25 222 253.25H237C225.264 253.25 215.75 242.057 215.75 228.25Z"
							fill="#E4E4E4"
							stroke="#E4E4E4"
							strokeWidth="6.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							id="Vector_41"
							d="M259.5 3.25C224.343 22 197 87.075 197 143.389V228.25C197 234.88 199.634 241.239 204.322 245.928C209.011 250.616 215.37 253.25 222 253.25H297C303.63 253.25 309.989 250.616 314.678 245.928C319.366 241.239 322 234.88 322 228.25V143.389C322 87.075 294.657 22 259.5 3.25Z"
							stroke="#231F20"
							strokeWidth="6.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							id="Vector_42"
							d="M197 228.25H322C322 234.88 319.366 241.239 314.678 245.928C309.989 250.616 303.63 253.25 297 253.25H222C215.37 253.25 209.011 250.616 204.322 245.928C199.634 241.239 197 234.88 197 228.25Z"
							fill="#FF3446"
							stroke="#231F20"
							strokeWidth="6.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							id="Vector_43"
							d="M215.752 228.25H197C197 234.88 199.634 241.239 204.322 245.928C209.011 250.616 215.37 253.25 222 253.25H240.75C234.12 253.25 227.761 250.616 223.073 245.927C218.385 241.239 215.751 234.88 215.752 228.25V228.25Z"
							fill="#E62234"
							stroke="#E62234"
							strokeWidth="6.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							id="Vector_44"
							d="M197 228.25H322C322 234.88 319.366 241.239 314.678 245.928C309.989 250.616 303.63 253.25 297 253.25H222C215.37 253.25 209.011 250.616 204.322 245.928C199.634 241.239 197 234.88 197 228.25Z"
							stroke="#231F20"
							strokeWidth="6.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							id="Vector_45"
							d="M224.42 40.75H294.58C286.475 25.3205 274.355 12.3648 259.5 3.25C244.645 12.3648 232.525 25.3205 224.42 40.75V40.75Z"
							fill="#FF3446"
							stroke="#231F20"
							strokeWidth="6.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							id="Vector_46"
							d="M224.43 40.7336L224.42 40.75H234.42C240.43 26.8289 248.929 14.121 259.5 3.25C244.724 12.451 232.628 25.3784 224.43 40.7336V40.7336Z"
							fill="#E62234"
							stroke="#E62234"
							strokeWidth="6.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							id="Vector_47"
							d="M224.42 40.75H294.58C286.475 25.3205 274.355 12.3648 259.5 3.25C244.645 12.3648 232.525 25.3205 224.42 40.75V40.75Z"
							stroke="#231F20"
							strokeWidth="6.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							id="Vector_48"
							d="M275.125 178.25C290.658 178.25 303.25 165.658 303.25 150.125C303.25 134.592 290.658 122 275.125 122C259.592 122 247 134.592 247 150.125C247 165.658 259.592 178.25 275.125 178.25Z"
							fill="#33DDFF"
							stroke="#231F20"
							strokeWidth="6.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							id="Vector_49"
							d="M275.125 97C282.029 97 287.625 91.4036 287.625 84.5C287.625 77.5964 282.029 72 275.125 72C268.221 72 262.625 77.5964 262.625 84.5C262.625 91.4036 268.221 97 275.125 97Z"
							fill="#33DDFF"
							stroke="#231F20"
							strokeWidth="6.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							id="Vector_50"
							d="M275.125 134.5C279.269 134.5 283.243 136.146 286.174 139.076C289.104 142.007 290.75 145.981 290.75 150.125"
							stroke="white"
							strokeWidth="6.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							id="Vector_51"
							d="M215.75 202.017L175.313 227.29C174.366 227.881 173.279 228.209 172.164 228.238C171.049 228.267 169.946 227.997 168.97 227.457C167.994 226.916 167.181 226.124 166.615 225.162C166.049 224.201 165.75 223.106 165.75 221.99V204.536C165.75 198.859 167.682 193.352 171.228 188.919L215.75 133.267V202.017Z"
							fill="#FF3446"
							stroke="#231F20"
							strokeWidth="6.25"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</g>
				</g>
			</svg>
		</AbsoluteFill>
	);
};
