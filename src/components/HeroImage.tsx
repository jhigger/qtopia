/* eslint-disable @next/next/no-img-element */
const HeroImage = () => {
	return (
		<div className="relative w-full py-16 opacity-100 lg:py-28">
			<div className="absolute top-0 left-0  w-full md:h-[32rem] xl:h-[48rem]">
				<video
					className="h-full w-full object-cover object-center"
					width="100%"
					height="100%"
					autoPlay
					loop
					muted
					playsInline
				>
					<source src="/assets/splash.webm" type="video/webm" />
				</video>
				<div className="mask-image absolute bottom-0 left-0 z-10 h-48 w-full bg-[url('/assets/BG_1920X1080.jpg')] bg-cover bg-bottom bg-repeat-x"></div>
				<div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-transparent to-[#14a8e8]"></div>
			</div>
		</div>
	);
};

export default HeroImage;
