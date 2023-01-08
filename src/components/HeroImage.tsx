/* eslint-disable @next/next/no-img-element */
const HeroImage = () => {
	return (
		<div className="relative w-full opacity-100">
			<div className="w-full md:h-[32rem] xl:h-[48rem]">
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
					<source
						src="https://d20wbi5cgoftj2.cloudfront.net/qtopiavideos/splash.mp4"
						type="video/mp4"
					/>
				</video>
			</div>
		</div>
	);
};

export default HeroImage;
