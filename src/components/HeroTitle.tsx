import Image from "next/image";

const HeroTitle = () => {
	return (
		<div className="relative z-10 flex min-h-screen flex-col items-end justify-end px-6 pb-8 text-xl text-white md:px-6">
			<Image
				src={"/assets/logo.png"}
				alt={"qtopia logo"}
				width="221"
				height="121"
				loading="eager"
				priority
			/>
		</div>
	);
};

export default HeroTitle;
